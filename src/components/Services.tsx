import { motion } from "framer-motion";
import serviceBrows from "@/assets/service-brows.jpg";
import serviceLips from "@/assets/service-lips.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";
import serviceMicropig from "@/assets/service-micropig.jpg";
import serviceGlow from "@/assets/service-glow.jpg";
import serviceSkincare from "@/assets/service-skincare.jpg";

const services = [
  {
    title: "Flow Brows",
    price: "R$ 500,00",
    description:
      "Técnica exclusiva de micropigmentação que recupera o volume e a naturalidade dos fios das sobrancelhas, com resultado hiper-realista e duradouro.",
    image: serviceBrows,
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
  },
  {
    title: "Cílios — Volume Egípcio",
    price: "R$ 150,00",
    description:
      "Volume com efeito alongado e dramático, com fios estratégicos que criam um olhar felino e sedutor.",
    image: serviceLashes,
  },
];

const Services = () => {
  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-blush">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
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
        </motion.div>

        {/* Services - alternating layout like Natália */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 md:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="heading-section text-3xl md:text-4xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-heading text-2xl md:text-3xl text-pink mb-5">
                    {service.price}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                    {service.description}
                  </p>
                  <a href={`https://wa.me/5515981037418?text=Olá! Gostaria de saber mais sobre o procedimento ${service.title} (${service.price}).`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Agendar
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
