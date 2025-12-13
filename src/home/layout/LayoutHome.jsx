import { Outlet } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react";

const LayoutHome = () => {
  const [copied, setCopied] = useState(false);
  const email = "mauriciocor@proton.me";


  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset después de 2 segundos
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <main className="w-11/12 max-w-6xl">

        <Outlet />


      {/* Contact Section */}
      <section id="contact" className="bg-secondary/30 py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Hablamos?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 flex items-center text-lg" onClick={handleCopy}>
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
            © 2025 Mauricio Coronado. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      </main>
    </div>
  );
};

export default LayoutHome;
