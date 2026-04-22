import { motion } from "framer-motion";
import camilaAcademy from "@/assets/camila-academy.png";
import equipeCertificado from "@/assets/equipe-certificado.png";

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

        {/* Two-image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Clinic exterior */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={camilaAcademy}
              alt="Camila na Natalia Beauty Academy"
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-label text-primary-foreground/70 mb-2 tracking-[0.25em]">
                Formação
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground">
                Formada pela Natalia Beauty Academy
              </h3>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={equipeCertificado}
              alt="Equipe Camila Cavinatti Beauty"
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-label text-primary-foreground/70 mb-2 tracking-[0.25em]">
                Certificação
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground">
                Camila e suas alunas certificadas pela Natalia Beauty
              </h3>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a href="https://wa.me/5515981037418?text=Olá! Gostaria de agendar um horário." target="_blank" rel="noopener noreferrer" className="btn-primary">
            Atendimento
          </a>
          <a href="#procedimentos" className="btn-outline">
            Nossos Procedimentos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Clinic;
