import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import jacqueSpeaking from "@/assets/jacque-3.jpg";

const FinalCTA = () => {
  const whatsappLink =
    "https://wa.me/5562996557262?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Gest%C3%A3o%20Estrat%C3%A9gica%202026";

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-hover relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${jacqueSpeaking})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            2026 forte não nasce em janeiro. Começa agora.
          </h2>
          
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Três encontros para decidir estratégia, priorizar iniciativas e
            desenhar 90 dias que viram resultado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg h-14 px-8 shadow-xl hover:shadow-2xl transition-all"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Quero garantir minha vaga
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80 pt-4">
            Vagas limitadas • Turmas fechadas • Fale agora pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
