import hubLogo from "@/assets/hub-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <img src={hubLogo} alt="Hub Business" className="h-10 w-auto brightness-0 invert" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Transformamos empreendedores normais em empresários profissionais.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>WhatsApp: (62) 98327-3456</p>
                <p>contato@hubbusiness.com.br</p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Informações</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-primary transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {currentYear} Hub Business. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
