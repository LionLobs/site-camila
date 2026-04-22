import { motion } from "framer-motion";
import camilaCafe from "@/assets/camila-cafe-hd.jpg";
import camilaFlores from "@/assets/camila-flores-hd.jpg";
import camilaAcademy from "@/assets/camila-academy.png";

const About = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-background">
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
            Quem Somos
          </p>
          <h2 className="heading-section text-4xl md:text-6xl text-foreground">
            Camila{" "}
            <span className="heading-italic text-gradient-pink-gold">
              Cavinatti
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[340px] mx-auto">
              {/* Main image */}
              <img
                src={camilaFlores}
                alt="Camila Cavinatti entre flores"
                className="w-full aspect-[3/4] rounded-2xl object-cover object-top shadow-luxury"
              />
              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -right-5 w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-luxury border-4 border-background"
              >
                <img
                  src={camilaCafe}
                  alt="Camila Cavinatti"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-pink-light/50 -z-10 hidden lg:block" />
              <div className="absolute -bottom-8 -left-8 w-14 h-14 rounded-full bg-gold/20 -z-10 hidden lg:block" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-label text-pink tracking-[0.25em] mb-6">
              Grupo Camila Cavinatti
            </p>
            <p className="text-foreground leading-relaxed mb-5 text-base">
              A marca Camila Cavinatti surgiu de um sonho de sua fundadora: fazer
              a diferença na vida das pessoas e tornar o mundo um lugar onde a
              individualidade é respeitada e{" "}
              <span className="text-pink font-medium">
                a beleza não tem padrão.
              </span>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Com anos de experiência e formação internacional, Camila se consolidou
              como uma das referências em beleza artística no Brasil. Sua abordagem
              combina técnica impecável com sensibilidade artística.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Especialista em micropigmentação, design de sobrancelhas e procedimentos
              faciais, acredita que a verdadeira beleza está na valorização da
              individualidade de cada pessoa.
            </p>

            <a href="https://wa.me/5515981037418?text=Olá! Gostaria de saber mais sobre a Camila Cavinatti Beauty." target="_blank" rel="noopener noreferrer" className="btn-primary">
              Saiba Mais
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { number: "+5.000", label: "Clientes" },
                { number: "+8", label: "Anos" },
                { number: "+15", label: "Certificações" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl text-pink">
                    {stat.number}
                  </p>
                  <p className="text-label text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
