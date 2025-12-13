import { Bug, Code, Shield } from "lucide-react"
import HomeHeader from "../components/HomeHeader"
import ProfileCard from "../../components/ui/ProfileCard"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <HomeHeader />

        <div className="grid gap-6 md:grid-cols-3">
          <ProfileCard
            icon={Bug}
            title="QA"
            description="Testing manual y automatizado, calidad de software"
            tags={["Cypress", "Postman"]}
            to="/qa"
            color="bg-green-500/10 text-green-500"
          />

          <ProfileCard
            icon={Code}
            title="Desarrollador"
            description="Desarrollo full-stack y arquitectura"
            tags={["React", "Node.js", "TypeScript"]}
            to="/dev"
            color="bg-blue-500/10 text-blue-500"
          />

          <ProfileCard
            icon={Shield}
            title="Ciberseguridad"
            description="Pentesting y protección de sistemas"
            tags={["Pentesting", "OWASP", "Kali"]}
            to="/cybersecurity"
            color="bg-red-500/10 text-red-500"
          />
        </div>
      </div>
    </div>
  )
}
