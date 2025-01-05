"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex gap-4  items-center"
    >
      <Link
        href="https://github.com/rajeshiitk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon" className="rounded-full">
          <Github className="h-5 w-5" />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/rajesh-choudhary-154343226/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon" className="rounded-full">
          <Linkedin className="h-5 w-5" />
        </Button>
      </Link>
      <Link href="mailto:rajeshch.dev@gmail.com">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Mail className="h-5 w-5" />
        </Button>
      </Link>
    </motion.div>
  );
}
