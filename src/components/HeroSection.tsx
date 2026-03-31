import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-beauty-banner.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-dark">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Nigar Fashion World Beauty Products"
        className="w-full h-full object-cover"
        width={1920}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-4 py-1.5 bg-pink/20 border border-pink/30 text-pink font-body text-xs uppercase tracking-[0.25em] rounded-full mb-6"
        >
          ✦ Nigar Fashion World ✦
        </motion.span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display text-primary-foreground leading-[1.05] mb-4">
          Blur. Set.{" "}
          <em className="italic text-gold">Go Bold.</em>
        </h1>
        <p className="text-primary-foreground/70 font-body text-base md:text-lg leading-relaxed mb-3 max-w-md">
          প্রফেশনাল মেকআপ সার্ভিস এবং প্রিমিয়াম বিউটি প্রোডাক্ট — সব এক জায়গায়।
        </p>
        <p className="text-primary-foreground/50 font-body text-sm mb-8 max-w-md">
          Professional makeup services & premium beauty products — all in one place.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/details"
            className="px-8 py-3.5 bg-pink text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-hot-pink transition-colors shadow-lg"
          >
            Shop Now
          </Link>
          <a
            href="#services"
            className="px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body text-sm uppercase tracking-wider rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </motion.div>
    </div>

    {/* Decorative floating elements */}
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute bottom-10 right-10 w-20 h-20 bg-pink/20 rounded-full blur-2xl hidden md:block"
    />
  </section>
);

export default HeroSection;
