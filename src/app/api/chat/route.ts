import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Safeglobal's AI Safety Assistant, an expert in workplace safety, industrial risk management, and AI-powered safety solutions. You are knowledgeable, professional, and helpful.

About Safeglobal:
- Leading AI-powered workplace safety platform protecting 500,000+ workers across 30+ countries
- 99.7% detection accuracy with sub-second alert latency
- Core products: AI Safety Monitoring, Predictive Risk Analytics, Compliance Automation, Safety Training Programs, Hardware + IoT Integration
- Certifications: ISO 45001, ISO 27001, IEC 61508, SOC 2 Type II
- Average 340% ROI for enterprise clients
- 73% average risk reduction, $2.1B+ in client savings
- Pricing: Starter ($499/mo), Professional ($1,299/mo), Enterprise (Custom)
- Deployment: 4-6 weeks typical, first insights in 48 hours
- Supports 200+ global safety standards including OSHA, ISO, GDPR, CCPA
- On-premise deployment available for Enterprise
- Privacy-by-design: data anonymization, GDPR/CCPA compliant

Guidelines:
- Be concise but thorough (2-4 sentences for simple questions, more for complex ones)
- Use specific data points when relevant (detection rate, ROI, etc.)
- If asked about pricing, encourage scheduling a demo for custom quotes
- If asked about competitors, focus on Safeglobal's unique strengths without disparaging others
- Always be professional and safety-focused
- If you don't know something, admit it and offer to connect with the team
- Use safety-related emojis sparingly for visual appeal`;

type ChatMessage = { role: "system" | "assistant" | "user"; content: string };

const conversations = new Map<string, ChatMessage[]>();

// Simple in-memory rate limiting per IP.
// Note: this resets on restart and is per-instance; use a shared store (e.g. Redis) when scaling out.
const rateLimits = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const MAX_MESSAGE_LENGTH = 2000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodically clean up expired entries to bound memory usage
  if (rateLimits.size > 1000) {
    for (const [key, value] of rateLimits) {
      if (now - value.windowStart >= RATE_LIMIT_WINDOW_MS) rateLimits.delete(key);
    }
  }

  const entry = rateLimits.get(ip);
  if (!entry || now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    rateLimits.set(ip, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const { sessionId, message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message is too long (max ${MAX_MESSAGE_LENGTH} characters)` },
        { status: 400 }
      );
    }

    const key = typeof sessionId === "string" && sessionId ? sessionId : "default";
    let history = conversations.get(key) || [
      { role: "system", content: SYSTEM_PROMPT } as ChatMessage,
    ];

    history.push({ role: "user", content: message });

    // Trim to last 20 messages to avoid token limits (always keep the system prompt first)
    if (history.length > 20) {
      history = [history[0], ...history.slice(-19)];
    }

    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: history,
      thinking: { type: "disabled" },
    });

    const aiResponse =
      completion.choices?.[0]?.message?.content ||
      "I'm sorry, I'm having trouble processing your request. Please try again or contact our team directly.";

    history.push({ role: "assistant", content: aiResponse });
    conversations.set(key, history);

    // Clean up old conversations
    if (conversations.size > 100) {
      const oldestKey = conversations.keys().next().value;
      if (oldestKey) conversations.delete(oldestKey);
    }

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get response. Please try again.",
      },
      { status: 500 }
    );
  }
}
