"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Layers, Database, Code2, Cpu, Wrench, Globe, Server } from "lucide-react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Globe,
    items: [
      { name: "React", desc: "Building interactive, component-based user interfaces." },
      { name: "Next.js", desc: "Routing, server-side rendering, and full-stack React." },
      { name: "Tailwind CSS", desc: "Rapid utility-first styling system." },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: [
      { name: "Hono", desc: "Ultrafast web framework for the Edge." },
      { name: "REST APIs", desc: "Designing structured, predictable web services." },
    ]
  },
  {
    id: "database",
    label: "Data & State",
    icon: Database,
    items: [
      { name: "PostgreSQL", desc: "Robust relational data modeling." },
      { name: "Supabase", desc: "Backend-as-a-Service, auth, and realtime." },
      { name: "Drizzle ORM", desc: "Type-safe database operations." },
      { name: "Zustand", desc: "Lightweight, unopinionated client state." },
      { name: "TanStack Query", desc: "Asynchronous server state management." },
    ]
  },
  {
    id: "tools",
    label: "Ecosystem",
    icon: Wrench,
    items: [
      { name: "TypeScript", desc: "Static typing for robust JavaScript." },
      { name: "Turborepo", desc: "High-performance build system for monorepos." },
      { name: "Git & GitHub", desc: "Version control and collaborative workflows." },
    ]
  }
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="stack" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technology Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and frameworks I use to bring ideas to life. I focus on modern, type-safe, and scalable ecosystems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Category Selector */}
          <div className="lg:col-span-4 space-y-2 flex flex-col">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all w-full ${
                    isActive 
                      ? "bg-foreground text-background shadow-md" 
                      : "bg-transparent text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-background" : "text-muted-foreground"}`} />
                  <span className="font-medium">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Items Display */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-8 min-h-[400px]">
            {categories.map((cat) => (
              cat.id === activeCategory && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {cat.items.map((item) => (
                    <div key={item.name} className="p-5 rounded-2xl bg-background border border-border hover:border-accent/50 transition-colors group">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{item.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )
            ))}
          </div>
        </div>

        {/* Currently Learning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 p-8 md:p-12 bg-accent/5 border border-accent/20 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          <h3 className="text-2xl font-bold mb-4">Always building. Always learning.</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            My current focus is deepening my understanding of Advanced React patterns, System Design, and Computer Science fundamentals to build even more robust backend architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["System Design", "Advanced TypeScript", "CS Fundamentals", "Backend Architecture"].map((item) => (
              <span key={item} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
