import { Mail, Github, Linkedin } from "lucide-react"
import { useNavigate  } from "react-router-dom";


import LogIn from "../components/login"
import TechnicalSkills from "../../components/ui/TechnicalSkills"
import Hero from "@/components/ui/Hero"
import Experience from "@/components/ui/Experience"
import Projects from "@/components/ui/Projects"

function PageTesting() {
  const navigate = useNavigate();


  return (
    <div className="text-white">

    <button
      onClick={() => navigate(-1)} // -1 regresa a la página anterior
      className="px-4 mt-20 text-white rounded cursor-pointer"
    >
      ← Volver
    </button>


      {/* HERO */}
      <section className="flex items-center justify-center">
       <Hero
      name="Mauricio Martinez"
      role="QA Engineer / Test Automation Specialist"
      description="QA Engineer con experiencia en testing manual y automatizado, enfocado en calidad, automatización y mejora continua."
      actions={[
      {
        label: "Contactar",
        icon: Mail,
        type: "button",
        onClick: () => {
          const contact = document.getElementById("contact");
          if (contact) contact.scrollIntoView({ behavior: "smooth" });
        },
      },
      ]}
    />
      </section>

      {/* TESTING */}
      <section className="container mx-auto px-4 pb-20 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Test de login
        </h2>

        <LogIn />
      </section>

      
{/* TECHNICAL SKILLS */}
      <section className="bg-secondary/30 pb-20">
       <TechnicalSkills
      groups={[
        {
          title: "Automatización",
          // items: ["Selenium", "Cypress", "Playwright", "Jest", "Appium"],
          items: [
            "Cypress",
          ]
        },
        {
          title: "Testing & QA",
          items: [
            "Postman",
          ],
        },
      ]}
    />
      </section>


      <section>
        <Projects
            projects={[
              {
                title: "VitaLink - Sistema de Gestión de Citas Médicas",
                description: `Plataforma integral para la gestión de citas médicas que conecta pacientes con profesionales de la salud.
                              Permite agendar citas, gestionar historiales médicos básicos, recordatorios automáticos, telemedicina y sistema de pagos para consultas privadas.`,
                tags: ["Cypress"],
                link: "https://github.com/tu-usuario/ecommerce-test-suite",
              },
            ]}
          />
      </section>



      <section>
        <Experience
          items={[
            {
              role: "QA Automation Engineer",
              company: "Escolar",
              period: "Septiembre 2025 - Diciembre 2025",
              description:
                "Estrategia de testing automatizado para aplicaciones web. Diseño e implementación de frameworks de pruebas. Reducción del tiempo de testing en 60% mediante automatización con cypress.",
            },
          ]}
        />
      </section>
    </div>
  )
}

export default PageTesting
