import { Card } from "@/components/ui/card"

export default function ProfileCard({
  icon: Icon,
  title,
  description,
  tags,
  to,
  color,
}) {
  return (
    <a href={to} className="group">
      <Card className="h-full p-8 border-2 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 text-white backdrop-blur-xl  bg-black/30 shadow-black/20 rounded-2xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <div
            className={`h-20 w-20 rounded-full ${color} flex items-center justify-center transition`}
          >
            <Icon className="h-10 w-10" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map(tag => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </a>
  )
}
