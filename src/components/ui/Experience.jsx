import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimateSection from "@/hooks/animationInView"

export default function Experience({ title, company, period, bullets, tags = [] }) {


  return (
    <section className="container mx-auto">
      <AnimateSection>
        <Card className=" backdrop-blur-xl rounded-2xl border-2 border-gray-600">
          < CardHeader >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {company} · {period}
                </CardDescription>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <div key={i} className="relative inline-block">
                      <Badge variant="secondary" className="text-gray-200">
                        {tag}
                      </Badge>

                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-700" />
                    </div>

                  ))}
                </div>
              )}
            </div>
          </CardHeader >

          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-gray-300">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card >
      </AnimateSection>
    </section>
  )
}
