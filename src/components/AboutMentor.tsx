import jacqueProfessional from "@/assets/jacque-1.jpg";

const AboutMentor = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src={jacqueProfessional}
                  alt="Jacque Gomes - Multi Empresária"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Sobre a mentora
                </h2>
                <h3 className="text-2xl font-semibold text-primary">
                  Jacque Gomes
                </h3>
                <p className="text-lg text-muted-foreground">
                  Multi Empresária
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jacque Gomes é multi empresária e especialista em planejamento
                  estratégico e execução com foco em resultados. Com anos de
                  experiência liderando empresas e transformando planejamentos em
                  realidade, ela desenvolveu uma metodologia prática que une
                  frameworks de gestão com a realidade do dia a dia empresarial.
                </p>
                <p>
                  Sua abordagem é direta: nada de planejamentos que ficam na
                  gaveta. Cada mentoria é estruturada para gerar documentos,
                  processos e rituais que realmente funcionam na prática.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">
                    Planejamento estratégico aplicado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">
                    Gestão de execução e OKRs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">
                    Rituais de performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;
