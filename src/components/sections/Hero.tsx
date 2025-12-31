import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Award, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import hero images
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Residential Solar",
    subtitle: "Power Your Home with Clean Energy",
    description: "Government subsidy up to Rs. 78,000. Zero electricity bills. 25-year warranty.",
  },
  {
    image: heroSlide2,
    title: "Commercial Solar",
    subtitle: "Reduce Business Energy Costs",
    description: "Quick ROI in 3-4 years. Tax benefits available. Scalable solutions.",
  },
  {
    image: heroSlide3,
    title: "Industrial Solar",
    subtitle: "Large-Scale Power Generation",
    description: "100kW to 1MW+ installations. Grid integration. Custom engineering.",
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Projects" },
  { icon: Zap, value: "8MW+", label: "Installed" },
  { icon: Users, value: "100%", label: "Satisfaction" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black"
      role="region"
      aria-label="Hero section with solar energy solutions"
    >
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, scale: { duration: 6, ease: "linear" } }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs font-medium text-white/90">
              India's Trusted Solar EPC Company
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mb-6 md:mb-8"
            >
              <span className="block text-sm font-bold text-yellow-400 uppercase tracking-wider mb-2">
                {slides[currentSlide].title}
              </span>

              {/* 🔽 Shadow reduced from lg → md */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                {slides[currentSlide].subtitle}
              </h1>

              <p className="text-sm md:text-lg text-white/80 max-w-xl">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Button className="h-11 px-6" asChild>
              <Link to="/contact" className="gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="h-11 px-6" asChild>
              <Link to="/case-studies">View Our Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-3 md:gap-6 max-w-xl"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <stat.icon className="w-4 h-4 text-yellow-400" />
                <div>
                  <div className="font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
