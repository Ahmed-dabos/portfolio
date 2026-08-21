"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Understand",
    desc: "I prefer understanding how systems work instead of blindly relying on abstractions."
  },
  {
    num: "02",
    title: "Build",
    desc: "The fastest way I learn is by building real things."
  },
  {
    num: "03",
    title: "Iterate",
    desc: "I don't expect the first version to be perfect. I improve through iteration."
  },
  {
    num: "04",
    title: "Stay Curious",
    desc: "Technology changes constantly, so learning never really stops."
  }
];

export function Philosophy() {
  return (
    <section className="py-32 bg-[#050505] border-y border-border/50 text-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineering Philosophy</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Guiding principles that shape how I learn, write code, and solve problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex gap-6 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent/20 group-hover:text-accent transition-colors duration-500 font-mono pt-1">
                {p.num}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
