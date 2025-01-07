import { Contact } from "@/components/contact";
import Hero from "@/components/hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
