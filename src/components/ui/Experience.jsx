export default function Experience({
  title = "Experiencia",
  items = [],
}) {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {title}
        </h2>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>
                  <p className="text-primary font-medium">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {item.period}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
