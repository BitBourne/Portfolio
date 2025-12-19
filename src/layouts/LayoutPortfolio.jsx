import { Outlet, useNavigate, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"
import ScrollToTop from "@/components/ui/scrollTop"
import { useAnimationInView } from "@/hooks/animationInView"

export default function LayoutPortfolio() {
    const navigate = useNavigate()
    const { ref, visible } = useAnimationInView()
    const email = "MauricioCor@protonmail.com"
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen bg-background text-white">

            <ScrollToTop />

            {/* Header común */}
            <header className="
  fixed left-0 w-full
  z-50
  border-b border-border
  bg-background/80 backdrop-blur
">

                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
                    <button
                        onClick={() => navigate("/")}
                        className="text-sm text-muted-foreground hover:text-blue-500 cursor-pointer "
                    >
                        ← Volver
                    </button>
                    <h1 className="text-md font-bold md:text-3xl ">Mauricio Martinez</h1>
                    <nav className="flex gap-4 text-sm">
                        <NavLink
                            to="/qa"
                            className={({ isActive }) =>
                                `text-md md:text-xl cursor-pointer transition-colors
                                ${isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}`
                            }
                        >
                            QA
                        </NavLink>

                        <NavLink
                            to="/dev"
                            className={({ isActive }) =>
                                `text-md md:text-xl cursor-pointer transition-colors
                                ${isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}`
                            }
                        >
                            Dev
                        </NavLink>
                        {/* 
                        <NavLink
                            to="/cybersecurity"
                            className={({ isActive }) =>
                                `text-md md:text-xl cursor-pointer transition-colors
                                ${isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}`
                            }
                        >
                            Cyber
                        </NavLink> */}
                    </nav>

                </div>
            </header>

            {/* Contenido dinámico */}
            <main className="max-w-7xl mx-auto pt-24 ">
                <Outlet />
                {/* Contact Section */}
                <section id="contact" className="bg-secondary/30 py-16 text-white">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        {/* <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Hablamos?</h2> */}
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                            Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.
                        </p>

                        <div ref={ref} className={`flex flex-col sm:flex-row gap-4 justify-center opacity-0 ${visible && "animate-[fadeSlide_0.7s_ease-out_forwards]"}`}>
                            <Button size="lg" className=" p-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:translate-y-[-4px] cursor-pointer border-slate-700       " onClick={handleCopy}>
                                <Mail className="h-4 w-4" />
                                {copied ? "¡Copiado!" : email}
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t py-8 text-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <p className="text-center text-sm text-muted-foreground">
                            © 2025 Mauricio Martinez. Todos los derechos reservados.
                        </p>
                    </div>
                </footer>
            </main>
        </div >
    )
}
