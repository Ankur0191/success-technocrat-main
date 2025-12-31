import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Duotone style icons as SVG components
const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="6" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 14L7 22L12 19L17 22L15 14" fill="currentColor" fillOpacity="0.2" />
    <path d="M9 14L7 22L12 19L17 22L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 4 14 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.01 12 5C11.09 4.01 12.76 3 14.5 3C17.58 3 20 5.42 20 8.5C20 14 12 21 12 21Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const stats = [
  {
    icon: AwardIcon,
    value: 500,
    suffix: "+",
    label: "Successful Projects",
    description: "Delivered across India",
  },
  {
    icon: ZapIcon,
    value: 8,
    suffix: "MW+",
    label: "Installed Capacity",
    description: "Clean energy generated",
  },
  {
    icon: HeartIcon,
    value: 100,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Happy clients nationwide",
  },
  {
    icon: CalendarIcon,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Of solar excellence",
  },
];

const CountUp = ({ end, suffix, isInView }: { end: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-background relative overflow-hidden" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--solar-gold)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" aria-hidden="true" />
                </div>

                {/* Number */}
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>

                {/* Label */}
                <div className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">{stat.label}</div>

                {/* Description */}
                <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{stat.description}</div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity -z-10" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
