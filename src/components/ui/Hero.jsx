import { Mail, Github, Linkedin } from "lucide-react"
import AnimateSection from "@/hooks/animationInView"

export default function Hero({
  Title,
  Subtitle,
}) {

  return (
    <div className="space-y-6 ">
      <h1 className="text-5xl font-bold">
        {Title}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-gray-200">
        {Subtitle}
      </p>
    </div>
  )
}
