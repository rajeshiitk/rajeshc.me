"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "rajeshch.dev@gmail.com",
    href: "mailto:rajeshch.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96X0XXXXXX",
    href: "tel:+91 96X0XXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "#",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.a
            key={detail.label}
            href={detail.href}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <detail.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">{detail.label}</p>
              <p className="text-sm text-muted-foreground">{detail.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
