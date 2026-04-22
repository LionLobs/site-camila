import { motion } from "framer-motion";

const procedures = [
  "Flow Brows",
  "Pump Lips",
  "Flow Lash Lifting",
  "Nanopigmentação",
  "Shine Face",
  "Skincare Profissional",
  "Tintura de Sobrancelhas",
];

const Marquee = () => {
  return (
    <div className="bg-blush py-5 overflow-hidden border-y border-pink-light">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...procedures, ...procedures].map((item, i) => (
          <span key={i} className="flex items-center mx-8">
            <span className="text-nav text-foreground/60 tracking-[0.15em]">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-pink ml-8" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
