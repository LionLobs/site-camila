import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import camilaVideo from "@/assets/camila-video.mp4";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-luxury">
      {/* Decorative gold elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-pink/15 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-label text-gold tracking-[0.3em] mb-4">
            Bastidores
          </p>
          <h2 className="heading-section text-4xl md:text-6xl text-foreground">
            Uma experiência{" "}
            <span className="heading-italic text-gradient-pink-gold">
              exclusiva
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
            Conheça nosso espaço e a delicadeza por trás de cada procedimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Gold frame */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-gold opacity-40 blur-xl" />

          <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-gold/30">
            <video
              ref={videoRef}
              src={camilaVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto block"
              style={{
                WebkitBackfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            />

            {/* Subtle gradient overlay bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/40 to-transparent pointer-events-none" />

            {/* Play/Pause control */}
            <button
              onClick={togglePlay}
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all shadow-gold border border-gold/30"
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {isPlaying ? (
                <Pause size={18} className="text-gold-dark" />
              ) : (
                <Play size={18} className="text-gold-dark ml-0.5" />
              )}
            </button>

            {/* Corner label */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-gold/30">
              <p className="text-label text-gold-dark">Camila Cavinatti</p>
            </div>
          </div>

          {/* Decorative gold corners */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-2xl" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-2xl" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-2xl" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
