"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "@/components/ui/Terminal";
import { ArrowRight, Code } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Hi, I&apos;m Ahmed. <br />
                <span className="text-muted-foreground">I build modern web experiences.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Medical student exploring software engineering, one project at a time. I don&apos;t just want to use technology. I want to understand how it works.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all active:scale-95"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#stack"
                className="group flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-full hover:bg-accent/10 hover:border-accent/30 transition-all active:scale-95"
              >
                <Code className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                Explore My Stack
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end z-10"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
