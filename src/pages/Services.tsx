import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SEOHead from "@/components/seo/SEOHead";

import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceEpc from "@/assets/service-epc.jpg";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    id: "residential", // Anchor ID
    title: "Residential Solar",
    tagline: "Power Your Home with Clean Energy",
    description: "Transform your home into an eco-friendly powerhouse with our residential solar solutions. Perfect for homeowners looking to reduce electricity bills and carbon footprint.",
    image: serviceResidential,
    capacity: "1 kW - 10 kW",
    idealFor: "Houses, Apartments, Villas",
    features: [
      "Reduce electricity bills by 70-90%",
      "Government subsidy up to ₹78,000",
      "25-year panel warranty",
      "Net metering enabled",
      "Quick 2-3 day installation",
      "Free site survey & design",
    ],
    pricing: "Starting from ₹45,000/kW",
  },
  {
    id: "commercial", // Anchor ID
    title: "Commercial Solar",
    tagline: "Sustainable Solutions for Businesses",
    description: "Reduce operating costs and demonstrate environmental responsibility with our commercial solar installations. Ideal for offices, shops, hospitals, and educational institutions.",
    image: serviceCommercial,
    capacity: "10 kW - 100 kW",
    idealFor: "Offices, Hospitals, Schools, Shops",
    features: [
      "Reduce operating costs significantly",
      "Tax benefits under depreciation",
      "Enhance green credentials",
      "Minimal rooftop maintenance",
      "Remote monitoring system",
      "Dedicated support team",
    ],
    pricing: "Starting from ₹40,000/kW",
  },
  {
    id: "industrial", // Anchor ID
    title: "Industrial Solar",
    tagline: "Large-Scale Energy Independence",
    description: "High-capacity solar solutions for manufacturing units and industrial complexes. Achieve energy independence and significant cost savings at scale.",
    image: serviceIndustrial,
    capacity: "100 kW - 10 MW+",
    idealFor: "Factories, Manufacturing Units, Warehouses",
    features: [
      "Massive electricity savings",
      "40% accelerated depreciation",
      "Ground mount & rooftop options",
      "Custom engineering solutions",
      "SCADA monitoring system",
      "O&M contracts available",
    ],
    pricing: "Custom pricing based on requirements",
  },
  {
    id: "maintenance", // Anchor ID
    title: "Maintenance & AMC",
    tagline: "Keep Your System Running Optimally",
    description: "Comprehensive maintenance services to ensure your solar investment delivers maximum returns year after year. Available for systems installed by any vendor.",
    image: serviceMaintenance,
    capacity: "All system sizes",
    idealFor: "Existing Solar Installations",
    features: [
      "Regular cleaning & inspection",
      "Performance monitoring",
      "Inverter maintenance",
      "Electrical safety checks",
      "Priority emergency support",
      "Quarterly reports",
    ],
    pricing: "Starting from ₹2,000/kW per year",
  },
  {
    id: "epc", // Anchor ID
    title: "EPC Contracting",
    tagline: "Turnkey Solar Solutions",
    description: "End-to-end Engineering, Procurement, and Construction services for solar projects. From design to commissioning, we handle everything.",
    image: serviceEpc,
    capacity: "500 kW - 50 MW+",
    idealFor: "Large Projects, Developers, Contractors",
    features: [
      "Complete turnkey solutions",
      "Project management expertise",
      "Quality assured components",
      "Timely project delivery",
      "Regulatory compliance",
      "Performance guarantees",
    ],
    pricing: "Project-based pricing",
  },
];

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Solar Services - Success Technocrat | Residential, Commercial & Industrial"
        description="Complete solar solutions for homes, businesses, and industries. Residential solar from ₹45,000/kW. Free site survey and consultation."
        keywords="residential solar, commercial solar, industrial solar, solar maintenance, EPC contractor"
        canonicalUrl="https://successtechnocrat.com/services"
      />
      <Header />
      
      {/* Hero Section - Dark transparent with image */}
      <section className="relative pt-32 pb-20 overflow-hidden" ref={heroRef}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroServices} 
            alt="Solar Installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete Solar{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              From residential rooftops to industrial power plants, we deliver end-to-end solar solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="solar" size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="default" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <a href="tel:+919316351322">
                  <Phone className="w-5 h-5 mr-2 fill-primary/20" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Version */}
      <section className="section-padding bg-deep-blue">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Get a free consultation and custom quote for your project today.
            </p>
            <Button variant="solar" size="xl" asChild>
              <Link to="/contact">
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      // Added ID here for scrolling
      id={service.id} 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      // Added scroll-mt-32 to offset the fixed header
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-32 ${isEven ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Image */}
      <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[300px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm">
                <span className="text-white/70">Capacity:</span> {service.capacity}
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5" />
      </div>

      {/* Content */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {service.idealFor}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          {service.title}
        </h2>
        <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
        <p className="text-muted-foreground mb-6">{service.description}</p>

        {/* Features */}
        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-secondary border border-border">
            <span className="text-sm text-muted-foreground">Pricing: </span>
            <span className="font-semibold text-foreground">{service.pricing}</span>
          </div>
          <Button variant="solar" asChild>
            <Link to="/contact">
              Get Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;