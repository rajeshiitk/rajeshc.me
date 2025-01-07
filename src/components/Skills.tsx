"use client";
import {
  SiAmazonec2,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { motion } from "framer-motion";

import { Badge } from "./ui/badge";
const skills = [
  {
    item: "JavaScript",
    icon: <SiJavascript />,
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
    item: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    item: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    item: "Express",
    icon: <SiExpress />,
  },
  {
    item: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    item: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    item: "GraphQL",
    icon: <SiGraphql />,
  },

  {
    item: "REST API",
    icon: <SiPostman />,
  },
  {
    item: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    item: "Git",
    icon: <SiGit />,
  },

  {
    item: "Docker",
    icon: <SiDocker />,
  },
  {
    item: "Kubernetes",
    icon: <SiKubernetes />,
  },
  {
    item: "AWS EC2",
    icon: <SiAmazonec2 />,
  },
  {
    item: "Google Cloud",
    icon: <SiGooglecloud />,
  },

  {
    item: "Netlify",
    icon: <SiNetlify />,
  },
  {
    item: "Vercel",
    icon: <SiVercel />,
  },
  {
    item: "Rust",
    icon: <SiRust />,
  },
  {
    item: "Dart",
    icon: <SiDart />,
  },
  {
    item: "Flutter",
    icon: <SiFlutter />,
  },
  {
    item: "React Native",
    icon: <SiReact />,
  },
  {
    item: "Supabase",
    icon: <SiSupabase />,
  },
  {
    item: "HTML",
    icon: <SiHtml5 />,
  },
  {
    item: "CSS",
    icon: <SiCss3 />,
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
