import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import jacqueHero from "@/assets/jacque-hero.jpg";
import hubLogo from "@/assets/hub-logo.png";

interface HeroProps {
  variant?: "a" | "b";
}

const Hero = ({ variant = "a" }: HeroProps) => {
  const whatsappLink =
    "https://wa.me/5562983273456?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Gest%C3%A3o%20Estrat%C3%A9gica%202026";

  const variantA = {
    title: "Planejamento Estratégico 2026, do papel à execução.",
    subtitle:
      "Três encontros práticos com Jacque Gomes (CEO da Persiflex) para sair com seu plano 2026 pronto e 90 dias de ação definidos.",
  };

  const variantB = {
    title: "Chega de metas no papel.",
    subtitle:
      "Saia com o 2026 decidido e um roteiro de 90 dias que roda.",
  };

  const content = variant === "a" ? variantA : variantB;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={hubLogo} alt="Hub Business" className="h-8 w-auto" />
              <span className="text-sm text-muted-foreground">
                • Mentorias com mentores de mercado
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {content.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.subtitle}
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-3">
              {[
                "Clareza estratégica: onde jogar e como vencer",
                "Mão na massa: você sai com o documento pronto",
                "Execução em cadência: rituais semanais e indicadores simples",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg h-14 px-8 shadow-elegant hover:shadow-xl transition-all"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8"
                onClick={() =>
                  document
                    .getElementById("programa")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Programa Completo
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-muted-foreground">
              Mentoria prática, com entrega real.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={jacqueHero}
                alt="Jacque Gomes - CEO da Persiflex"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-elegant border border-border max-w-xs">
              <p className="text-sm font-medium text-foreground">
                "Transformamos empreendedores normais em empresários profissionais."
              </p>
              <p className="text-xs text-muted-foreground mt-2">Hub Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
