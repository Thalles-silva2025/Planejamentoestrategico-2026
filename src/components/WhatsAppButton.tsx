import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappLink =
    "https://wa.me/5562996557262?text=Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Gest%C3%A3o%20Estrat%C3%A9gica%202026";

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-elegant hover:shadow-xl transition-all hover:scale-110 md:h-auto md:w-auto md:rounded-full md:px-6"
      onClick={() => window.open(whatsappLink, "_blank")}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:mr-2" />
      <span className="hidden md:inline">WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
