import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import client1 from "@/assets/client-1.png";
import client2 from "@/assets/client-2.png";
import client3 from "@/assets/client-3.png";
import client4 from "@/assets/client-4.png";
import client5 from "@/assets/client-5.png";

const services = [
  {
    title: "Flow Brows",
    price: "R$ 500,00",
    description:
      "Técnica exclusiva de micropigmentação que recupera o volume e a naturalidade dos fios das sobrancelhas, com resultado hiper-realista e duradouro.",
    image: serviceBrows,
    tag: "Mais pedido",
  },
  {
    title: "Brown Up",
    price: "R$ 150,00",
    description:
      "Tratamento de revitalização e fortalecimento das sobrancelhas, estimulando o crescimento natural dos fios para um visual mais cheio e definido.",
    image: serviceMicropig,
  },
  {
    title: "Grow Up",
    price: "R$ 150,00 por sessão",
    description:
      "Protocolo intensivo para estimular o crescimento de sobrancelhas e cílios, devolvendo densidade e vitalidade aos fios em cada sessão.",
    image: serviceGlow,
  },
  {
    title: "Flow Design",
    price: "R$ 60,00",
    description:
      "Design de sobrancelhas personalizado, respeitando a simetria do rosto e valorizando a beleza única de cada cliente.",
    image: serviceLips,
  },
  {
    title: "Flow Design + Henna",
    price: "R$ 90,00",
    description:
      "Design de sobrancelhas combinado com aplicação de henna para preencher falhas, intensificar a cor e prolongar o resultado.",
    image: serviceSkincare,
  },
  {
    title: "Depilação Facial",
    price: "R$ 50,00",
    description:
      "Remoção delicada dos pelos faciais, deixando a pele lisa, uniforme e pronta para receber maquiagem e demais cuidados.",
    image: serviceGlow,
  },
  {
    title: "Cílios — Volume Brasileiro",
    price: "R$ 150,00",
    description:
      "Extensão de cílios com efeito natural e marcante, fio a fio, ideal para um olhar mais expressivo no dia a dia.",
    image: serviceLashes,
  },
  {
    title: "Cílios — Volume Russo",
    price: "R$ 200,00",
    description:
      "Técnica sofisticada de múltiplos fios ultrafinos por extensão, criando um volume denso, leve e altamente impactante.",
    image: serviceLashes,
    tag: "Premium",
  },
  {
    title: "Cílios — Volume Egípcio",
    price: "R$ 150,00",
    description:
      "Volume com efeito alongado e dramático, com fios estratégicos que criam um olhar felino e sedutor.",
    image: serviceLashes,
  },
];

const CARD_WIDTH = 360;
const GAP = 24;

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const idx = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
    setActiveIndex(Math.min(idx, services.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: CARD_WIDTH + GAP, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = CARD_WIDTH + GAP;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-blush overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-label text-gold tracking-[0.3em] mb-4">
            Procedimentos
          </p>
          <h2 className="heading-section text-4xl md:text-6xl text-foreground">
            Conheça nossos procedimentos{" "}
            <span className="heading-italic text-gradient-pink-gold">
              exclusivos
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Deslize para explorar todos os nossos tratamentos premium
          </p>
        </motion.div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-pink hover:bg-pink/10 hover:scale-105"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-pink hover:bg-pink/10 hover:scale-105"
            aria-label="Próximo"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => { setTimeout(() => setIsPaused(false), 5000); }}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-6 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex-shrink-0 cursor-grab active:cursor-grabbing"
            style={{ width: CARD_WIDTH }}
          >
            <div className="relative bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 h-full flex flex-col border border-border/50 hover:border-pink/30">
              {/* Image */}
              <div className="relative overflow-hidden h-[280px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                {service.tag && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-gold/30 shadow-sm">
                    <Sparkles size={12} className="text-gold" />
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold-dark">
                      {service.tag}
                    </span>
                  </div>
                )}

                {/* Price on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm font-heading text-lg text-pink-dark font-medium shadow-sm">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="heading-section text-xl text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="font-heading text-lg text-pink mb-3">
                  {service.price}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5515981037418?text=Olá! Gostaria de saber mais sobre o procedimento ${service.title} (${service.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-xs py-3"
                >
                  Agendar agora
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              scrollRef.current?.scrollTo({
                left: i * (CARD_WIDTH + GAP),
                behavior: "smooth",
              });
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-pink"
                : "w-2 bg-border hover:bg-pink/40"
            }`}
            aria-label={`Ir para ${services[i].title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
