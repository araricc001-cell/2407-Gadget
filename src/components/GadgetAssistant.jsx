import React, { useState, useRef, useEffect } from "react";
import { PRODUCTS, whatsappLink } from "../data/brand";

const SYSTEM_PROMPT = `You are the 24Ø7 Gadgets assistant. Brand voice: confident, direct, authoritative, never begging, never over-explaining. Use short sentences. Avoid emojis and exclamation marks. Avoid generic phrases.

Store info:
- Sells: iPhones, Samsung, Google Pixel, smartphones, smartwatches, power banks, chargers, earbuds, gaming consoles, laptops. Swap deals available.
- Location: Ikeja, Lagos, Nigeria. Pick up available. Delivery nationwide.
- Tagline: "Sealed. Verified. No stories."

Current stock (use this if relevant, do not invent prices outside this list):
${PRODUCTS.map((p) => `- ${p.name} (${p.spec}): ${p.price}`).join("\n")}

Answer the customer's question in 2-4 short sentences, in brand voice. If they ask about a product not listed, tell them to confirm availability on WhatsApp. Never use the word "please" or "kindly". End by pointing them to WhatsApp only if it makes sense, do not repeat it every time.`;

const GadgetAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Ask about stock, prices, or swap deals. Straight answers only.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: nextMessages
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      const data = await response.json();
      const reply =
        data?.content
          ?.map((block) => (block.type === "text" ? block.text : ""))
          .filter(Boolean)
          .join("\n") || "Stock changes fast. Confirm on WhatsApp.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setError("Couldn't reach the assistant. Try again, or ask us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="bg-white/[0.03] border border-white/10 cut-card flex flex-col h-[460px] md:h-[500px]">
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <p className="font-display text-sm text-white">Gadget Assistant</p>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-signal">Live · AI-powered</p>
        </div>
        <span className="w-2 h-2 rounded-full bg-signal animate-pulse" aria-hidden="true" />
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-4 py-3 font-body text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-signal text-ink"
                  : "bg-white/5 text-white/85 border border-white/10"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 px-4 py-3 font-body text-sm text-white/50">
              Checking stock…
            </div>
          </div>
        )}
        {error && <p className="text-signal font-body text-xs">{error}</p>}
      </div>

      <div className="border-t border-white/10 p-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="e.g. Do you have iPhone 14 Pro?"
          className="flex-1 bg-transparent border border-white/15 px-4 py-3 text-sm font-body text-white placeholder-white/30 focus:outline-none focus:border-signal"
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="bg-signal text-ink font-display text-xs uppercase tracking-widest2 px-5 py-3 cut-card disabled:opacity-40 hover:bg-white transition-colors focus-ring"
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default GadgetAssistant;
