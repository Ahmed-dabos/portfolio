"use client";

import { motion } from "framer-motion";

const milestones = [
  { tech: "C++", desc: "Where it all started. Learning the fundamentals of memory and logic." },
  { tech: "HTML, CSS, JavaScript", desc: "Discovering the web and building my first interactive interfaces." },
  { tech: "React & REST APIs", desc: "Moving to component-based architecture and connecting to backend services." },
  { tech: "Next.js & TypeScript", desc: "Embracing type safety, server-side rendering, and modern full-stack React." },
  { tech: "Supabase, PostgreSQL, Drizzle", desc: "Working with real databases, authentication, and type-safe ORMs." },
  { tech: "Monorepos & Architecture", desc: "Scaling codebases with Turborepo and building large real-world applications." },
];

export function Journey() {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My learning philosophy is heavily based on building. I learn concepts by actually implementing them. Here is how my stack evolved over time.
          </p>
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:border-none space-y-12 md:space-y-0">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
          
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex md:justify-between items-center w-full group">
              <div className="hidden md:block w-5/12" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center z-10 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`w-full pl-8 md:pl-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:text-right md:pr-12 md:mr-auto" : "md:text-left md:pl-12 md:ml-auto"
                }`}
              >
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{milestone.tech}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
