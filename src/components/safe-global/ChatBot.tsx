"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Shield,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const quickReplies = [
  "What does SafeGlobal do?",
  "How does AI safety monitoring work?",
  "Request a demo",
  "Pricing information",
];

// Fallback responses when LLM API is unavailable
const fallbackResponses: Record<string, string> = {
  default:
    "Thank you for your interest in SafeGlobal! I can help you learn about our AI-powered safety solutions, request a demo, or connect you with our team. What would you like to know?",
  demo: "Great choice! Our team would love to show you how SafeGlobal can transform your safety operations. Please fill out the contact form below, or I can connect you with our sales team directly. Would you like me to help schedule a demo?",
  pricing:
    "SafeGlobal offers flexible enterprise pricing: Starter ($499/mo), Professional ($1,299/mo), and Enterprise (Custom). All plans include a 14-day free trial. Would you like to schedule a consultation for a custom quote?",
  monitoring:
    "Our AI Safety Monitoring uses advanced computer vision and sensor networks to detect workplace hazards in real-time. The system processes millions of data points per second with sub-second alert latency, covering PPE compliance, zone monitoring, and hazard detection 24/7.",
  what:
    "SafeGlobal is the leading AI-powered workplace safety platform. We provide: 🛡️ Real-time safety monitoring with computer vision, 📊 Predictive risk analytics using ML, 📋 Automated compliance management, 🎓 AI-personalized safety training, and 🔌 IoT hardware integration. We protect 500K+ workers across 30+ countries.",
  predictive:
    "Our Predictive Risk Analytics uses machine learning to forecast potential safety incidents before they occur. By analyzing historical data, environmental conditions, and behavioral patterns, our AI models can predict risks with 99.7% accuracy and recommend preventive actions.",
  compliance:
    "Our Compliance Automation engine tracks 200+ global safety standards and automatically updates as regulations change. It handles documentation, gap analysis, audit preparation, and continuous monitoring — saving our clients 200+ hours per quarter on compliance tasks.",
};

function getFallbackResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("demo") || lower.includes("request"))
    return fallbackResponses.demo;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing"))
    return fallbackResponses.pricing;
  if (lower.includes("monitor") || lower.includes("detect"))
    return fallbackResponses.monitoring;
  if (lower.includes("what") || lower.includes("who") || lower.includes("about"))
    return fallbackResponses.what;
  if (lower.includes("predict") || lower.includes("risk"))
    return fallbackResponses.predictive;
  if (lower.includes("compliance") || lower.includes("regulation"))
    return fallbackResponses.compliance;
  return fallbackResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm SafeGlobal's AI assistant powered by real AI. I can help you learn about our safety solutions, request a demo, or answer any questions. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  const [useLLM, setUseLLM] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        content: text.trim(),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      if (useLLM) {
        try {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId, message: text.trim() }),
          });

          if (res.ok) {
            const data = await res.json();
            if (data.success && data.response) {
              const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.response,
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, botMsg]);
              setIsTyping(false);
              return;
            }
          }
          // Fallback to predefined responses
          throw new Error("LLM API unavailable");
        } catch {
          // Use fallback
          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: getFallbackResponse(text),
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
        }
      } else {
        // Use fallback predefined responses
        setTimeout(() => {
          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: getFallbackResponse(text),
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
        }, 800 + Math.random() * 1000);
      }
    },
    [sessionId, useLLM]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer ${
          isOpen
            ? "bg-destructive rotate-0"
            : "bg-safeglobal hover:bg-safeglobal-dark hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageSquare className="w-5 h-5 text-white" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-safeglobal rounded-full animate-pulse border-2 border-background" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[70vh] rounded-2xl border border-border bg-card shadow-2xl shadow-black/30 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gradient-to-r from-safeglobal/10 to-cyan-500/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-safeglobal/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-safeglobal" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">SafeGlobal AI</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-safeglobal animate-pulse" />
                    <span className="text-[10px] text-safeglobal">
                      {useLLM ? "AI-Powered" : "Quick Responses"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setUseLLM(!useLLM)}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium border border-border hover:border-safeglobal/30 hover:bg-safeglobal/5 transition-all cursor-pointer"
                  title={useLLM ? "Switch to quick responses" : "Switch to AI-powered responses"}
                >
                  <Sparkles className={`w-3 h-3 ${useLLM ? "text-safeglobal" : "text-muted-foreground"}`} />
                  {useLLM ? "AI" : "Quick"}
                </button>
                <Badge
                  variant="secondary"
                  className="text-[9px] bg-safeglobal/10 text-safeglobal"
                >
                  Assistant
                </Badge>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === "assistant"
                      ? "bg-safeglobal/20"
                      : "bg-cyan-500/20"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="w-4 h-4 text-safeglobal" />
                  ) : (
                    <User className="w-4 h-4 text-cyan-400" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-muted/50 text-foreground rounded-tl-none"
                      : "bg-safeglobal/20 text-foreground rounded-tr-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-safeglobal/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-safeglobal" />
                </div>
                <div className="p-3 rounded-xl bg-muted/50 rounded-tl-none">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 rounded-full bg-safeglobal animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-safeglobal animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-safeglobal animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-safeglobal/20 text-safeglobal bg-safeglobal/5 hover:bg-safeglobal/10 transition-colors cursor-pointer"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-border bg-card/50"
          >
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SafeGlobal..."
                className="bg-background/50 border-border text-sm"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isTyping || !input.trim()}
                className="bg-safeglobal hover:bg-safeglobal-dark text-white flex-shrink-0"
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
