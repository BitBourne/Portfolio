import { Mail, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


import LogIn from "../components/login"
import Hero from "@/components/ui/Hero"
import Projects from "@/components/ui/Projects"
import StackCard from "@/components/ui/StackCard"

function PageTesting() {


  return (
    <div className="text-white">

      {/* HERO */}
      <section className="text-center m-4 md:m-12 mb-10 md:mb-20">
        <Hero
          Title="Automation, Testing & Pentesting"
          Subtitle="Ingeniero QA con experiencia en testing manual y automatizado, enfocado en calidad, automatización y mejora continua."
        />
      </section>




      <section className="flex justify-center text-white m-4 md:m-12 mb-10 md:mb-20">

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl w-full">
          <StackCard
            title="Habilidades Técnicas"
            stacks={[
              {
                label: "Automatización",
                items: ["Cypress"],
              },
              {
                label: "Testing",
                items: ["Postman"],
              },
              {
                label: "Control de versiones",
                items: ["GitHub", "Git"],
              },
            ]}
          />
          <LogIn />


          {/* <TestMatrix
            id="TC-001"
            module="Login"
            title="Validar login exitoso"
            type="Funcional"
            browser="Chrome"
            device="Desktop"
            precondition="Usuario registrado"
            steps={[
              "Acceso a /login",
              "Ingreso de email válido",
              "Ingreso de contraseña válida",
              "Click en botón Login",
            ]}
            expectedResult="Acceso al dashboard"
            actualResult="Acceso correcto al dashboard"
            status="PASSED"
            severity="Media"
            priority="Alta"
            evidence="Login exitoso visible en simulación UI"
          /> */}
        </div>
      </section>





      {/* <section className="m-4 md:m-12 mb-10 md:mb-20">
        <Projects
          projects={[
            {
              title: "VitaLink - Sistema de Gestión de Citas Médicas",
              description: "Plataforma web para agendar citas médicas y gestionar consultas de forma sencilla.",
              tags: ["Cypress", "Postman", "GitHub", "Git"],
              link: "https://letmegooglethat.com/?q=Ya%20fuiste",
            },
          ]}
        />
      </section> */}





      {/* EXPERIENCE */}
      {/* <section className="space-y-6 m-4 md:m-12 mb-10 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Experiencia Profesional</h2>


        <p>Proximamente...</p>
        <Experience
          title="Senior Full Stack Developer"
          company="TechCorp"
          period="2021 – Presente"
          tags={["React", "Node.js", "CI/CD", "SaaS"]}
          bullets={[
            "Liderazgo técnico en plataforma SaaS B2B",
            "Diseño e implementación de microservicios",
            "Automatización de pipelines CI/CD",
            "Mentoría a desarrolladores junior y mid",
          ]}
        />
      </section> */}

    </div>
  )
}

export default PageTesting
