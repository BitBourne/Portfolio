import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, RotateCcw } from "lucide-react"
import AnimateSection from "@/hooks/animationInView"

export default function QADemo() {
  const [step, setStep] = useState(0)

  const startAnimation = () => {
    setStep(0)

    const steps = [
      { step: 1, delay: 1000 },  // escribir email
      { step: 2, delay: 800 },  // escribir password
      { step: 3, delay: 800 },  // escribir password
      { step: 4, delay: 800 },  // escribir password
    ]
    steps.forEach((s, i) => {
      setTimeout(() => setStep(s.step), s.delay * (i + 1))
    })
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (

    <AnimateSection>
      <Card className="p-6 h-full backdrop-blur-xl rounded-2xl border-2 border-gray-600 ">

        <h3 className="text-xl font-semibold text-center">
          Login Test Simulation
        </h3>

        <div>
          <label className="text-sm text-muted-foreground">Email</label>
          <div className="border-2 border-gray-600 rounded-md p-3 font-mono min-h-13">
            {step >= 1 && "admin@test.com"}
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground">Password</label>
          <div className="border-2 border-gray-600 rounded-md p-3 font-mono min-h-13">
            {step >= 2 && "••••••••"}
          </div>
        </div>

        <Button className="w-full" disabled={step < 3}>
          {step < 4 ? "Validating..." : "Login Successful"}
        </Button>

        {
          <div className="flex items-center gap-2 text-green-500 text-sm min-h-[24px]">
            <CheckCircle2
              size={16}
              className={`transition-opacity duration-500 ${step >= 4 ? "opacity-100" : "opacity-0"}`}
            />
            <span className={`transition-opacity duration-500 ${step >= 4 ? "opacity-100" : "opacity-0"}`}>
              TC-001 PASSED
            </span>
          </div>

        }

        {/* BOTÓN REINICIAR */}
        <Button
          variant="outline"
          className="w-full gap-2 mt-2 cursor-pointer hover:text-yellow-400"
          onClick={startAnimation}
        >
          <RotateCcw size={16} />
          Reiniciar prueba
        </Button>
      </Card>
    </AnimateSection>
  )
}
