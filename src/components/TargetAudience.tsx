import { Card } from "@/components/ui/card";
import { Target, TrendingDown, ListChecks, Calendar, BarChart3 } from "lucide-react";

const TargetAudience = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Não bateu as metas de 2025",
      description: "E não quer repetir os mesmos erros no próximo ano",
    },
    {
      icon: Target,
      title: "Precisa de clareza de prioridades",
      description: "Sabe o que quer, mas não sabe por onde começar",
    },
    {
      icon: BarChart3,
      title: "Quer OKRs e indicadores práticos",
      description: "Que realmente orientem a execução do time",
    },
    {
      icon: Calendar,
      title: "Precisa de um orçamento e agenda",
      description: "Para sair do planejamento e partir para a ação",
    },
    {
      icon: ListChecks,
      title: "Busca rituais de gestão",
      description: "Para acompanhar a execução e garantir resultados",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Para quem é esta mentoria?
          </h2>
          <p className="text-xl text-muted-foreground">
            Líderes e CEOs que querem transformar planejamento em resultado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
