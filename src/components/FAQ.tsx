import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais são os entregáveis concretos?",
      answer:
        "Você sai com: (1) Plano estratégico 2026 completo em documento, (2) Roteiro detalhado dos primeiros 90 dias com entregas semanais, (3) Frameworks prontos (mapa estratégico, matriz de priorização, dashboards), (4) Templates e checklists para replicar com sua equipe.",
    },
    {
      question: "Qual é o formato: presencial ou online?",
      answer:
        "A mentoria é 100% presencial, com sessões práticas e interativas. Você terá a experiência completa de networking e aprendizado ao vivo com Jacque Gomes.",
    },
    {
      question: "Para qual perfil de empresa é indicado?",
      answer:
        "É ideal para CEOs, diretores e líderes de empresas que já têm operação estruturada e querem profissionalizar a gestão estratégica. Empresas de qualquer porte que precisam sair do planejamento teórico para a execução prática.",
    },
    {
      question: "As sessões ficam gravadas?",
      answer:
        "Não. Por ser uma mentoria presencial e com vagas limitadas, as sessões não são gravadas. Isso garante um ambiente de confiança e troca genuína entre os participantes.",
    },
    {
      question: "Há suporte entre as sessões?",
      answer:
        "Sim, você tem acesso a um grupo exclusivo para tirar dúvidas e receber orientações entre as mentorias, garantindo que você mantenha o momentum de execução.",
    },
    {
      question: "Qual é a política de cancelamento?",
      answer:
        "Entre em contato diretamente pelo WhatsApp para conhecer as condições específicas de cada turma. Cada caso é analisado individualmente.",
    },
    {
      question: "Quando começam as turmas?",
      answer:
        "As turmas são fechadas e com vagas limitadas. Entre em contato pelo WhatsApp para conhecer as próximas datas disponíveis e garantir sua vaga.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo o que você precisa saber
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
