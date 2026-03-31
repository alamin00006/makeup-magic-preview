import { motion } from "framer-motion";
import heroImg from "@/assets/hero-beauty-banner.jpg";

const LandingHero = () => (
  <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-background">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Nigar Fashion World Beauty"
        className="w-full h-full object-cover"
        width={1920}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg"
      >
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-2">
          Nigar Fashion World
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-primary-foreground leading-[1.05] mb-3">
          Blur. Set.{" "}
          <em className="italic block text-gold">Go bold.</em>
        </h1>
        <p className="text-primary-foreground/60 font-body text-sm mb-6 max-w-sm">
          Create flawless essentials.
        </p>
        <a
          href="#best-sellers"
          className="inline-block px-8 py-3 bg-dark text-primary-foreground font-body text-xs tracking-[0.15em] uppercase border border-primary-foreground/30 hover:bg-primary-foreground hover:text-dark transition-all duration-300"
        >
          Shop Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default LandingHero;
