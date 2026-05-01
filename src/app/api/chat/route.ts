import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are SafeGlobal's AI Safety Assistant, an expert in workplace safety, industrial risk management, and AI-powered safety solutions. You are knowledgeable, professional, and helpful.

About SafeGlobal:
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
- If asked about competitors, focus on SafeGlobal's unique strengths without disparaging others
- Always be professional and safety-focused
- If you don't know something, admit it and offer to connect with the team
- Use safety-related emojis sparingly for visual appeal`;

const conversations = new Map<string, Array<{ role: string; content: string }>>();

export async function POST(req: NextRequest) {
  try {
    const { sessionId, message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const key = sessionId || "default";
    let history = conversations.get(key) || [
      { role: "assistant", content: SYSTEM_PROMPT },
    ];

    history.push({ role: "user", content: message });

    // Trim to last 20 messages to avoid token limits
    if (history.length > 20) {
      history = [history[0], ...history.slice(-19)];
    }

    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: history as Array<{ role: "assistant" | "user"; content: string }>,
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
