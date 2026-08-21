"use client";

import { motion } from "framer-motion";
import { Stethoscope, Code2, ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Medical student by education,<br />
              <span className="text-accent">developer by passion.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                My journey isn't the traditional computer science path. I am an Egyptian medical student who discovered a profound passion for software engineering.
              </p>
              <p>
                Medicine teaches problem-solving, deep understanding of complex systems, and continuous learning. Software development allows me to apply those exact skills to build tangible, interactive products. 
              </p>
              <p>
                I don't just want to use technology; I want to understand how it works under the hood. I learn by building, breaking things, and iterating until the architecture is clean and the user experience is flawless.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl border border-border flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-8 text-muted-foreground/30">
                  <Stethoscope className="w-24 h-24 group-hover:text-accent transition-colors duration-500" />
                  <ArrowRight className="w-8 h-8" />
                  <Code2 className="w-24 h-24 group-hover:text-foreground transition-colors duration-500" />
                </div>
              </div>
              {/* Decorative dots or grids could go here */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-border" />
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-border" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
