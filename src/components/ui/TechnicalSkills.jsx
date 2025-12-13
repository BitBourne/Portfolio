import { Badge } from "@/components/ui/badge"

export default function TechnicalSkills({
  title = "Habilidades Técnicas",
  groups = [],
}) {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {groups.map((group, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground/90">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <Badge key={item} variant="secondary" className="rounded-2xl border-2 border-gray-700">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
