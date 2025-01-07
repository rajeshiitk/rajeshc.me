import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/lib/types";
import { PROJECT_IMAGE_SIZE } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          width={PROJECT_IMAGE_SIZE.width}
          height={PROJECT_IMAGE_SIZE.height}
          className="object-cover"
          priority
        />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
}
