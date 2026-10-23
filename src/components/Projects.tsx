"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Projects() {
  return (
    <section className="container py-12" id="projects">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Products I&apos;ve built</h2>
          <p className="text-lg text-muted-foreground">
            Side projects I design, build and run on my own, from the app to
            the servers and payments.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={item}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
