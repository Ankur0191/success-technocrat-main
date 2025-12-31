import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Duotone style icons as SVG components
const BadgeCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 4.4L17.6 3.6L18.4 6.8L21.6 7.6L20.8 10.8L23.2 13.2L20.8 15.6L21.6 18.8L18.4 19.6L17.6 22.8L14.4 22L12 24.4L9.6 22L6.4 22.8L5.6 19.6L2.4 18.8L3.2 15.6L0.8 13.2L3.2 10.8L2.4 7.6L5.6 6.8L6.4 3.6L9.6 4.4L12 2Z" fill="currentColor" fillOpacity="0.2" transform="translate(0.5, -1) scale(0.92)" />
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m9 11 3 3L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 14L7 22L12 19L17 22L15 14" fill="currentColor" fillOpacity="0.2" />
    <path d="M9 14L7 22L12 19L17 22L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    icon: BadgeCheckIcon,
    title: "Value for Money",
    description: "We deliver projects that exceed expectations. Our services are competitively priced without compromising on quality, ensuring best ROI.",
    stat: "500+ Happy Clients",
  },
  {
    icon: AwardIcon,
    title: "10+ Years Experience",
    description: "Our team has gained proficiency in providing energy solutions. We bring innovative and sustainable solutions to complex challenges.",
    stat: "8MW+ Installed",
  },
  {
    icon: StarIcon,
    title: "Outstanding Service",
    description: "We work closely with clients to understand requirements and ensure projects are completed on time to the highest standards.",
    stat: "100% On-Time Delivery",
  },
  {
    icon: ShieldCheckIcon,
    title: "Premium Quality",
    description: "We use only the best components and materials. Our quality control processes ensure products meet or exceed expectations.",
    stat: "ISO Certified",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref} aria-labelledby="why-choose-heading">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Why Choose Us
          </span>
          <h2 id="why-choose-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose Success Technocrat
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Your trusted partner for solar energy solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card border border-border relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary via-primary-foreground to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ padding: "2px", margin: "-2px" }} aria-hidden="true" />
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{feature.description}</p>
                    
                    {/* Stat badge */}
                    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" aria-hidden="true" />
                      {feature.stat}
                    </div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
