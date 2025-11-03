import { Card } from "@/components/ui/card";
import { FileCheck2, CalendarDays, Workflow } from "lucide-react";

const Outcomes = () => {
  const outcomes = [
    {
      icon: FileCheck2,
      title: "Plano estratégico 2026 fechado",
      description:
        "Direcionadores estratégicos, metas claras e iniciativas priorizadas",
      details: [
        "Posicionamento e onde jogar",
        "Macro-metas quantificadas",
        "Constraints e recursos",
      ],
    },
    {
      icon: CalendarDays,
      title: "Roteiro dos primeiros 90 dias",
      description:
        "Entregas semanais, responsáveis definidos e rituais estabelecidos",
      details: [
        "Agenda de execução detalhada",
        "Responsáveis por iniciativa",
        "Milestones e checkpoints",
      ],
    },
    {
      icon: Workflow,
      title: "Frameworks prontos para replicar",
      description:
        "Ferramentas práticas que você pode usar com sua equipe",
      details: [
        "Mapa estratégico visual",
        "Matriz de priorização",
        "Dashboards de acompanhamento",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            O que você leva
          </h2>
          <p className="text-xl text-muted-foreground">
            Entregas concretas que viram ação imediata
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <Card
                key={index}
                className="p-8 space-y-6 hover:shadow-elegant transition-all duration-300 bg-card border-border"
              >
                <div className="bg-primary/10 p-4 rounded-2xl w-fit">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {outcome.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  {outcome.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Metas com responsáveis, prazos e rituais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
