import { Card } from "@/components/ui/card";
import { Target, Briefcase, TrendingUp } from "lucide-react";
import hubLogo from "@/assets/hub-logo.png";

const AboutHub = () => {
  const pillars = [
    {
      icon: Briefcase,
      title: "Gestão Financeira",
      description: "DRE, fluxo de caixa e precificação profissional",
    },
    {
      icon: Target,
      title: "Processos",
      description: "Sistemas que rodam sem depender de heróis",
    },
    {
      icon: TrendingUp,
      title: "Execução Disciplinada",
      description: "Rituais de performance e indicadores claros",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <img
              src={hubLogo}
              alt="Hub Business"
              className="h-16 w-auto mx-auto"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Sobre o Hub Business
            </h2>
            <p className="text-xl text-primary font-semibold max-w-2xl mx-auto">
              "Transformamos empreendedores normais em empresários profissionais"
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground leading-relaxed">
                O <strong className="text-foreground">Hub Business</strong> é um
                ecossistema de formação executiva e aceleração para empresários.
                Nasceu da vivência prática, transformando empresas aplicando
                gestão financeira profissional, processos e rituais de
                performance.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center space-y-4 hover:shadow-card transition-all duration-300 bg-card border-border"
                  >
                    <div className="bg-primary/10 p-4 rounded-2xl w-fit mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Manifesto */}
            <div className="text-center space-y-4 pt-8">
              <blockquote className="text-2xl font-semibold text-foreground">
                "Números antes de narrativas."
              </blockquote>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mentorias práticas, eventos presenciais e programas táticos com
                foco em resultado, DRE, fluxo de caixa, precificação e execução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHub;
