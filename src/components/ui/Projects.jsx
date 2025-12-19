import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/hooks/animationInView";

export default function Projects({ projects }) {


  return (
    <section className="container mx-auto">
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
            <AnimatedSection>
              <Card className="group relative overflow-hidden p-6 cursor-pointer border-2 border-slate-700/50 backdrop-blur-xl rounded-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/40">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />

                {/* Contenido */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className="rounded-2xl border border-slate-600 bg-slate-700 text-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

            </AnimatedSection>
          </a>
        ))}
      </div>
    </section>
  );
}
