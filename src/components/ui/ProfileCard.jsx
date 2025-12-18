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
    <a href={to} className="group relative">
      <Card
        className="
          relative
          h-full
          p-8
          overflow-hidden
          border-2 border-gray-600
          rounded-2xl
          bg-black/30
          backdrop-blur-xl
          text-white

          transition-all duration-300
          hover:border-blue-500/80
          hover:shadow-xl
          hover:shadow-blue-500/30
        "
      >
        {/* ✨ SHINE EFFECT */}
        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-transparent
            via-blue-500/25
            to-transparent
            translate-x-[-120%]
            group-hover:translate-x-[120%]
            transition-transform duration-700
          "
        />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* ICON */}
          <div
            className={`
              h-20 w-20 rounded-full
              ${color}
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-105
              group-hover:shadow-lg
            `}
          >
            <Icon className="h-10 w-10" />
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-1">
              {description}
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map(tag => (
              <span
                key={tag}
                className="
                  px-3 py-1 text-xs rounded-full
                  border border-slate-600
                  bg-slate-800/60
                  text-slate-200
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </a>
  )
}
