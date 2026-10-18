import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/lib/types";
import { PROJECT_IMAGE_SIZE } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const domain = project.link.replace(/^https?:\/\/(www\.)?/, "");
  // Desktop alternates the screenshot side for a zigzag rhythm.
  const flipped = index % 2 === 1;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-2xl border bg-card transition-colors hover:border-foreground/30 md:grid ${flipped ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr]"}`}
    >
      {/* Mobile: the window rises from the bottom edge and is cropped there.
          Desktop: the whole window sits centred in its panel. */}
      <div
        className={`relative h-60 overflow-hidden border-b bg-muted/40 px-4 pt-6 sm:h-80 sm:px-12 sm:pt-10 md:flex md:h-auto md:items-center md:border-b-0 md:p-10 ${flipped ? "md:order-2 md:border-l" : "md:border-r"}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 100%, ${project.accent}55, transparent 65%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto w-full overflow-hidden rounded-t-xl border border-b-0 border-foreground/10 bg-background shadow-2xl shadow-black/40 transition-transform duration-500 ease-out group-hover:-translate-y-1 md:rounded-lg md:border-b">
          <div className="relative flex items-center border-b border-foreground/5 px-2.5 py-1.5">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
            </div>
            <span className="absolute inset-x-0 text-center text-[10px] text-muted-foreground/60">
              {domain}
            </span>
          </div>
          <Image
            src={project.image}
            alt={`${project.title} landing page`}
            width={PROJECT_IMAGE_SIZE.width}
            height={PROJECT_IMAGE_SIZE.height}
            sizes="(min-width: 768px) 420px, 100vw"
            className="block h-auto w-full transition duration-500 md:brightness-90 md:grayscale group-hover:brightness-100 group-hover:grayscale-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="italic text-muted-foreground">{project.tagline}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
            {domain}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
        <p className="leading-relaxed text-foreground/90">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  );
}
