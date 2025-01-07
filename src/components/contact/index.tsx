"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
  return (
    <section className="container py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
