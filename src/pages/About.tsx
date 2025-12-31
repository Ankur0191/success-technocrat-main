import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SEOHead from "@/components/seo/SEOHead";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Package,
  Headphones,
  DollarSign,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import aboutStory from "@/assets/about-story.jpg";
import heroAbout from "@/assets/hero-about.jpg";

// --- IMPORT SHARED DATA ---
import { allPartners } from "@/data/partners";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // --- PREPARE DATA FOR TWO ROWS ---
  
  // Row 1: Solar & Finance
  const row1Data = allPartners.filter(
    (p) => p.category === "Solar Partner" || p.category === "Tech & Finance"
  );

  // Row 2: Inverter & BOS
  const row2Data = allPartners.filter(
    (p) => p.category === "Inverter Partner" || p.category === "BOS Partner"
  );

  // Triple the lists for smooth infinite looping
  const marqueeList1 = [...row1Data, ...row1Data, ...row1Data];
  const marqueeList2 = [...row2Data, ...row2Data, ...row2Data];

  const timeline = [
    { year: "2017", title: "Company Founded", description: "Success Technocrat established in Vadodara, Gujarat" },
    { year: "2018", title: "First Major Project", description: "Completed 50kW commercial installation" },
    { year: "2019", title: "Commercial Expansion", description: "100+ residential projects completed" },
    { year: "2020", title: "Strategic Partnerships", description: "Partnership with Novergy & EFL" },
    { year: "2022", title: "Major Milestone", description: "Crossed 100 projects, expanded to 10+ states" },
    { year: "2023", title: "ISO Certification", description: "ISO 9001 & 14001 certification obtained" },
    { year: "2024", title: "Pan-India Operations", description: "500+ projects delivered successfully" },
  ];

  const values = [
    { icon: Target, title: "Our Mission", description: "To provide world-class clean energy solutions at affordable costs by adopting emerging technologies and innovative products." },
    { icon: Eye, title: "Our Vision", description: "To be recognized as a leader in renewable energy solutions across India, exceeding customer expectations through continuous improvement." },
    { icon: Heart, title: "Our Values", description: "Quality, Innovation, Sustainability, Customer-first approach, and Integrity in all our dealings." },
  ];

  const differentiators = [
    { icon: ShieldCheck, title: "Quality Components", points: ["Partnership with Novergy Solar", "Premium grade materials", "International standards"] },
    { icon: Users, title: "Experienced Team", points: ["10+ years industry experience", "Certified solar engineers", "Continuous training"] },
    { icon: Package, title: "End-to-End Service", points: ["Design to commissioning", "Single point of contact", "Turnkey solutions"] },
    { icon: Headphones, title: "Post-Installation Support", points: ["24/7 customer support", "Regular maintenance", "Performance monitoring"] },
    { icon: DollarSign, title: "Competitive Pricing", points: ["Best value for money", "Transparent quotations", "No hidden costs"] },
    { icon: Clock, title: "Timely Delivery", points: ["Committed timelines", "100% on-time record", "Fast installation"] },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Us - Success Technocrat | Leading Solar Energy Company"
        description="Learn about Success Technocrat, Gujarat's leading solar energy company since 2017. ISO certified, 500+ projects, pan-India operations."
        keywords="about Success Technocrat, solar company Gujarat, renewable energy India"
        canonicalUrl="https://successtechnocrat.com/about"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Solar Installation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <nav className="flex justify-center gap-2 text-sm text-white/70 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Success Technocrat
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Powering India's transition to clean energy since 2017
            </p>
          </motion.div>
        </div>
      </section>

      <main ref={ref}>
        {/* Company Overview */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Story</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">We're the #1 Solar Energy Provider</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in October 2017, Success Technocrat is a leading EPC company specializing in renewable energy technology. Our team of experts has spent years studying renewable energy solutions.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With a presence across India, we serve residential, commercial, and industrial clients with customized solar solutions.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Founded", value: "2017" },
                    { label: "Team Size", value: "25+" },
                    { label: "States", value: "28+" },
                    { label: "Certified", value: "ISO" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-secondary">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img src={aboutStory} alt="Success Technocrat Team" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Journey</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Milestones That Define Us</h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="p-6 rounded-xl bg-card border border-border inline-block">
                        <div className="text-primary font-bold text-lg mb-1">{item.year}</div>
                        <div className="font-semibold text-foreground mb-1">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary fill-primary/20" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Why Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary fill-primary/20" />
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTNERS SECTION (TWO ROWS MARQUEE) --- */}
        <section className="section-padding bg-background overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Ecosystem
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Trusted by Industry Leaders
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                We collaborate with the world's best technology and financial partners to deliver superior solar solutions.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              
              {/* ROW 1: Solar, Tech & Finance (Scrolls Left) */}
              <div className="relative w-full flex overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
                
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
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
                
                <motion.div
                  className="flex gap-6 items-center"
                  initial={{ x: "-50%" }}
                  animate={{ x: "0%" }} // Moves in opposite direction
                  transition={{
                    duration: 40,
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
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-deep-blue">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Want to Join Our Solar Revolution?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Get in touch to learn more about our services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="solar" size="lg" asChild>
                <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
              <Button variant="default" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Reusable Partner Card
const PartnerCard = ({ partner }: { partner: any }) => {
  return (
    <div className="flex-shrink-0 w-[200px] bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
      <div className="h-12 w-full flex items-center justify-center overflow-hidden">
        <img
          src={partner.logo} 
          alt={partner.name}
          className="h-full w-auto object-contain transition-all duration-300"
        />
      </div>
      <div className="text-center">
        <h4 className="font-semibold text-foreground text-sm leading-tight">{partner.name}</h4>
        <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/5 px-2 py-1 rounded-sm mt-1 inline-block">
          {partner.category}
        </span>
      </div>
    </div>
  );
};

export default About;