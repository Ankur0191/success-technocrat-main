import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
// Make sure this file exists in your assets folder
import wxLogo from "@/assets/wxWhite.png"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  // UPDATED: All links point to /services since they are cards on one page
  const services = [
    { name: "Residential Solar", href: "/services#residential" },
    { name: "Commercial Solar", href: "/services#commercial" },
    { name: "Industrial Solar", href: "/services#industrial" },
    { name: "Maintenance & AMC", href: "/services#maintenance" },
    { name: "EPC Services", href: "/services#epc" },
  ];

  // UPDATED: Kept only LinkedIn
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/success-technocrat/" },
  ];

  return (
    <footer className="bg-deep-charcoal text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              {/* Logo with White Rounded Square Background (rounded-xl) */}
              <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center p-1.5 overflow-hidden shadow-sm">
                <img 
                  src={logo} 
                  alt="Success Technocrat - Solar EPC Company" 
                  className="h-full w-full object-contain" 
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Leading EPC company specializing in renewable energy solutions across India. 
              10+ years of excellence, 500+ projects delivered.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 touch-manipulation"
                  aria-label={`Follow us on ${social.name}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 sm:mb-6">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-white/70 text-sm">
                  Darshanam Crossroad, Second Floor 224-225, Soma Talav Char Rasta, Vadodara 390025
                </span>
              </div>
              <div>
                <a
                  href="tel:+919316351322"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors touch-manipulation py-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-sm">+91 931-635-1322</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:sales@successtechnocrat.com"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors touch-manipulation py-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-sm break-all">sales@successtechnocrat.com</span>
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Copyright */}
          <p className="text-white/60 text-sm order-3 md:order-1">
            © {currentYear} Success Technocrat. All rights reserved.
          </p>

          

          {/* Powered By Section (Right End Corner) */}
          <a
            href="https://www.wictronix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors order-1 md:order-3"
          >
            <span className="text-xs">Powered by</span>
            <img
              src={wxLogo}
              alt="Wictronix"
              className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;