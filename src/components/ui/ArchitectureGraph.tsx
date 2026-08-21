"use client";

import { motion } from "framer-motion";
import { Database, Server, Globe, LayoutTemplate, Layers, Settings, Mail, Cog } from "lucide-react";
import { useState } from "react";

const nodes = [
  { id: "web", label: "Next.js Web App", icon: Globe, col: 1, row: 1, desc: "Port 3000 - Main user interface built with React 19 and Tailwind v4." },
  { id: "admin", label: "Admin Dashboard", icon: Settings, col: 3, row: 1, desc: "Port 3001 - Internal management portal." },
  { id: "backend", label: "Hono API Layer", icon: Server, col: 2, row: 2, desc: "Port 3002 - Centralized backend handling business logic." },
  { id: "ui", label: "Shared UI (Package)", icon: LayoutTemplate, col: 1, row: 2, desc: "shadcn/ui & Radix UI shared components." },
  { id: "db", label: "Database Layer", icon: Database, col: 2, row: 3, desc: "PostgreSQL, Supabase & Drizzle ORM." },
  { id: "libs", label: "Shared Libs", icon: Layers, col: 3, row: 2, desc: "Zod schemas, types, and utility functions." },
  { id: "emails", label: "Emails", icon: Mail, col: 1, row: 3, desc: "Transactional email templates." },
  { id: "jobs", label: "Background Jobs", icon: Cog, col: 3, row: 3, desc: "Async task processing." },
];

export function ArchitectureGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="w-full bg-[#050505] rounded-2xl border border-border p-8 shadow-2xl overflow-hidden relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {nodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            const isFaded = activeNode && !isActive;

            return (
              <motion.div
                key={node.id}
                variants={item}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-accent/10 border-accent shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                    : isFaded
                    ? "bg-card/50 border-border/50 opacity-50"
                    : "bg-card border-border hover:border-accent/50"
                } flex flex-col items-center text-center space-y-4`}
                style={{
                  gridColumn: node.col,
                  gridRow: node.row,
                }}
              >
                <div className={`p-3 rounded-lg ${isActive ? "bg-accent text-white" : "bg-muted text-muted-foreground"}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{node.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed h-8">
                    {isActive ? node.desc : ""}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        Hover over components to see details about the RESPAR monorepo architecture.
      </div>
    </div>
  );
}
