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
                <CardDescription>
                  {company} · {period}
                </CardDescription>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader >

          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
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
