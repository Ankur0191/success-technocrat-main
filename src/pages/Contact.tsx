import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SEOHead from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Building,
  User,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import heroContact from "@/assets/hero-contact.jpg";

const NOCODEFORM_URL = "https://nocodeform.io/f/6952d084ca9b87c35cac786e";


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(NOCODEFORM_URL, {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 931-635-1322",
      href: "tel:+919316351322",
    },
    {
      icon: Mail,
      title: "Email",
      value: "sales@successtechnocrat.com",
      href: "mailto:sales@successtechnocrat.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Sat: 9AM - 6PM",
      href: null,
    },
  ];

const offices = [
  {
    title: "Registered Office",
    city: "Vadodara",
    address:
      "Darshanam Crossroad, Second Floor 224-225, Soma Talav Char Rasta, Vadodara 390025",
  },
  {
    title: "Branch Office",
    city: "Agra",
    address:
      "UG 5,6,7,8 Ganesh Plaza, Bye Pass Road, Sultanganj Ki Puliya, Agra 282004",
  },
];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us - Success Technocrat | Get Free Solar Quote"
        description="Contact Success Technocrat for a free solar consultation and site survey. Call +91 931-635-1322 or email us. Offices in Vadodara and Bangalore."
        keywords="contact solar company, solar installation quote, free solar consultation, Success Technocrat contact"
        canonicalUrl="https://successtechnocrat.com/contact"
      />
      <Header />
      
      {/* Hero - Dark transparent with image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroContact} 
            alt="Solar Installation Team" 
            className="w-full h-full object-cover"
          />
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
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to start your solar journey? Contact us for a free consultation and site survey.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="section-padding bg-background" ref={ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary fill-primary/20" />
                        <Input
                          name="name"
                          required
                          placeholder="John Doe"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary fill-primary/20" />
                        <Input
                          name="phone"
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary fill-primary/20" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com (optional)"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Property Type
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary fill-primary/20" />
                      <select 
                        name="property_type"
                        className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-foreground"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-primary fill-primary/20" />
                      <Textarea
                        name="message"
                        placeholder="Tell us about your solar requirements..."
                        className="pl-10 min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="solar" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Quick Contact</h3>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-colors ${
                      item.href ? "hover:border-primary/50 cursor-pointer" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary fill-primary/20" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      <div className="font-semibold text-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Our Office</h3>
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary fill-primary/20" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{office.title}</div>
                        <div className="text-primary text-sm mb-2">{office.city}</div>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-4">Why Contact Us?</h4>
                <ul className="space-y-3">
                  {[
                    "Free consultation & site survey",
                    "No obligation quotes",
                    "Expert advice from certified engineers",
                    "Response within 24 hours",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;