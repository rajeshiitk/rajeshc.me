"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";

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
    value: "+91 96807 02761",
    href: "tel:+919680702761",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
  },
];

export function ContactInfo() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="flex h-full flex-col gap-4">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-1 items-center gap-4 rounded-md bg-muted p-4"
          >
            <div className="rounded-full bg-background p-2">
              <detail.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{detail.value}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => copy(detail.label, detail.value)}
              aria-label={`Copy ${detail.label.toLowerCase()}`}
              title="Copy"
              className="shrink-0 p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied === detail.label ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
