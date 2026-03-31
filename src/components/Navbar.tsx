import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Search, ShoppingBag } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo-nigar.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Services", action: () => scrollTo("services") },
    { label: "Courses", action: () => scrollTo("courses") },
    { label: "Testimonials", action: () => scrollTo("testimonials") },
    { label: "Pricing", action: () => scrollTo("pricing") },
  ];

  const textClass = scrolled
    ? "text-muted-foreground hover:text-pink"
    : "text-primary-foreground/80 hover:text-primary-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-2.5 border-b border-pink-light"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="w-9 h-9 rounded-full object-cover border-2 border-gold" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-gold">Nigar</span>
            <span className={`font-display text-lg ml-1 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Fashion World
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className={`font-body text-xs tracking-[0.12em] uppercase transition-colors ${textClass}`}
            >
              {link.label}
            </button>
          ))}
          <Link to="/details" className={`font-body text-xs tracking-[0.12em] uppercase transition-colors ${textClass}`}>
            Details
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className={`hidden md:block transition-colors ${textClass}`}>
            <Search className="w-4.5 h-4.5" />
          </button>

          {user ? (
            <Link to="/profile" className={`hidden md:flex items-center gap-1 font-body text-xs tracking-wider uppercase transition-colors ${textClass}`}>
              <User className="w-4 h-4" />
              Profile
            </Link>
          ) : (
            <Link to="/login" className={`hidden md:block font-body text-xs tracking-wider uppercase transition-colors ${textClass}`}>
              Login
            </Link>
          )}

          <Link
            to="/payment?course=recorded"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-pink text-primary-foreground font-body font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-hot-pink transition-colors shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Enroll
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/98 backdrop-blur-md overflow-hidden border-b border-pink-light"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-muted-foreground hover:text-pink font-body text-sm tracking-wider uppercase text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link to="/details" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-pink font-body text-sm tracking-wider uppercase transition-colors">
                Details
              </Link>
              {user ? (
                <Link to="/profile" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-pink font-body text-sm tracking-wider uppercase transition-colors flex items-center gap-2">
                  <User className="w-4 h-4" /> Profile
                </Link>
              ) : (
                <Link to="/login" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-pink font-body text-sm tracking-wider uppercase transition-colors">
                  Login
                </Link>
              )}
              <Link
                to="/payment?course=recorded"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-5 py-3 bg-pink text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
