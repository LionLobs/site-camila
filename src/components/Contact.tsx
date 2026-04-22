import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5515981037418";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0AE-mail: ${form.email}%0ATelefone: ${form.phone}%0AServiço: ${form.service}%0A%0AMensagem: ${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink to-rose" />

      <div className="relative py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-label text-primary-foreground/70 tracking-[0.3em] mb-4">
                Contato
              </p>
              <h2 className="heading-section text-4xl md:text-5xl text-primary-foreground mb-4">
                Agende sua{" "}
                <span className="heading-italic">avaliação</span>
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-md">
                Conheça nossos procedimentos e agende sua avaliação personalizada.
                Nossa equipe está pronta para transformar sua beleza.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Endereço", detail: "Rua Augusta, 1234 — Jardins, São Paulo" },
                  { icon: Phone, title: "WhatsApp", detail: "(15) 98103-7418", href: WHATSAPP_URL },
                  { icon: Mail, title: "E-mail", detail: "contato@camilacavinatti.com.br" },
                  { icon: Clock, title: "Horário", detail: "Seg a Sex: 9h–19h | Sáb: 9h–15h" },
                  { icon: Instagram, title: "Instagram", detail: "@camilacavinattibeauty" },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href || "#"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-label text-primary-foreground/60 mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-primary-foreground text-sm font-medium group-hover:underline">
                        {item.detail}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <h3 className="heading-section text-2xl text-foreground mb-6">
                Fale <span className="text-pink heading-italic">conosco</span>
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                {[
                  { label: "Nome Completo", type: "text", key: "name" },
                  { label: "E-mail", type: "email", key: "email" },
                  { label: "Telefone", type: "tel", key: "phone" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-label text-muted-foreground mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.label}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink transition-all bg-background"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-label text-muted-foreground mb-2 block">
                    Serviço
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink transition-all bg-background text-muted-foreground"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Flow Brows">Flow Brows</option>
                    <option value="Pump Lips">Pump Lips</option>
                    <option value="Flow Lash Lifting">Flow Lash Lifting</option>
                    <option value="Nanopigmentação">Nanopigmentação</option>
                    <option value="Shine Face">Shine Face</option>
                    <option value="Skincare Profissional">Skincare Profissional</option>
                  </select>
                </div>

                <div>
                  <label className="text-label text-muted-foreground mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte-nos mais sobre o que procura..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink transition-all bg-background resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  Enviar via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
