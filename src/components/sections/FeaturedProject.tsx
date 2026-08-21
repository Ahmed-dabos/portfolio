"use client";

import { motion } from "framer-motion";
import { ArchitectureGraph } from "@/components/ui/ArchitectureGraph";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const techStack = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", 
  "Supabase", "PostgreSQL", "Drizzle ORM", "Hono", 
  "Zustand", "TanStack Query", "Turborepo", "shadcn/ui"
];

const features = [
  "Monorepo architecture with shared UI and utility packages.",
  "Type-safe API layer built with Hono.",
  "Authentication and Realtime functionality via Supabase.",
  "Drizzle ORM for abstracted, type-safe database interactions.",
  "Rich text editing powered by Tiptap."
];

export function FeaturedProject() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            Featured Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">RESPAR</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A large-scale web application built as a Monorepo. This project serves as a comprehensive exploration of modern full-stack architecture, shared packages, and scalable system design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold border-b border-border pb-2">The Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                RESPAR is structured using Turborepo to manage multiple applications and shared packages efficiently. The system is split into a user-facing Next.js application, an Admin dashboard, and a centralized Hono backend, all consuming shared UI components, database schemas, and utilities.
              </p>
              <ArchitectureGraph />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold border-b border-border pb-2">Challenges & Solutions</h3>
              <div className="space-y-6">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h4 className="font-semibold mb-2 text-foreground">State & Data Syncing</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Managing complex state across the application while ensuring the UI stays completely synced with the database was a challenge. I solved this by strictly separating server state (TanStack Query) from client state (Zustand) and leveraging Supabase Realtime where instant updates were necessary.
                  </p>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h4 className="font-semibold mb-2 text-foreground">Monorepo Scaling</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As the project grew, dependency hell became a real threat. Moving to Turborepo allowed me to extract the database logic (`packages/db`) and UI components (`packages/ui`) into isolated workspaces, drastically improving build times and developer experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-border rounded-2xl p-8 space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-md text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border flex flex-col gap-3">
                <a
                  href="[ADD GITHUB URL]"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors"
                >
                  View Source Code
                </a>
                <a
                  href="[ADD LIVE DEMO]"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-border text-foreground font-medium rounded-xl hover:bg-accent/10 hover:border-accent/30 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
