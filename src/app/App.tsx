import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { BusinessSection } from "./components/BusinessSection";
import { ContactSection } from "./components/ContactSection";
import { MenuDialog } from "./components/MenuDialog";
import { ThemeProvider } from "./components/ThemeProvider";
import { Factory, Utensils, Home } from "lucide-react";
import { motion } from "motion/react";

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SAS Enterprises Gallery Images
  const sasGallery = [
    "https://images.unsplash.com/photo-1740156118334-5ffeb7832eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI3MjM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1767633411248-e8ca80a8fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwZnVlbCUyMGluZHVzdHJ5fGVufDF8fHx8MTc3MjcyMzYyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1669285051019-53287ee2c03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbGx1cmdpY2FsJTIwY29rZXxlbnwxfHx8fDE3NzI3MjM2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1764114441097-6a475eca993d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwc3RlZWx8ZW58MXx8fHwxNzcyNzIzNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1740156118334-5ffeb7832eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI3MjM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1767633411248-e8ca80a8fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwZnVlbCUyMGluZHVzdHJ5fGVufDF8fHx8MTc3MjcyMzYyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  // Laziz Restaurant Gallery Images
  const lazizGallery = [
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwYmlyeWFuaXxlbnwxfHx8fDE3NzI3MjM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5pbmclMjByZXN0YXVyYW50JTIwaW5kaWF8ZW58MXx8fHwxNzcyNzIzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1657706529546-a06c91f5f200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwYmJxJTIwZm9vZHxlbnwxfHx8fDE3NzI3MjM2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1657593088889-5105c637f2a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzcyNjgxNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwYmlyeWFuaXxlbnwxfHx8fDE3NzI3MjM2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1657706529546-a06c91f5f200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwYmJxJTIwZm9vZHxlbnwxfHx8fDE3NzI3MjM2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  // Real Estate Gallery Images
  const realEstateGallery = [
    "https://images.unsplash.com/photo-1689574666545-3f2f9afdf632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI2ODY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1758551472051-168a35343bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaG91c2V8ZW58MXx8fHwxNzcyNzIzNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1656646424715-5c2974c66377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBvZmZpY2V8ZW58MXx8fHwxNzcyNzIzNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1762195804027-04a19d9d3ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHJlc2lkZW50aWFsfGVufDF8fHx8MTc3MjY4OTQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1689574666545-3f2f9afdf632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI2ODY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1758551472051-168a35343bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwaG91c2V8ZW58MXx8fHwxNzcyNzIzNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <HeroSection />

      {/* SAS Enterprises Section */}
      <BusinessSection
        id="sas-enterprises"
        title="SAS Enterprises"
        subtitle="Trusted Coal and Coke Trading Company"
        description="We specialize in supplying high-quality steam coal, metallurgical coke, and foundry coke to steel plants, brick kilns, and manufacturing industries. Based in Hosapete, we ensure timely delivery and competitive pricing with a strong supplier network."
        services={[
          "Steam Coal",
          "Metallurgical Coke",
          "Foundry Coke",
          "Bulk Industrial Fuel Supply",
        ]}
        whyChooseUs={[
          "Assured Quality",
          "Competitive Pricing",
          "Reliable Supply Chain",
          "Timely Delivery",
          "Strong Industry Network",
        ]}
        mission="To provide dependable and high-quality fuel solutions that power industrial growth."
        vision="To become a leading coal and coke trading company in Karnataka."
        galleryImages={sasGallery}
        gradientFrom="from-slate-700"
        gradientTo="to-slate-900"
        icon={<Factory className="text-white" size={36} />}
      />

      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

      {/* Laziz Restaurant Section */}
      <BusinessSection
        id="laziz-restaurant"
        title="Laziz Family Restaurant"
        subtitle="Authentic Taste • Family Dining"
        description="Laziz Family Restaurant offers a welcoming dining experience for families and friends in Hosapete. We serve freshly prepared, hygienic, and flavorful dishes made from quality ingredients. Our comfortable ambiance and excellent service make every visit special."
        services={[
          "Biryani & Traditional Cuisine",
          "BBQ & Grilled Items",
          "Fast Food",
          "Family Dinner Combos",
          "Catering Services",
        ]}
        whyChooseUs={[
          "Hygienic Food Preparation",
          "Fresh Ingredients",
          "Affordable Pricing",
          "Friendly Service",
          "Family-Friendly Atmosphere",
        ]}
        mission="To serve delicious and hygienic food that brings families together."
        vision="To become the most loved family restaurant in Hosapete."
        galleryImages={lazizGallery}
        gradientFrom="from-orange-500"
        gradientTo="to-red-600"
        icon={<Utensils className="text-white" size={36} />}
        extraContent={
          <div className="text-center">
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative block px-8 py-4 text-white text-lg">
                🍽️ View Our Special Menu
              </span>
            </motion.button>
          </div>
        }
      />

      {/* Menu Dialog */}
      <MenuDialog isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

      {/* Real Estate Section */}
      <BusinessSection
        id="real-estate"
        title="Real Estate Services"
        subtitle="Your Trusted Property Partner"
        description="We provide professional real estate services in Hosapete specializing in buying, selling, and renting residential and commercial properties. With strong market knowledge and transparent dealings, we help clients make secure and profitable property decisions."
        services={[
          "Buying & Selling Properties",
          "Residential & Commercial Plots",
          "Rental Services",
          "Investment Consultation",
          "Documentation Assistance",
        ]}
        whyChooseUs={[
          "Honest & Transparent Deals",
          "Verified Listings",
          "Strong Local Network",
          "Client-Focused Approach",
          "End-to-End Support",
        ]}
        mission="To deliver secure and profitable real estate solutions with integrity."
        vision="To be a trusted real estate leader in Hosapete."
        galleryImages={realEstateGallery}
        gradientFrom="from-blue-600"
        gradientTo="to-blue-800"
        icon={<Home className="text-white" size={36} />}
      />

      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-950 dark:bg-black text-white py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2026 Mohammad Arif Ventures. All rights reserved.
          </p>
          <p className="text-slate-500 mt-2">
            SAS Enterprises • Laziz Family Restaurant • Real Estate Services
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
