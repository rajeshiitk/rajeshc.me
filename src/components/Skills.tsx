"use client";
import {
  SiAndroid,
  SiCelery,
  SiCodemagic,
  SiCplusplus,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { motion } from "framer-motion";

import { Badge } from "./ui/badge";
const skills = [
  {
    item: "Dart",
    icon: <SiDart />,
  },
  {
    item: "Flutter",
    icon: <SiFlutter />,
  },
  {
    item: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    item: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    item: "Python",
    icon: <SiPython />,
  },
  {
    item: "C++",
    icon: <SiCplusplus />,
  },
  {
    item: "React Native",
    icon: <SiReact />,
  },
  {
    item: "Expo",
    icon: <SiExpo />,
  },
  {
    item: "Android",
    icon: <SiAndroid />,
  },
  {
    item: "React",
    icon: <SiReact />,
  },
  {
    item: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    item: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    item: "Django",
    icon: <SiDjango />,
  },
  {
    item: "Celery",
    icon: <SiCelery />,
  },
  {
    item: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    item: "Redis",
    icon: <SiRedis />,
  },
  {
    item: "Supabase",
    icon: <SiSupabase />,
  },
  {
    item: "Firebase",
    icon: <SiFirebase />,
  },
  {
    item: "WebRTC",
    icon: <SiWebrtc />,
  },
  {
    item: "Socket.io",
    icon: <SiSocketdotio />,
  },
  {
    item: "Codemagic",
    icon: <SiCodemagic />,
  },
  {
    item: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    item: "Docker",
    icon: <SiDocker />,
  },
  {
    item: "Git",
    icon: <SiGit />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 ">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Skills</h2> */}
      <motion.div className="flex flex-wrap gap-4 ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index / 30 }}
            className="flex flex-wrap gap-4 "
          >
            <Badge variant="secondary" key={index}>
              {skill.icon}
              <span className="ml-2">{skill.item}</span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
