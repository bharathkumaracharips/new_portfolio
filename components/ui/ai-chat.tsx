"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIChatCardProps {
  className?: string;
  onClose?: () => void;
}

export default function AIChatCard({ className, onClose }: AIChatCardProps) {
  const [messages, setMessages] = useState<{ sender: "ai" | "user"; text: string }[]>([
    { sender: "ai", text: "👋 Hello! I'm here to help you get in touch. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setIsTyping(true);

    // Simulate AI response based on user input
    setTimeout(() => {
      let aiResponse = "🤖 Thank you for your message! I'll make sure to pass this along.";
      
      if (userMessage.toLowerCase().includes("project") || userMessage.toLowerCase().includes("work")) {
        aiResponse = "Great! I'd love to discuss your project. Would you like to schedule a meeting or should I have someone reach out to you via email?";
      } else if (userMessage.toLowerCase().includes("price") || userMessage.toLowerCase().includes("cost")) {
        aiResponse = "Pricing depends on the project scope. I'd recommend booking a quick call to discuss your specific needs and get an accurate quote.";
      } else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        aiResponse = "Hello! 👋 How can I help you today? Feel free to ask about services, projects, or schedule a meeting.";
      }
      
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={cn("relative w-[360px] h-[500px] rounded-2xl overflow-hidden p-[2px]", className)}>
      {/* Animated Outer Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner Card */}
      <div className="relative flex flex-col w-full h-full rounded-xl border border-border overflow-hidden bg-background/95 backdrop-blur-xl">
        {/* Inner Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/10"
            animate={{
              y: ["0%", "-140%"],
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{ left: `${Math.random() * 100}%`, bottom: "-10%" }}
          />
        ))}

        {/* Header */}
        <div className="px-4 py-3 border-b border-border relative z-10 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">🤖 AI Assistant</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "px-3 py-2 rounded-xl max-w-[80%] shadow-md backdrop-blur-md transition-colors duration-300",
                msg.sender === "ai"
                  ? "bg-muted text-foreground self-start"
                  : "bg-primary text-primary-foreground font-medium self-end"
              )}
            >
              {msg.text}
            </motion.div>
          ))}

          {/* AI Typing Indicator */}
          {isTyping && (
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-xl max-w-[30%] bg-muted self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse delay-200"></span>
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse delay-400"></span>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-3 border-t border-border relative z-10">
          <input
            className="flex-1 px-3 py-2 text-sm bg-muted/50 rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
