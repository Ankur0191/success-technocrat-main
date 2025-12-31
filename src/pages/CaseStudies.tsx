import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SEOHead from "@/components/seo/SEOHead";
import CaseStudyModal, { CaseStudyData } from "@/components/CaseStudyModal";

/* Industrial / Commercial Images */
import caseStudy1 from "@/assets/case-study-01.png";
import caseStudy2 from "@/assets/case-study-02.png";
import caseStudy3 from "@/assets/case-study-03.png";
import caseStudy4 from "@/assets/case-study-04.png";
import caseStudy5 from "@/assets/case-study-05.png";
import caseStudy6 from "@/assets/case-study-06.png";
import caseStudy7 from "@/assets/case-study-07.png";

/* Residential Images */
import residential1 from "@/assets/img-residential-1.jpg";
import residential2 from "@/assets/img-residential-2.jpg";
import residential3 from "@/assets/img-residential-3.jpg";

import heroCaseStudies from "@/assets/hero-case-studies.jpg";

/* Categories */
const categories = ["All", "Industrial", "Commercial", "Residential"];

interface ExtendedCaseStudyData extends CaseStudyData {
  category: string;
}

const caseStudies: ExtendedCaseStudyData[] = [
  {
    id: 1,
    title: "Yash Poly Industries",
    category: "Industrial",
    projectSize: "425 kWp",
    panels: "Waaree 560Wp Mono PERC",
    inverter: "SunGrow",
    mountingStructure: "Curved Corrugated Sheet",
    roofType: "Sheet Roof",
    image: caseStudy1,
  },
  {
    id: 2,
    title: "Tushar Trans Equipment",
    category: "Industrial",
    projectSize: "250 kWp",
    panels: "Waaree 570Wp Mono PERC",
    inverter: "SolarYaan",
    mountingStructure: "Ballast + Sheet",
    roofType: "RCC + Sheet",
    image: caseStudy2,
  },
  {
    id: 3,
    title: "SR Engineering",
    category: "Industrial",
    projectSize: "60 kW",
    panels: "Waaree 700Wp",
    inverter: "KSolare",
    mountingStructure: "Flush Mount",
    annualUnits: "1.01 Lakh",
    image: caseStudy3,
  },
  {
    id: 4,
    title: "Elite Decor",
    category: "Commercial",
    projectSize: "40 kW",
    panels: "Adani 595W TopCon",
    inverter: "KSolare",
    mountingStructure: "Flush Mount",
    annualUnits: "67K",
    image: caseStudy4,
  },
  {
    id: 5,
    title: "JS Pharma",
    category: "Industrial",
    projectSize: "180 kW",
    panels: "Waaree 700Wp",
    inverter: "Sungrow",
    mountingStructure: "Flush Mount",
    annualUnits: "3.21 Lakh",
    image: caseStudy5,
  },
  {
    id: 6,
    title: "Supreme Furniture",
    category: "Industrial",
    projectSize: "250 kW",
    panels: "Waaree 540Wp",
    inverter: "KSolare",
    mountingStructure: "Flush Mount",
    annualUnits: "4.45 Lakh",
    image: caseStudy6,
  },
  {
    id: 7,
    title: "Inorbit Mall",
    category: "Commercial",
    projectSize: "500 kW",
    panels: "Waaree 540Wp",
    inverter: "Solaryaan",
    mountingStructure: "GI Elevated",
    annualUnits: "6.11 Lakh",
    image: caseStudy7,
  },

  /* ---------------- Residential Case Studies ---------------- */

  {
    id: 8,
    title: "Kumar Residence",
    category: "Residential",
    projectSize: "10 kW",
    panels: "Waaree 540Wp Mono PERC",
    inverter: "KSolare",
    mountingStructure: "Flush Mount",
    annualUnits: "14,600 Units",
    image: residential1,
  },
  {
    id: 9,
    title: "Sharma Residence",
    category: "Residential",
    projectSize: "8 kW",
    panels: "Adani 595W TopCon",
    inverter: "Sungrow",
    mountingStructure: "Flush Mount",
    annualUnits: "11,500 Units",
    image: residential2,
  },
  {
    id: 10,
    title: "Verma Residence",
    category: "Residential",
    projectSize: "12 kW",
    panels: "Waaree 550Wp",
    inverter: "SolarYaan",
    mountingStructure: "Flush Mount",
    annualUnits: "17,200 Units",
    image: residential3,
  },
  {
    id: 11,
    title: "Mr.Raju Residence",
    category: "Residential",
    projectSize: "9.72 kW",
    panels: "Waaree 540Wp",
    inverter: "SolarYaan",
    mountingStructure: "Flush Mount",
    annualUnits: "17,800 Units",
    image: residential3,
  },
];

const CaseStudies = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Case Studies | Success Technocrat"
        description="Industrial, Commercial & Residential Solar Case Studies"
      />

      <Header />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20">
        <img
          src={heroCaseStudies}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Solar Projects"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl font-bold text-white mb-6"
          >
            Case <span className="text-primary">Studies</span>
          </motion.h1>

          <Button variant="solar" size="lg" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                onViewDetails={() => {
                  setSelectedStudy(study);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <CaseStudyModal
        study={selectedStudy}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

const CaseStudyCard = ({
  study,
  index,
  onViewDetails,
}: {
  study: ExtendedCaseStudyData;
  index: number;
  onViewDetails: () => void;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden bg-card border hover:shadow-xl"
    >
      <div className="relative h-56">
        <img
          src={study.image}
          className="w-full h-full object-cover"
          alt={study.title}
        />
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded">
          <Zap className="inline w-4 h-4 mr-1" />
          {study.projectSize}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Panels: {study.panels}
        </p>

        <Button variant="solar" size="sm" className="w-full" onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
