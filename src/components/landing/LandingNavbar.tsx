import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Search, ShoppingBag, Heart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo-nigar.jpg";

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-card shadow-md border-b border-border" : "bg-card/95 backdrop-blur-sm"
    }`}>
      {/* Top strip */}
      <div className="bg-dark text-primary-foreground text-center py-1.5">
        <p className="font-body text-[10px] tracking-wider uppercase">
          Free Shipping on orders above ৳2,000 | Use code: <span className="text-gold font-semibold">NIGAR20</span>
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gold" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-sm md:text-base font-bold tracking-wide">
                <span className="text-pink">N</span>IGAR
              </span>
              <span className="font-body text-[8px] text-muted-foreground tracking-[0.2em] uppercase -mt-0.5">Fashion World</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {["Best Sellers", "New Arrivals", "Brands", "Offers"].map((label) => (
              <button
                key={label}
                onClick={() => scrollTo(label.toLowerCase().replace(" ", "-"))}
                className="font-body text-xs tracking-wider uppercase text-foreground hover:text-pink transition-colors"
              >
                {label}
              </button>
            ))}
            <Link to="/details" className="font-body text-xs tracking-wider uppercase text-foreground hover:text-pink transition-colors">
              Courses
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
              <Search className="w-4 h-4 text-foreground" />
            </button>
            <button className="w-9 h-9 hidden md:flex items-center justify-center rounded-full hover:bg-muted transition-colors relative">
              <Heart className="w-4 h-4 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink rounded-full text-[9px] text-primary-foreground flex items-center justify-center font-body font-bold">3</span>
            </button>
            <Link to="/payment?course=recorded" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors relative">
              <ShoppingBag className="w-4 h-4 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink rounded-full text-[9px] text-primary-foreground flex items-center justify-center font-body font-bold">1</span>
            </Link>
            {user ? (
              <Link to="/profile" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                <User className="w-4 h-4 text-foreground" />
              </Link>
            ) : (
              <Link to="/login" className="hidden md:flex items-center px-4 py-1.5 bg-dark text-primary-foreground font-body text-xs tracking-wider uppercase rounded-full hover:bg-foreground transition-colors">
                Login
              </Link>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-3">
              {["Best Sellers", "New Arrivals", "Brands", "Offers"].map((label) => (
                <button
                  key={label}
                  onClick={() => scrollTo(label.toLowerCase().replace(" ", "-"))}
                  className="text-foreground font-body text-sm tracking-wider uppercase text-left hover:text-pink transition-colors py-1"
                >
                  {label}
                </button>
              ))}
              <Link to="/details" onClick={() => setMobileOpen(false)} className="text-foreground font-body text-sm tracking-wider uppercase hover:text-pink transition-colors py-1">
                Courses
              </Link>
              {!user && (
                <Link to="/login" onClick={() => setMobileOpen(false)} className="mt-2 text-center py-2.5 bg-dark text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full">
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default LandingNavbar;
