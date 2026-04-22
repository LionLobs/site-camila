import { motion } from "framer-motion";
import clinicBg from "@/assets/clinic-bg.jpg";

const Clinic = () => {
  return (
    <section id="clinica" className="py-24 md:py-32 bg-background">
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
            Nosso Espaço
          </p>
          <h2 className="heading-section text-4xl md:text-5xl text-foreground mb-4">
            Conheça{" "}
            <span className="heading-italic text-gradient-pink-gold">
              nossa clínica
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Na nossa clínica estética, a beleza é cuidada com precisão e carinho,
            para que você se sinta confiante e radiante em cada detalhe do seu ser.
          </p>
        </motion.div>

        {/* Clinic Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={clinicBg}
            alt="Clínica Camila Cavinatti Beauty"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-label text-primary-foreground/70 mb-3 tracking-[0.25em]">
              Espaço Exclusivo
            </p>
            <h3 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
              A beleza natural realçada é uma das formas mais lindas de viver.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5515981037418?text=Olá! Gostaria de agendar um horário." target="_blank" rel="noopener noreferrer" className="btn-primary">
                Atendimento
              </a>
              <a href="#procedimentos" className="btn-outline">
                Nossos Procedimentos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clinic;
