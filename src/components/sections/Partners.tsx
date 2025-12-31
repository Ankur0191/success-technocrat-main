import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Duotone style icons as SVG components
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="currentColor" fillOpacity="0.2" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M15 3h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Government organization demo logos
const GovtLogo1 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 8L30 14H34V18H36V34H12V18H14V14H18L24 8Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="18" y="22" width="4" height="6" fill="currentColor" fillOpacity="0.4"/>
    <rect x="26" y="22" width="4" height="6" fill="currentColor" fillOpacity="0.4"/>
    <text x="24" y="42" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="bold">MNRE</text>
  </svg>
);

const GovtLogo2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="20" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M24 12L26 18H32L27 22L29 28L24 24L19 28L21 22L16 18H22L24 12Z" fill="currentColor" fillOpacity="0.4"/>
    <text x="24" y="42" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="bold">GEDA</text>
  </svg>
);

const GovtLogo3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 28L24 14L36 28" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="24" cy="22" r="4" fill="currentColor" fillOpacity="0.4"/>
    <text x="24" y="42" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="bold">SECI</text>
  </svg>
);

const GovtLogo4 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="14" width="20" height="16" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M18 18H30M18 22H28M18 26H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <text x="24" y="42" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="bold">BIS</text>
  </svg>
);

const partners = [
  {
    name: "Novergy Solar",
    type: "Technology Partner",
    description: "Premium solar modules and inverters with high efficiency and extended warranties",
    benefits: [
      "High-efficiency panels (>21%)",
      "25-year performance warranty",
      "Made for Indian conditions",
      "Advanced MPPT technology",
    ],
    badge: "Authorized Partner",
    logo: "N",
  },
  {
    name: "Electronica Finance (EFL)",
    type: "Financial Partner",
    description: "Quick and easy financing solutions for your solar projects",
    benefits: [
      "Quick loan approval",
      "Attractive interest rates",
      "Flexible repayment (1-5 years)",
      "Minimal documentation",
    ],
    badge: "Empaneled Installer",
    logo: "E",
  },
];

const govtPartners = [
  { name: "MNRE", fullName: "Ministry of New & Renewable Energy", Logo: GovtLogo1 },
  { name: "GEDA", fullName: "Gujarat Energy Development Agency", Logo: GovtLogo2 },
  { name: "SECI", fullName: "Solar Energy Corporation of India", Logo: GovtLogo3 },
  { name: "BIS", fullName: "Bureau of Indian Standards", Logo: GovtLogo4 },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders
          </p>
        </motion.div>

        {/* Government Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">Government Approved & Registered</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {govtPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <partner.Logo className="w-16 h-16 text-primary mb-3" />
                <span className="text-xs text-muted-foreground text-center">{partner.fullName}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Logo placeholder */}
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {partner.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                      <span className="text-sm text-primary font-medium">{partner.type}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {partner.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{partner.description}</p>

                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-3 h-3 text-primary" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="solar" className="w-full group/btn">
                  Learn More
                  <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
