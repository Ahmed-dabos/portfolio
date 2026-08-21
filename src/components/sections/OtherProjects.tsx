"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "E-Commerce App",
    desc: "A fully functional e-commerce frontend built to handle product listings, complex filtering, and pagination.",
    tags: ["React", "REST API", "DummyJSON", "Pagination"],
    github: "[ADD GITHUB URL]",
    demo: "[ADD LIVE DEMO]",
  },
  {
    title: "Todo Application",
    desc: "A persistent task management tool demonstrating fundamental CRUD operations and client-side routing.",
    tags: ["React", "MockAPI", "CRUD Operations"],
    github: "[ADD GITHUB URL]",
    demo: "[ADD LIVE DEMO]",
  },
  {
    title: "Next.js + Supabase Sandbox",
    desc: "An experimental project focused on user authentication, real-time database subscriptions, and cloud storage for image uploads.",
    tags: ["Next.js", "Supabase", "Storage", "Realtime"],
    github: "[ADD GITHUB URL]",
    demo: "[ADD LIVE DEMO]",
  },
  {
    title: "Physician Dashboard",
    desc: "An internal dashboard UI managing departments, physician details, and complex JSONB content structures.",
    tags: ["React", "JSONB", "Data Modeling", "UI Design"],
    github: "[ADD GITHUB URL]",
    demo: "[ADD LIVE DEMO]",
  },
];

export function OtherProjects() {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Other Explorations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Smaller focused projects where I experiment with specific technologies, APIs, and architectural patterns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all shadow-sm hover:shadow-md relative flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-muted/50 text-muted-foreground rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                <Link href={project.github} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                  <Code2 className="w-4 h-4" />
                  Code
                </Link>
                <Link href={project.demo} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
