import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Odete",
    service: "Sobrancelhas",
    text: "Fiz minha sobrancelhas ficou muito bom, era o que eu queria. Camila foi muito atenciosa me explicando como ia ser o procedimento. Recomendo e ótima profissional.",
  },
  {
    name: "Andreia Brusque",
    service: "Sobrancelhas",
    text: "Amei minhas sobrancelhas novas! Fazia tempo que procurava melhorar o aspecto das sobrancelhas, e o seu método me surpreendeu. Seu atendimento foi especial, me senti num spa! Conversa boa, massagem e aquele capuccino maravilhoso. Muito obrigada!",
  },
  {
    name: "Amanda Nicolau",
    service: "Sobrancelhas",
    text: "Hoje eu tava aqui arrumando a sobrancelha, já tem um tempão que vc fez e ela está intacta ainda. Eu amei, meu olhar ficou até mais arqueado. Vc arrasa!",
  },
  {
    name: "Shirlen",
    service: "Sobrancelhas e Cílios",
    text: "Amei demais o resultado! Tanto a sobrancelha como o cílios superaram minhas expectativas. Seu atendimento também, impecável, dedicada e disposta a deixar o procedimento confortável. Nota 10!",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-gradient-soft">
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
            Depoimentos
          </p>
          <h2 className="heading-section text-4xl md:text-5xl text-foreground">
            O que dizem nossas{" "}
            <span className="heading-italic text-gradient-pink-gold">
              clientes
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[
              Autoplay({ delay: 3500, stopOnInteraction: false }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((t, i) => (
                <CarouselItem key={t.name} className="pl-6 md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-background rounded-2xl p-8 md:p-10 relative shadow-soft border border-gold/15 hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <Quote size={36} className="text-gold/30 mb-4" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="fill-gold text-gold" />
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                      "{t.text}"
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-5" />

                    <div>
                      <p className="font-heading text-lg text-foreground">{t.name}</p>
                      <p className="text-label text-gold-dark mt-1">{t.service}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
