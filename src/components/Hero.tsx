import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import jacqueHero from "@/assets/jacque-2.jpg";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img src={hubLogo} alt="Hub Business" className="h-24 w-auto drop-shadow-2xl" />
              <span className="text-base text-slate-300">
                • Transforme estratégia em resultado real
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {content.title}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
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
                  <span className="text-slate-200">{item}</span>
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
            <p className="text-sm text-slate-400">
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
            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl shadow-elegant border border-slate-700 max-w-xs">
              <p className="text-sm font-medium text-white">
                "Transformamos empreendedores normais em empresários profissionais."
              </p>
              <p className="text-xs text-slate-400 mt-2">Hub Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
