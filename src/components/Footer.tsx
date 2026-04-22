import { Instagram, Heart, Facebook, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5515981037418?text=Olá! Gostaria de saber mais sobre os procedimentos.";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Camila Cavinatti Beauty" className="h-16 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed mt-4 max-w-sm">
              Beleza sem padrão, impacto sem limites. Celebramos a autenticidade
              em cada detalhe, trazendo um impacto que vai além de qualquer limite.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-pink transition-colors"
                >
                  <Icon size={16} className="text-primary-foreground" />
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-pink transition-colors"
              >
                <MessageCircle size={16} className="text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-label text-primary-foreground/40 mb-4 tracking-[0.2em]">
              Menu
            </p>
            {["Quem Somos", "Procedimentos", "Clínica", "Depoimentos", "Contato"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="block text-primary-foreground/60 text-sm mb-3 hover:text-pink transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Procedures */}
          <div>
            <p className="text-label text-primary-foreground/40 mb-4 tracking-[0.2em]">
              Procedimentos
            </p>
            {[
              "Flow Brows",
              "Pump Lips",
              "Flow Lash Lifting",
              "Nanopigmentação",
              "Shine Face",
              "Skincare",
            ].map((item) => (
              <a
                key={item}
                href="#procedimentos"
                className="block text-primary-foreground/60 text-sm mb-3 hover:text-pink transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-primary-foreground/10 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/30 text-xs flex items-center gap-1">
            © 2026 Camila Cavinatti Beauty. Todos os direitos reservados.
          </p>
          <a
            href="https://www.instagram.com/lionlobs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/30 text-xs flex items-center gap-2 hover:text-pink transition-colors"
          >
            Criado por <span className="font-semibold text-primary-foreground/50">LionLobs</span>
            <Instagram size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
