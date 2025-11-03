import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Program = () => {
  const whatsappLink =
    "https://wa.me/5562996557262?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Gest%C3%A3o%20Estrat%C3%A9gica%202026";

  const meetings = [
    {
      number: "01",
      date: "01 de Dezembro",
      title: "Balanço 2025 e Diagnóstico Estratégico",
      duration: "19h30 às 22h30",
      deliverables: [
        "Balanço completo de resultados 2025",
        "Diagnóstico estratégico com SWOT/FOFA e Roda da Governança",
        "Revisão de Missão, Visão e Valores",
        "Mapa de Direção 2026 definido",
      ],
    },
    {
      number: "02",
      date: "08 de Dezembro",
      title: "Metas, OKRs e Direcionadores de Crescimento",
      duration: "19h30 às 22h30",
      deliverables: [
        "Pilares estratégicos 2026 definidos",
        "Objetivos estratégicos e OKRs estruturados",
        "Metas SMART e KPIs mensuráveis",
        "Painel de Metas 2026 completo",
      ],
    },
    {
      number: "03",
      date: "15 de Dezembro",
      title: "Plano de Ação e Execução Estratégica",
      duration: "19h30 às 22h30",
      deliverables: [
        "Planos de Ação por pilar estratégico",
        "Calendário Estratégico 2026 trimestral",
        "Rituais de gestão e acompanhamento",
        "Planejamento pronto para execução",
      ],
    },
  ];

  return (
    <section id="programa" className="py-24 bg-gradient-to-b from-primary/5 via-secondary/40 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Programa: 3 Encontros Práticos
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada sessão te aproxima do seu plano 2026 completo
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {meetings.map((meeting, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:shadow-card transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="bg-primary text-primary-foreground rounded-2xl h-20 w-20 flex items-center justify-center">
                    <span className="text-3xl font-bold">{meeting.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {meeting.title}
                      </h3>
                      <div className="flex gap-2">
                        <span className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                          {meeting.date}
                        </span>
                        <span className="text-xs text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                          {meeting.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-foreground text-sm uppercase tracking-wide">
                      Entregáveis:
                    </p>
                    <ul className="space-y-2">
                      {meeting.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="text-lg h-14 px-8 shadow-elegant"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Quero meu plano 2026
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Vagas limitadas • Turmas fechadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Program;
