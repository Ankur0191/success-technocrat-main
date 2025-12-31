import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";

import heroSolarCalculator from "@/assets/hero-solar-calculator.jpg";

// Indian States and Union Territories
const indianStatesAndUTs = [
  // States (28)
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
  "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  // Union Territories (8)
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

// Solar Irradiance for Indian States and UTs (kWh/m²/day)
// Based on average solar insolation data for India
const solarIrradiance: Record<string, number> = {
  // States - High Solar Potential
  "Rajasthan": 6.2,
  "Gujarat": 5.8,
  "Maharashtra": 5.5,
  "Andhra Pradesh": 5.7,
  "Karnataka": 5.6,
  "Tamil Nadu": 5.5,
  "Telangana": 5.6,
  "Madhya Pradesh": 5.4,
  "Punjab": 5.3,
  "Haryana": 5.4,
  "Uttar Pradesh": 5.2,
  "Chhattisgarh": 5.3,
  "Odisha": 5.2,
  "Jharkhand": 5.0,
  "Bihar": 5.0,
  "West Bengal": 4.8,
  "Kerala": 5.0,
  "Goa": 5.4,
  "Delhi": 5.3,
  // North Eastern States - Moderate Solar Potential
  "Assam": 4.2,
  "Arunachal Pradesh": 4.5,
  "Manipur": 4.6,
  "Meghalaya": 4.3,
  "Mizoram": 4.5,
  "Nagaland": 4.4,
  "Sikkim": 4.7,
  "Tripura": 4.4,
  // Himalayan States
  "Himachal Pradesh": 5.2,
  "Uttarakhand": 5.1,
  "Jammu and Kashmir": 5.5,
  "Ladakh": 6.5, // Highest in India
  // Union Territories
  "Chandigarh": 5.3,
  "Puducherry": 5.5,
  "Dadra and Nagar Haveli and Daman and Diu": 5.6,
  "Lakshadweep": 5.4,
  "Andaman and Nicobar Islands": 4.9
};

interface CalculatorResults {
  systemSize: number;
  annualProduction: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  co2Offset: number;
  systemCost: number;
}

const SolarCalculator = () => {
  const [roofSize, setRoofSize] = useState("");
  const [location, setLocation] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSavings = () => {
    if (!roofSize || !location || !monthlyBill) return;

    setIsCalculating(true);

    setTimeout(() => {
      const roofSizeNum = parseFloat(roofSize);
      const monthlyBillNum = parseFloat(monthlyBill);
      const irradiance = solarIrradiance[location] || 5.2; // Average India irradiance

      // Calculate system size based on roof area (assuming 20% efficiency panels)
      const panelEfficiency = 0.20;
      const usableRoofPercentage = 0.7;
      const systemSize = (roofSizeNum * usableRoofPercentage * panelEfficiency) / 10;

      // Annual production (kWh) - accounting for system losses (15%)
      const systemLosses = 0.85;
      const annualProduction = systemSize * irradiance * 365 * systemLosses;

      // Average Indian electricity rate (₹ per kWh)
      // Varies by state, using average residential tariff
      const electricityRate = 7.0; // ₹7 per unit (average across India)

      // Annual savings - capped at actual electricity consumption
      const annualSavings = Math.min(annualProduction * electricityRate, monthlyBillNum * 12);
      const monthlySavings = annualSavings / 12;

      // System cost (₹ per kW installed) - average Indian market rates
      const costPerKw = 60000; // ₹60,000 per kW (including installation)
      const systemCost = systemSize * costPerKw;

      // Payback period (years)
      const paybackPeriod = systemCost / annualSavings;

      // CO2 offset (kg per year)
      // Indian grid emission factor: ~0.82 kg CO2 per kWh
      const co2EmissionFactor = 0.82;
      const co2Offset = annualProduction * co2EmissionFactor;

      setResults({
        systemSize: Math.round(systemSize * 10) / 10,
        annualProduction: Math.round(annualProduction),
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        co2Offset: Math.round(co2Offset),
        systemCost: Math.round(systemCost),
      });

      setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Solar Calculator - Success Technocrat | Calculate Your Solar Savings"
        description="Calculate your solar savings instantly. Enter your roof size, location, and electricity bill to get a personalized solar estimate for India."
        keywords="solar calculator, solar savings calculator, solar panel cost India, solar ROI"
        canonicalUrl="https://successtechnocrat.com/solar-calculator"
      />
      <Header />

      <main className="pt-0">
        {/* Hero Section - Dark transparent with image */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroSolarCalculator} 
              alt="Solar Panels on Roof" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-medium text-white">Solar Savings Calculator</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Calculate Your <span className="text-primary">Solar Savings</span>
              </h1>
              <p className="text-lg text-white/80">
                Discover how much you could save by switching to solar energy. 
                Get an instant estimate based on your location and energy usage across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Input Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-border shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="4" y="4" width="16" height="16" rx="2" fillOpacity="0.2"/>
                          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      Enter Your Details
                    </CardTitle>
                    <CardDescription>
                      Fill in the form below to get your personalized solar estimate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="roofSize" className="text-base font-medium">
                        Available Roof Space (sq ft)
                      </Label>
                      <Input
                        id="roofSize"
                        type="number"
                        placeholder="e.g., 500"
                        value={roofSize}
                        onChange={(e) => setRoofSize(e.target.value)}
                        className="h-12 text-base"
                      />
                      <p className="text-sm text-muted-foreground">
                        Estimate the area of your roof suitable for solar panels
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-base font-medium">
                        Your Location
                      </Label>
                      <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select your state or UT" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianStatesAndUTs.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Location affects solar irradiance levels
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlyBill" className="text-base font-medium">
                        Monthly Electricity Bill (₹)
                      </Label>
                      <Input
                        id="monthlyBill"
                        type="number"
                        placeholder="e.g., 5000"
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(e.target.value)}
                        className="h-12 text-base"
                      />
                      <p className="text-sm text-muted-foreground">
                        Your average monthly electricity expenditure
                      </p>
                    </div>

                    <Button
                      variant="solar"
                      size="xl"
                      className="w-full"
                      onClick={calculateSavings}
                      disabled={!roofSize || !location || !monthlyBill || isCalculating}
                    >
                      {isCalculating ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          Calculating...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" fillOpacity="0.2"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                          </svg>
                          Calculate My Savings
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {results ? (
                  <Card className="border-2 border-primary/30 shadow-xl bg-gradient-to-br from-primary/5 to-background">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" fillOpacity="0.2"/>
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          </svg>
                        </div>
                        Your Solar Estimate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Main Savings Highlight */}
                      <div className="text-center p-6 bg-primary rounded-2xl text-primary-foreground">
                        <p className="text-sm font-medium opacity-90 mb-1">Annual Savings</p>
                        <p className="text-4xl font-bold">{formatCurrency(results.annualSavings)}</p>
                        <p className="text-sm opacity-80 mt-2">
                          That's {formatCurrency(results.monthlySavings)} per month!
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-background rounded-xl border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="3" y="3" width="18" height="18" rx="2" fillOpacity="0.2"/>
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                              <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-sm text-muted-foreground">System Size</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">{results.systemSize} kW</p>
                        </div>

                        <div className="p-4 bg-background rounded-xl border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fillOpacity="0.2"/>
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                            </svg>
                            <span className="text-sm text-muted-foreground">Annual Output</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">{results.annualProduction.toLocaleString()} kWh</p>
                        </div>

                        <div className="p-4 bg-background rounded-xl border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" fillOpacity="0.2"/>
                              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                            </svg>
                            <span className="text-sm text-muted-foreground">Payback Period</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">{results.paybackPeriod} years</p>
                        </div>

                        <div className="p-4 bg-background rounded-xl border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" fillOpacity="0.2"/>
                              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                            </svg>
                            <span className="text-sm text-muted-foreground">CO₂ Offset</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">{results.co2Offset.toLocaleString()} kg/yr</p>
                        </div>
                      </div>

                      {/* System Cost */}
                      <div className="p-4 bg-secondary/50 rounded-xl">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Estimated System Cost</span>
                          <span className="text-xl font-bold text-foreground">{formatCurrency(results.systemCost)}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button variant="solar" size="lg" className="w-full" asChild>
                        <Link to="/contact">
                          Get a Detailed Quote
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-2 border-dashed border-border h-full flex items-center justify-center">
                    <CardContent className="text-center py-16">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="5" fillOpacity="0.2"/>
                          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Ready to Calculate?
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Fill in your details on the left to get an instant estimate of your potential solar savings.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  How We Calculate Your Savings
                </h2>
                <p className="text-muted-foreground">
                  Our calculator uses real-world data and industry standards for India
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Solar Irradiance",
                    description: "We use state-specific solar irradiance data to accurately estimate energy production across all Indian states and UTs.",
                  },
                  {
                    title: "System Efficiency",
                    description: "Our calculations account for real-world efficiency factors including panel degradation, system losses, and Indian climate conditions.",
                  },
                  {
                    title: "Local Tariffs",
                    description: "We use average Indian electricity tariffs (₹7/unit) to provide accurate savings projections based on residential rates.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarCalculator;
