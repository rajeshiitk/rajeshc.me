"use client";
import { FileDown } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { Socials } from "./Socials";
import { PiBriefcase, PiMapPinLineLight, PiStudent } from "react-icons/pi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-start mt-8  transition-all gap-8 md:flex-row-reverse md:items-center md:justify-between">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Image
          className="rounded-full grayscale sm:rounded-lg"
          src={profile}
          alt="Photo of Rajesh Choudhary"
          width={175}
          height={175}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-semibold sm:text-6xl text-4xl tracking-tight leading-none decoration-border/75 decoration-2
    
           "
        >
          Rajesh Choudhary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-xl sm:text-3xl bg-gradient-to-r from-slate-700  dark:from-slate-200  dark:to-stone-300 to-stone-700 bg-clip-text text-transparent inline-block font-normal"
        >
          Mobile &amp; Full-Stack Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 flex gap-2 items-center text-foreground/90"
        >
          <PiMapPinLineLight className="size-5" />{" "}
          <span>Bengaluru, India</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 flex gap-2 items-center text-foreground/90"
        >
          <PiStudent className="size-5" /> <span>
            IIT Kanpur{" "}
            <span className="text-sm text-muted-foreground">
              (B.Tech in Electrical Engineering)
            </span>
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 flex gap-2 items-center text-foreground/90"
        >
          <PiBriefcase className="size-5" />{" "}
          <span>Full-Stack App Developer at K12 Techno Services</span>
        </motion.p>

        <section className="mt-8 flex items-center gap-8">
          <Button variant="outline" asChild>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">Resume </span>
              <FileDown className="ml-2 size-5" />
            </a>
          </Button>
          <Socials />
        </section>
      </motion.div>
    </section>
  );
};

export default Hero;
