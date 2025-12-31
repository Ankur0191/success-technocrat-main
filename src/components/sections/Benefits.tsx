import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Duotone style icons as SVG components
const PiggyBankIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" fill="currentColor" fillOpacity="0.2" />
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20L9 13L13 17L22 7" fill="currentColor" fillOpacity="0" />
    <path d="M2 20L9 13L13 17L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 7V13H16" fill="currentColor" fillOpacity="0.2" />
    <path d="M22 7V13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="12" width="20" height="8" fill="currentColor" fillOpacity="0.1" rx="1" />
  </svg>
);

const BatteryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="6" width="18" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="1" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="23" y1="10" x2="23" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="4" y="9" width="12" height="6" rx="1" fill="currentColor" fillOpacity="0.4" />
  </svg>
);

const ReceiptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z" fill="currentColor" fillOpacity="0.2" />
    <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const benefits = [
  {
    icon: PiggyBankIcon,
    title: "Reduce Bills by 70-90%",
    description: "Significantly lower your electricity costs from day one",
  },
  {
    icon: TrendingUpIcon,
    title: "3-5 Year ROI",
    description: "Fast return on investment with government subsidies",
  },
  {
    icon: BatteryIcon,
    title: "25+ Years Performance",
    description: "Reliable energy generation for decades",
  },
  {
    icon: ReceiptIcon,
    title: "Government Subsidies",
    description: "Up to ₹78,000 subsidy + tax depreciation benefits",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden bg-secondary" ref={ref} aria-labelledby="benefits-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Solar Benefits
          </span>
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Benefits of Going Solar
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Invest in clean energy, save on electricity bills
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <motion.div
                className="h-full p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card border border-border text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-foreground mb-1 sm:mb-2 lg:mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{benefit.description}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
