import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Duotone style icons as SVG components
const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 14L7 22L12 19L17 22L15 14" fill="currentColor" fillOpacity="0.2" />
    <path d="M9 14L7 22L12 19L17 22L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FileCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity="0.2" />
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="m9 15 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="9" y1="6" x2="9" y2="6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="15" y1="6" x2="15" y2="6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="9" y1="10" x2="9" y2="10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="15" y1="10" x2="15" y2="10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="9" y1="14" x2="9" y2="14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="15" y1="14" x2="15" y2="14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 22v-4h6v4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management", icon: AwardIcon },
  { name: "ISO 14001:2015", description: "Environmental Management", icon: ShieldCheckIcon },
  { name: "MNRE Registered", description: "Govt. Approved Vendor", icon: FileCheckIcon },
  { name: "GEDA Approved", description: "State Certified Installer", icon: BuildingIcon },
  { name: "Electrical License", description: "Licensed Contractor", icon: ShieldCheckIcon },
  { name: "Novergy Partner", description: "Authorized Dealer", icon: AwardIcon },
  { name: "EFL Empaneled", description: "Finance Partner", icon: FileCheckIcon },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="container-custom mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">Certified & Authorized</h3>
          <p className="text-muted-foreground">Quality assured through industry certifications</p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <cert.icon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold text-foreground whitespace-nowrap">{cert.name}</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">{cert.description}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
