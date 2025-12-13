import { Mail, Github, Linkedin } from "lucide-react"

export default function Hero({
  name,
  role,
  description,
  actions,
}) {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl text-white backdrop-blur-xl shadow-black rounded-2xl">
      <h1 className="text-5xl font-bold">
        {name}
      </h1>

      <p className="text-2xl text-primary mt-2">
        {role}
      </p>

      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        {actions.map((action, index) => {
          const Icon = action.icon

          return action.type === "button" ? (
            <button
              key={index}
              onClick={action.onClick}
              className="px-6 py-3 bg-primary text-white rounded-lg flex items-center gap-2"
            >
              <Icon size={16} />
              {action.label}
            </button>
          ) : (
            <a
              key={index}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-lg flex items-center gap-2 hover:bg-white/5 transition"
            >
              <Icon size={16} />
              {action.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
