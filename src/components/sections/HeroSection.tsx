
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Settings, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <ImageCarousel />
      <motion.div 
        style={{ y }}
        className="container-custom h-full flex flex-col items-center justify-center text-white relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="heading-xl text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Expertise mécanique et accessoires premium pour grosses motos
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto"
          >
            Le spécialiste des grosses cylindrées à Lomé - Votre partenaire de confiance depuis 15 ans
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="group transition-all duration-300 hover:scale-105 hover:shadow-2xl" asChild>
              <Link to="/contact" className="gap-2">
                <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Prendre rendez-vous maintenant
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Link to="/services" className="gap-2">
                <Settings className="h-5 w-5" />
                Découvrir nos services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm mb-4 opacity-80">Découvrez notre expertise</p>
            <motion.button
              onClick={() => scrollToSection('stats')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
