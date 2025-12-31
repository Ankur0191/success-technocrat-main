import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Page Not Found - Success Technocrat" 
        description="The page you are looking for does not exist." 
        canonicalUrl="https://successtechnocrat.com/404"
      />
      
      <Header />

      <main className="flex-grow flex items-center justify-center relative pt-20 pb-16 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
           <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/5">
              <AlertCircle className="w-12 h-12 text-primary" />
            </div>

            {/* 404 Text */}
            <h1 className="text-8xl md:text-9xl font-bold text-foreground opacity-10 mb-4 select-none">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="solar" size="lg" asChild>
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;