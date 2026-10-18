"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-background/80 mx-auto w-full  backdrop-blur-sm"
    >
      <nav className="flex h-12 items-center justify-between sm:h-16">
        <Link
          href="/"
          className="text-lg font-bold sm:text-xl bg-gradient-to-r from-slate-700  dark:from-slate-300  dark:to-stone-400 to-stone-700 bg-clip-text text-transparent inline-block"
        >
          RC
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          <Link href="https://github.com/rajeshiitk" target="_blank">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rajesh-choudhary-154343226/"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:rajeshch.dev@gmail.com">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
