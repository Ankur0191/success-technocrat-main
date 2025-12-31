import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Building2, Factory, Wrench, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import service images
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceEpc from "@/assets/service-epc.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Residential Solar Installation",
    description: "Customized rooftop solutions for homeowners. 1-10kW systems with government subsidy support.",
    points: ["Subsidy assistance up to Rs. 78,000", "Net metering setup", "25-year panel warranty"],
    href: "/services#residential", // <--- Updated to Hash Link
    featured: false,
    image: serviceResidential,
  },
  {
    icon: Building2,
    title: "Commercial Solar Systems",
    description: "Scalable solutions for societies, schools, hospitals, and businesses. 10-100kW capacity.",
    points: ["Group net metering", "Tax benefits under 80D", "ROI in 3-4 years"],
    href: "/services#commercial", // <--- Updated to Hash Link
    featured: true,
    image: serviceCommercial,
  },
  {
    icon: Factory,
    title: "Industrial Solar Plants",
    description: "High-capacity installations for manufacturing units. 100kW to 1MW+ systems.",
    points: ["Open access solar", "Custom engineering", "Grid integration"],
    href: "/services#industrial", // <--- Updated to Hash Link
    featured: false,
    image: serviceIndustrial,
  },
  {
    icon: Wrench,
    title: "Solar Maintenance & AMC",
    description: "Keep your system performing at peak. Comprehensive maintenance packages available.",
    points: ["Regular cleaning", "Performance monitoring", "24/7 support"],
    href: "/services#maintenance", // <--- Updated to Hash Link
    featured: false,
    image: serviceMaintenance,
  },
  {
    icon: Layers,
    title: "EPC Services",
    description: "End-to-end project management from design to commissioning. Complete turnkey solutions.",
    points: ["Design to commissioning", "Quality assurance", "Project management"],
    href: "/services#epc", // <--- Updated to Hash Link
    featured: false,
    image: serviceEpc,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref} aria-labelledby="services-heading">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Comprehensive Solar Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tailored services for residential, commercial, and industrial needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative ${index === 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className={`h-full rounded-xl sm:rounded-2xl bg-card border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  service.featured
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Solar installation service`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-deep-charcoal/20 to-transparent" aria-hidden="true" />
                  
                  {/* Featured badge */}
                  {service.featured && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r from-primary to-amber-gold text-white text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110 ${
                      service.featured
                        ? "bg-gradient-to-br from-primary to-amber-gold"
                        : "bg-white/20 border border-white/30"
                    }`}>
                      <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 sm:mb-5 text-sm leading-relaxed">{service.description}</p>

                  {/* Key Points */}
                  <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-success" aria-hidden="true" />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={service.featured ? "solar" : "solarOutline"}
                    size="default"
                    className="w-full group/btn min-h-[44px] touch-manipulation"
                    asChild
                  >
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;