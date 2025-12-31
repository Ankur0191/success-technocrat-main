import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import case study images
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import caseStudy4 from "@/assets/case-study-4.jpg";
import caseStudy5 from "@/assets/case-study-5.jpg";
import caseStudy6 from "@/assets/case-study-6.jpg";

const caseStudies = [
  {
    title: "Yash Poly Industries",
    type: "Industrial",
    capacity: "425 kWp",
    location: "Gujarat, India",
    result: "Waaree 560Wp Mono PERC | SunGrow Inverter",
    image: caseStudy1,
  },
  {
    title: "Tushar Trans Equipment",
    type: "Industrial",
    capacity: "250 kWp",
    location: "Gujarat, India",
    result: "Ballast + Sheet Structure | SolarYaan Inverter",
    image: caseStudy2,
  },
  {
    title: "SR Engineering",
    type: "Industrial",
    capacity: "60 kW",
    location: "Gujarat, India",
    result: "Annual Generation: 1.01 Lakh Units",
    image: caseStudy3,
  },
  {
    title: "Elite Decor",
    type: "Commercial",
    capacity: "40 kW",
    location: "Gujarat, India",
    result: "Annual Generation: 67K Units",
    image: caseStudy4,
  },
  {
    title: "JS Pharma",
    type: "Industrial",
    capacity: "180 kW",
    location: "Gujarat, India",
    result: "Annual Generation: 3.21 Lakh Units",
    image: caseStudy5,
  },
  {
    title: "Supreme Furniture",
    type: "Industrial",
    capacity: "250 kW",
    location: "Gujarat, India",
    result: "Annual Generation: 4.45 Lakh Units",
    image: caseStudy6,
  },
];



const typeColors: Record<string, string> = {
  Residential: "bg-success text-success-foreground",
  Commercial: "bg-primary text-primary-foreground",
  Industrial: "bg-deep-charcoal text-white",
};

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref} aria-labelledby="case-studies-heading">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Success Stories
          </span>
          <h2 id="case-studies-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Success Stories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Real results from real clients across India
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Type Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-semibold ${typeColors[study.type]}`}>
                    {study.type}
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent" />
                  {/* Capacity badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <Zap className="w-4 h-4 text-amber-gold" />
                    </div>
                    <span className="font-bold">{study.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-success/10 border border-success/20">
                    <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-sm font-medium text-success">{study.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="solar" size="lg" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
