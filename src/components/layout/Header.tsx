import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Solar Calculator", href: "/solar-calculator" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3">
            {/* Desktop Logo */}
            <div className="hidden lg:flex h-14 w-14 bg-white rounded-xl items-center justify-center p-1 overflow-hidden shadow-sm">
              <img
                src={logo}
                alt="Success Technocrats"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Mobile Brand Text */}
            <span
              className={`lg:hidden text-lg font-bold tracking-wide transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Success Technocrats
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919316351322"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isScrolled ? "bg-primary/10" : "bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:block">+91 931-635-1322</span>
            </a>
            <Button variant="solar" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card rounded-b-2xl shadow-2xl overflow-hidden border-t border-border"
            >
              <nav className="p-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3.5 rounded-xl font-medium transition-all ${
                      location.pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-border space-y-3">
                  <a
                    href="tel:+919316351322"
                    className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-secondary text-foreground font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    +91 931-635-1322
                  </a>

                  <Button variant="solar" className="w-full" asChild>
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
