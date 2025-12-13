import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Proyectos Destacados</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="p-6 border-2 border-white bg-black hover:border-primary transition-all hover:shadow-lg cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.link && (
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 ">
                {project.tags.map((tag, i) => (
                  <Badge key={i} className="rounded-2xl border-2 border-gray-800 bg-gray-800">{tag}</Badge>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
