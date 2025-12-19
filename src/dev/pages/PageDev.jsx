import { useState, useEffect } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import StackCard from "@/components/ui/StackCard"
import AnimateSection from "@/hooks/animationInView"
import Projects from "@/components/ui/Projects"
import Experience from "@/components/ui/Experience"
import Hero from "@/components/ui/Hero"

import {
  Code2,
  Terminal,
} from "lucide-react"

export default function PageDev() {

  /* ---------------- CODE TYPING EFFECT ---------------- */
  const [typedCode, setTypedCode] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [showOutput, setShowOutput] = useState(false)

  const codeLines = [
    "function calculateFibonacci(n) {",
    "  if (n <= 1) return n;",
    "  return calculateFibonacci(n - 1) +",
    "         calculateFibonacci(n - 2);",
    "}",
    "",
    "console.log(calculateFibonacci(10));",
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const currentText = codeLines[currentLine]

      if (typedCode.length < currentText.length) {
        const t = setTimeout(() => {
          setTypedCode((prev) => prev + currentText[prev.length])
        }, 40)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setTypedCode("")
        }, 400)
        return () => clearTimeout(t)
      }
    } else {
      setShowOutput(true)
      const t = setTimeout(() => {
        setCurrentLine(0)
        setTypedCode("")
        setShowOutput(false)
      }, 2500)
      return () => clearTimeout(t)
    }
  }, [typedCode, currentLine])

  return (
    <div className="text-white">

      {/* HERO */}
      <section className="text-center m-4 md:m-12 mb-10 md:mb-20">
        <Hero
          Title="Desarrollador Full Stack"
          Subtitle="Desarrollador Full Stack con experiencia en desarrollo de aplicaciones web escalables, seguras y listas para producción."
        />
      </section>




      {/* DEMO + STACK */}
      <section className="grid lg:grid-cols-2 gap-8 m-4 md:m-12 mb-10 md:mb-20">
        {/* STACK */}
        <StackCard
          title="Stack Tecnológico"
          stacks={[
            { label: "Frontend", items: ["React", "Tailwind", "Bootstrap", "CSS"] },
            { label: "Backend", items: ["Node.js", "Express", "MongoDB", ".Net", "C#", "MySQL"] },
          ]}
        />
        {/* Code Demo */}
        <AnimateSection>
          <Card className="backdrop-blur-xl rounded-2xl border-2 border-gray-600">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center text-base sm:text-lg">
                <Code2 className="h-5 w-5" />
                Fibonacci
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div
                className="
                    bg-slate-900
                    p-2
                    rounded-lg
                    font-mono
                    text-xs sm:text-sm
                    min-h-[240px] sm:min-h-[300px]
                    max-w-full
                    overflow-x-auto
                    grid grid-cols-1 grid-rows-1
                  "
              >
                {/* LAYER 1: INVISIBLE SPACER (Full Content) */}
                <div className="col-start-1 row-start-1 invisible select-none pointer-events-none">
                  {codeLines.map((line, i) => (
                    <div key={`spacer-${i}`} className="flex">
                      <span className="inline-block w-8 text-right mr-3 shrink-0">
                        {i + 1}
                      </span>
                      <span className="whitespace-pre break-normal">
                        {line}
                      </span>
                    </div>
                  ))}
                  <div className="mt-4 border-t border-slate-800 pt-3 text-green-400 text-xs sm:text-sm">
                    <Terminal className="inline mr-2 h-4 w-4" />
                    Output: 55
                  </div>
                </div>

                {/* LAYER 2: VISIBLE ANIMATION (Absolute Overlay) */}
                <div className="col-start-1 row-start-1">
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex">
                      {/* Line number */}
                      <span
                        className="
                            hidden sm:inline-block
                            w-8
                            text-slate-600
                            text-right
                            mr-3
                            shrink-0
                          "
                      >
                        {i + 1}
                      </span>

                      {/* Code line */}
                      <span
                        className={`
                            whitespace-pre
                            break-normal
                            ${i < currentLine
                            ? "text-green-400"
                            : i === currentLine
                              ? "text-blue-400"
                              : "text-slate-700"
                          }
                          `}
                      >
                        {i < currentLine ? line : i === currentLine ? typedCode : line}
                        {i === currentLine && (
                          <span className="animate-pulse">|</span>
                        )}
                      </span>
                    </div>
                  ))}

                  {showOutput && (
                    <div className="mt-4 border-t border-slate-800 pt-3 text-green-400 text-xs sm:text-sm">
                      <Terminal className="inline mr-2 h-4 w-4" />
                      Output: 55
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimateSection>


      </section>

      {/* PROJECTS */}
      <section className="m-4 md:m-12 mb-10 md:mb-20">
        <Projects
          projects={[
            {
              title: "VitaLink - Sistema de Gestión de Citas Médicas",
              description:
                "Plataforma integral para la gestión de citas médicas que conecta pacientes con profesionales de la salud. Incluye agenda, historiales, recordatorios y pagos.",
              tags: ["React", "TailwindCSS", "Node.js", "Express", "MySQL"],
              link: "https://github.com/BitBourne/VitaLink",
            },
          ]}
        />
      </section>

      {/* EXPERIENCE */}
      <section className="space-y-6 m-4 md:m-12 mb-10 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Experiencia Profesional</h2>

        <Experience
          title="Full Stack Developer - Practicante"
          company="AXEN IT Consulting"
          period="Enero 2025 - Junio 2025"
          tags={[".Net ", "MongoDB", "C#", "Scrum", "Azure DevOps", "Git", "MudBlazor", "MAUI"]}
          bullets={[
            "Desarrollo de aplicaciones web escalables y seguras",
            "Participación en el desarrollo backend y frontend del sistema.",
            "Implementación de validación de datos y control de accesos por roles.",
            "Creación y mantenimiento de código siguiendo buenas prácticas.",
            "Colaboración en equipo utilizando metodologías ágiles.",
          ]}
        />
      </section>


    </div>
  )
}
