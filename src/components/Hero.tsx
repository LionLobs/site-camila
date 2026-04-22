import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import camilaHero from "@/assets/camila-hero.jpg";

const WHATSAPP_URL =
  "https://wa.me/5515981037418?text=Olá! Gostaria de agendar um horário.";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-luxury pt-24 md:pt-0"
    >
      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-pink/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/70 backdrop-blur-sm border border-gold/30 mb-6 shadow-soft"
            >
              <Sparkles size={14} className="text-gold" />
              <span className="text-label text-gold-dark">
                Beauty Studio Premium
              </span>
            </motion.div>

            <h1 className="heading-hero text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Beleza sem padrão,{" "}
              <span className="heading-italic text-gradient-pink-gold">
                impacto sem limites.
              </span>
            </h1>

            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Desafiamos normas e celebramos a autenticidade em cada detalhe,
              trazendo um impacto que vai além de qualquer limite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar Horário
              </a>
              <a href="#quem-somos" className="btn-outline-dark">
                Saiba Mais
              </a>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gold/20 max-w-md">
              {[
                { number: "+5.000", label: "Clientes" },
                { number: "+8", label: "Anos" },
                { number: "+15", label: "Certificações" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl md:text-3xl text-gradient-pink-gold">
                    {stat.number}
                  </p>
                  <p className="text-label text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative max-w-[420px] mx-auto">
              {/* Gold decorative frame */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-luxury border-2 border-background">
                <img
                  src={camilaHero}
                  alt="Camila Cavinatti - Beauty Artist"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 md:-left-8 bg-background rounded-2xl px-5 py-4 shadow-luxury border border-gold/20"
              >
                <p className="text-label text-gold-dark mb-1">Especialista</p>
                <p className="font-heading text-lg text-foreground leading-tight">
                  Camila Cavinatti
                </p>
              </motion.div>

              {/* Decorative gold corners */}
              <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-gold rounded-tr-2xl" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-gold rounded-br-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <div className="container mx-auto px-6 pb-6">
          <div className="flex items-center justify-between">
            <p className="text-label text-muted-foreground tracking-[0.25em]">
              Acompanhe o que fazemos
            </p>
            <div className="h-px flex-1 mx-6 bg-gradient-to-r from-gold/40 via-pink/30 to-transparent" />
            <span className="text-gold text-2xl font-light">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
