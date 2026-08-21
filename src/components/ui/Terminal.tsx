"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const lines = [
  { type: "input", content: "> whoami" },
  { type: "output", content: "Ahmed Ghazy" },
  { type: "output", content: "Medical Student | Aspiring Software Engineer" },
  { type: "input", content: "> stack" },
  { type: "output", content: "React • Next.js • TypeScript • Supabase • Drizzle" },
  { type: "input", content: "> status" },
  { type: "output", content: "BUILDING...", isBlinking: true },
];

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, lines[visibleLines].type === "input" ? 800 : 400);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <div className="w-full max-w-lg rounded-xl overflow-hidden border border-border bg-[#050505] shadow-2xl relative font-mono text-sm sm:text-base">
      <div className="flex items-center px-4 py-3 border-b border-border bg-[#0a0a0a]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs text-muted-foreground">ahmed@portfolio:~</div>
      </div>
      <div className="p-6 space-y-4 text-left min-h-[300px]">
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={
              line.type === "input"
                ? "text-accent font-semibold"
                : "text-muted-foreground whitespace-pre-wrap"
            }
          >
            {line.content}
            {line.isBlinking && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-accent ml-1 align-middle"
              />
            )}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-accent align-middle mt-1"
          />
        )}
      </div>
    </div>
  );
}
