import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, RotateCcw } from "lucide-react"

export default function QADemo() {
  const [step, setStep] = useState(0)

  const startAnimation = () => {
    setStep(0)

    const steps = [1, 2, 3, 4]
    steps.forEach((s, i) => {
      setTimeout(() => setStep(s), 900 * (i + 1))
    })
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (
    <section className="flex justify-center px-4 text-white">
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl w-full">

        {/* LOGIN ANIMADO */}
        <Card className="p-8 space-y-5 backdrop-blur-xl bg-black/30 rounded-2xl">
          <h1 className="text-lg font-semibold">Evidencia</h1>

          <h3 className="text-xl font-semibold text-center">
            Login Test Simulation
          </h3>

          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <div className="border rounded-md p-3 font-mono min-h-12">
              {step >= 1 && "admin@test.com"}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Password</label>
            <div className="border rounded-md p-3 font-mono min-h-12">
              {step >= 2 && "••••••••"}
            </div>
          </div>

          <Button className="w-full" disabled={step < 3}>
            {step < 4 ? "Validating..." : "Login Successful"}
          </Button>

          {step >= 4 && (
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <CheckCircle2 size={16} />
              TC-001 PASSED
            </div>
          )}

          {/* BOTÓN REINICIAR */}
          <Button
            variant="outline"
            className="w-full gap-2 mt-2"
            onClick={startAnimation}
          >
            <RotateCcw size={16} />
            Reiniciar prueba
          </Button>
        </Card>

        {/* MATRIZ QA */}
        <Card className="p-6 backdrop-blur-xl bg-black/30 rounded-2xl space-y-4">
          <h3 className="text-xl font-semibold text-center">
            Matriz de prueba de caso
          </h3>

          <div className="text-sm space-y-2">
            <p><strong>ID:</strong> TC-001</p>
            <p><strong>Módulo:</strong> Login</p>
            <p><strong>Caso de Prueba:</strong> Validar login exitoso</p>
            <p><strong>Tipo de Prueba:</strong> Funcional</p>
            <p><strong>Navegador:</strong> Chrome</p>
            <p><strong>Dispositivo:</strong> Desktop</p>
            <p><strong>Precondición:</strong> Usuario registrado</p>

            <div>
              <strong>Pasos Ejecutados:</strong>
              <ul className="list-decimal list-inside ml-2 text-muted-foreground">
                <li>Acceso a <code>/login</code></li>
                <li>Ingreso de email válido</li>
                <li>Ingreso de contraseña válida</li>
                <li>Click en botón Login</li>
              </ul>
            </div>

            <p><strong>Resultado Esperado:</strong> Acceso al dashboard</p>
            <p><strong>Resultado Obtenido:</strong> Acceso correcto al dashboard</p>

            <div className="flex flex-wrap gap-2 pt-3">
              <Badge className="bg-green-500/20 text-green-400">PASSED</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-400">Severidad: Media</Badge>
              <Badge className="bg-red-500/20 text-red-400">Prioridad: Alta</Badge>
            </div>

            <p className="text-muted-foreground pt-2">
              <strong>Evidencia:</strong> Login exitoso visible en simulación UI
            </p>
          </div>
        </Card>

      </div>
    </section>
  )
}
