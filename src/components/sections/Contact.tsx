"use client";

import { motion } from "framer-motion";
import { Code2, Users, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "GitHub", href: "[ADD GITHUB URL]", icon: Code2 },
  { name: "LinkedIn", href: "[ADD LINKEDIN URL]", icon: Users },
  { name: "Email", href: "mailto:ahmedghazydabos@gmail.com", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/201229152948", icon: MessageCircle },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Let's build something.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in interesting projects, learning opportunities, and conversations around technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-full sm:w-auto"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-card border border-border rounded-full hover:border-accent hover:bg-accent/5 transition-all text-foreground font-medium w-full sm:w-auto"
                  >
                    <Icon className="w-5 h-5 group-hover:text-accent transition-colors" />
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
