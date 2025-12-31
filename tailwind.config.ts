import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        // Custom brand colors - Green Schema
        "vibrant-green": "hsl(var(--vibrant-green))",
        "bright-green": "hsl(var(--bright-green))",
        "lime-green": "hsl(var(--lime-green))",
        "active-green": "hsl(var(--active-green))",
        "solar-yellow": "hsl(var(--solar-yellow))",
        "green-border": "hsl(var(--green-border))",
        "light-green-tint": "hsl(var(--light-green-tint))",
        "soft-gray": "hsl(var(--soft-gray))",
        "charcoal": "hsl(var(--charcoal))",
        "dark-gray": "hsl(var(--dark-gray))",
        "medium-gray": "hsl(var(--medium-gray))",
        // Legacy aliases for backward compatibility
        "solar-orange": "hsl(var(--solar-orange))",
        "solar-orange-light": "hsl(var(--solar-orange-light))",
        "solar-orange-dark": "hsl(var(--solar-orange-dark))",
        "amber-gold": "hsl(var(--amber-gold))",
        "amber-gold-light": "hsl(var(--amber-gold-light))",
        "deep-charcoal": "hsl(var(--deep-charcoal))",
        "deep-charcoal-light": "hsl(var(--deep-charcoal-light))",
        "warm-gray": "hsl(var(--warm-gray))",
        "cream-white": "hsl(var(--cream-white))",
        "deep-blue": "hsl(var(--deep-charcoal))",
        "deep-blue-light": "hsl(var(--deep-charcoal-light))",
        "electric-green": "hsl(var(--success))",
        "slate-gray": "hsl(var(--warm-gray))",
        "solar-gold": "hsl(var(--amber-gold))",
        "solar-gold-light": "hsl(var(--amber-gold-light))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'glow': '0 0 40px hsl(122 39% 49% / 0.25)',
        'glow-lg': '0 0 60px hsl(122 39% 49% / 0.35)',
        'glow-green': '0 0 40px hsl(122 39% 49% / 0.3)',
        'glow-amber': '0 0 40px hsl(45 100% 51% / 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(122 39% 49% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(122 39% 49% / 0.5)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "ken-burns": "ken-burns 20s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;