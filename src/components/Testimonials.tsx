import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina M.",
    service: "Flow Brows",
    text: "A Camila é uma verdadeira artista. Minhas sobrancelhas nunca ficaram tão naturais e perfeitas. O atendimento é impecável do início ao fim.",
  },
  {
    name: "Juliana R.",
    service: "Pump Lips",
    text: "Resultado incrível! Lábios naturais e com uma cor linda. A Camila tem um cuidado e atenção aos detalhes que fazem toda a diferença.",
  },
  {
    name: "Mariana S.",
    service: "Nanopigmentação",
    text: "Fiz nanopigmentação com a Camila e superou todas as minhas expectativas. Profissional excepcional, ambiente luxuoso e resultado impecável.",
  },
  {
    name: "Fernanda L.",
    service: "Flow Lash Lifting",
    text: "Meus cílios nunca ficaram tão bonitos! O procedimento foi rápido, confortável e o resultado dura semanas. Super recomendo!",
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8 md:p-10 relative shadow-soft border border-gold/15 hover:shadow-luxury hover:-translate-y-1 transition-all duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
