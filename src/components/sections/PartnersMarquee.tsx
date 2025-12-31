import React from "react";
import { motion } from "framer-motion";

// --- IMAGE IMPORTS ---
import adaniLogo from "@/assets/partners/adani.png";
import waareeLogo from "@/assets/partners/waaree.png";
import emmveeLogo from "@/assets/partners/emmvee.png";
import solarYaanLogo from "@/assets/partners/solaryaan.png";
import havellsLogo from "@/assets/partners/havells.png";
import sungrowLogo from "@/assets/partners/sungrow.png";
import ksolarLogo from "@/assets/partners/ksolar.png";
import polycabLogo from "@/assets/partners/polycab.png";
import schneiderLogo from "@/assets/partners/schneider.png";
import legrandLogo from "@/assets/partners/legrand.png";
import keiLogo from "@/assets/partners/kei.png";
import finolexLogo from "@/assets/partners/finolex.png";
import abbLogo from "@/assets/partners/abb.png";
import lntLogo from "@/assets/partners/lnt.png";
import siemensLogo from "@/assets/partners/siemens.png";
import aeremLogo from "@/assets/partners/aerem.png";
import bajajLogo from "@/assets/partners/bajaj.png";

// --- DATA CONFIGURATION ---

const partnerCategories = [
  {
    title: "Solar Partner",
    partners: [
      { name: "Adani Solar", logo: adaniLogo },
      { name: "Waaree", logo: waareeLogo },
      { name: "Emmvee", logo: emmveeLogo },
    ],
  },
  {
    title: "Inverter Partner",
    partners: [
      { name: "Solar YAAN", logo: solarYaanLogo },
      { name: "Havells", logo: havellsLogo },
      { name: "Sungrow", logo: sungrowLogo },
      { name: "KSolar", logo: ksolarLogo },
    ],
  },
  {
    title: "BOS Partner",
    partners: [
      { name: "Polycab", logo: polycabLogo },
      { name: "Schneider", logo: schneiderLogo },
      { name: "Legrand", logo: legrandLogo },
      { name: "KEI", logo: keiLogo },
      { name: "Finolex", logo: finolexLogo },
      { name: "ABB", logo: abbLogo },
      { name: "L&T", logo: lntLogo },
      { name: "Siemens", logo: siemensLogo },
    ],
  },
  {
    title: "Tech & Finance",
    partners: [
      { name: "AEREM", logo: aeremLogo },
      { name: "Bajaj Finserv", logo: bajajLogo },
    ],
  },
];

// 1. Flatten all partners first
const allPartners = partnerCategories.flatMap((category) =>
  category.partners.map((partner) => ({
    ...partner,
    category: category.title,
  }))
);

// 2. Filter into Two Lists
const row1Data = allPartners.filter(
  (p) => p.category === "Solar Partner" || p.category === "Tech & Finance"
);

const row2Data = allPartners.filter(
  (p) => p.category === "Inverter Partner" || p.category === "BOS Partner"
);

// --- COMPONENT ---

const PartnersMarquee = () => {
  // Duplicate lists for seamless loop
  const marqueeList1 = [...row1Data, ...row1Data, ...row1Data]; // Tripled for length safety
  const marqueeList2 = [...row2Data, ...row2Data, ...row2Data];

  return (
    <section className="section-padding bg-secondary/30 overflow-hidden py-16">
      <div className="container-custom mb-12 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Ecosystem
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* ROW 1: Solar, Tech & Finance (Scrolls Left) */}
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          
          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeList1.map((partner, index) => (
              <PartnerCard key={`row1-${partner.name}-${index}`} partner={partner} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Inverter & BOS (Scrolls Right) */}
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          
          <motion.div
            className="flex gap-6 items-center"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }} // Moves in opposite direction
            transition={{
              duration: 40, // Slightly slower for contrast
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeList2.map((partner, index) => (
              <PartnerCard key={`row2-${partner.name}-${index}`} partner={partner} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: CARD DESIGN ---

const PartnerCard = ({ partner }: { partner: any }) => {
  return (
    <div className="flex-shrink-0 w-[200px] bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
      {/* Image Container */}
      <div className="h-12 w-full flex items-center justify-center overflow-hidden">
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-full w-auto object-contain transition-all duration-300"
        />
      </div>

      {/* Text Info */}
      <div className="text-center">
        <h4 className="font-semibold text-foreground text-sm leading-tight">
          {partner.name}
        </h4>
        <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/5 px-2 py-1 rounded-sm mt-1 inline-block">
          {partner.category}
        </span>
      </div>
    </div>
  );
};

export default PartnersMarquee;