import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function QATestMatrix({
    id,
    module,
    title,
    type,
    browser,
    device,
    precondition,
    steps,
    expectedResult,
    actualResult,
    status,
    severity,
    priority,
    evidence,
}) {
    return (
        <Card className="p-6 h-full backdrop-blur-xl bg-black/20 border-2 rounded-2xl space-y-4">
            <h3 className="text-xl font-semibold text-center">
                Matriz de prueba de caso
            </h3>

            <div className="text-sm space-y-2">
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Módulo:</strong> {module}</p>
                <p><strong>Caso de Prueba:</strong> {title}</p>
                <p><strong>Tipo de Prueba:</strong> {type}</p>
                <p><strong>Navegador:</strong> {browser}</p>
                <p><strong>Dispositivo:</strong> {device}</p>
                <p><strong>Precondición:</strong> {precondition}</p>

                <div>
                    <strong>Pasos Ejecutados:</strong>
                    <ul className="list-decimal list-inside ml-2 text-muted-foreground">
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>

                <p><strong>Resultado Esperado:</strong> {expectedResult}</p>
                <p><strong>Resultado Obtenido:</strong> {actualResult}</p>

                <div className="flex flex-wrap gap-2 pt-3">
                    <Badge className="bg-green-500/20 text-green-400">
                        {status}
                    </Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400">
                        Severidad: {severity}
                    </Badge>
                    <Badge className="bg-red-500/20 text-red-400">
                        Prioridad: {priority}
                    </Badge>
                </div>

                <p className="text-muted-foreground pt-2">
                    <strong>Evidencia:</strong> {evidence}
                </p>
            </div>
        </Card>
    )
}
