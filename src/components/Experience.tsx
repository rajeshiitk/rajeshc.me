"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Badge } from "./ui/badge";

export function Experience() {
  return (
    <section className="container py-12" id="experience">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-2"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-xl font-semibold">
              {experience.role} · {experience.company}
            </h3>
            <span className="text-sm text-muted-foreground">
              {experience.period}
            </span>
          </div>
          <p className="max-w-[68ch] text-lg text-foreground/90 leading-relaxed">{experience.summary}</p>
        </motion.div>

        <div className="space-y-8 border-l pl-4 sm:pl-6">
          {experience.products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-2"
            >
              <h4 className="text-lg font-semibold text-foreground">{product.name}</h4>
              <p className="text-muted-foreground">
                {product.about}
              </p>
              <ul className="max-w-[72ch] list-disc pl-4 sm:pl-5 space-y-2 text-foreground/85 leading-relaxed marker:text-muted-foreground">
                {product.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {product.stack.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
