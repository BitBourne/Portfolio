import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimateSection from "@/hooks/animationInView"


export default function StackCard({ title, stacks }) {
    return (
        <AnimateSection>
            <Card className="text-center h-full border-0 ">
                <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{title}</h1>
                <div className="flex px-0 justify-around items-start w-full mb-10 text-center gap-4 ">
                    {stacks.map((stack) => (
                        <div key={stack.label} className="flex flex-col items-center">
                            <h4 className="mb-4 font-semibold text-lg">{stack.label}</h4>
                            <div className="flex flex-wrap gap-2 justify-center max-w-[250px]">
                                {stack.items.map((item) => (
                                    <Badge key={item} className="rounded-2xl border-2 bg-gray-700 text-gray-200">{item}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </AnimateSection>
    )
}
