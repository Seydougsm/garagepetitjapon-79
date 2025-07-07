
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  Battery, 
  Scissors, 
  Gauge, 
  Shield,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "mecanique",
    icon: <Wrench className="w-8 h-8" />,
    title: "Mécanique Générale",
    description: "Expertise complète pour tous vos besoins mécaniques",
    image: "/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png",
    details: [
      { name: "Révision complète", desc: "Contrôle intégral de tous les systèmes" },
      { name: "Réglage moteur", desc: "Optimisation des performances moteur" },
      { name: "Changement filtres", desc: "Remplacement filtres air, huile, carburant" },
      { name: "Vidange professionnelle", desc: "Huile haute qualité adaptée à votre moto" },
      { name: "Boîte de vitesses", desc: "Réparation et entretien transmission" }
    ]
  },
  {
    id: "diagnostic",
    icon: <Settings className="w-8 h-8" />,
    title: "Diagnostic Électronique",
    description: "Analyse poussée des systèmes électroniques",
    image: "/lovable-uploads/21b4100a-3af7-41cc-94c4-16e7224a3176.png",
    details: [
      { name: "Diagnostic complet", desc: "Scan de tous les codes d'erreur" },
      { name: "Reprogrammation ECU", desc: "Mise à jour des paramètres moteur" },
      { name: "Système électrique", desc: "Réparation circuits et composants" },
      { name: "Accessoires électroniques", desc: "Installation GPS, alarmes, éclairage" },
      { name: "Mise à jour logiciel", desc: "Dernières versions constructeur" }
    ]
  },
  {
    id: "electrique",
    icon: <Battery className="w-8 h-8" />,
    title: "Système Électrique",
    description: "Maintenance électrique complète",
    image: "/lovable-uploads/0451645d-ad57-4fb6-85e1-6d300e2c13c4.png",
    details: [
      { name: "Batterie", desc: "Test, charge et remplacement batterie" },
      { name: "Système de charge", desc: "Alternateur et régulateur" },
      { name: "Éclairage", desc: "Phares, feux, clignotants LED" },
      { name: "Démarreur", desc: "Réparation et remplacement" },
      { name: "Faisceau électrique", desc: "Diagnostic et réparation câblage" }
    ]
  },
  {
    id: "carrosserie",
    icon: <Scissors className="w-8 h-8" />,
    title: "Carrosserie & Esthétique",
    description: "Personnalisation et réparation esthétique",
    image: "/lovable-uploads/3a142725-ac1b-43ac-b27f-eb37921a6bcb.png",
    details: [
      { name: "Peinture professionnelle", desc: "Cabine de peinture équipée" },
      { name: "Débosselage", desc: "Réparation carrosserie sans peinture" },
      { name: "Polissage", desc: "Lustrage et protection peinture" },
      { name: "Traitement anticorrosion", desc: "Protection longue durée" },
      { name: "Customisation", desc: "Personnalisation selon vos goûts" }
    ]
  },
  {
    id: "performance",
    icon: <Gauge className="w-8 h-8" />,
    title: "Optimisation Performance",
    description: "Amélioration des performances de votre machine",
    image: "/lovable-uploads/21b4100a-3af7-41cc-94c4-16e7224a3176.png",
    details: [
      { name: "Réglage injection", desc: "Cartographie moteur optimisée" },
      { name: "Échappement sport", desc: "Installation systèmes haute performance" },
      { name: "Filtration haute performance", desc: "Filtres à air sport K&N" },
      { name: "Suspension", desc: "Réglage et upgrade suspension" },
      { name: "Freinage", desc: "Disques et plaquettes performance" }
    ]
  },
  {
    id: "preventif",
    icon: <Shield className="w-8 h-8" />,
    title: "Entretien Préventif",
    description: "Maintenance régulière pour éviter les pannes",
    image: "/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png",
    details: [
      { name: "Contrôle périodique", desc: "Check-up complet selon planning" },
      { name: "Graissage", desc: "Lubrification points critiques" },
      { name: "Équilibrage roues", desc: "Géométrie et équilibrage" },
      { name: "Freins", desc: "Contrôle et réglage système freinage" },
      { name: "Chaîne transmission", desc: "Tension et lubrification" }
    ]
  }
];

const DetailedServicesSection = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open("https://wa.me/22890010544?text=Bonjour,%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+22890010544", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Découvrez en détail tous nos services professionnels pour votre moto
          </p>
          
          {/* Boutons d'action rapide */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg shadow-lg group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Contactez-nous sur WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={handleCall}
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg group"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Appelez maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="mb-2 text-primary bg-white/20 backdrop-blur-sm p-2 rounded-lg inline-block"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={service.id} className="border-none">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                      Voir les détails
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {service.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{detail.name}</h4>
                              <p className="text-gray-600 text-sm">{detail.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                        
                        <div className="pt-4 border-t">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                              onClick={handleWhatsApp}
                              className="bg-[#25D366] hover:bg-[#128C7E] text-white flex-1 group"
                            >
                              <MessageCircle className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                              WhatsApp
                            </Button>
                            <Button 
                              onClick={handleCall}
                              variant="outline" 
                              className="flex-1 group"
                            >
                              <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                              Appeler
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTA finale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary via-green-600 to-primary rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRoMjBjMiAwIDQgMiA0IDR2MjBjMCAyLTIgNC00IDRIMzBjLTIgMC00LTItNC00VjM0eiIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Votre Moto Mérite le Meilleur !
            </h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Confiez votre passion à nos experts. Devis gratuit et conseil personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg shadow-2xl group"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Devis WhatsApp Gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={handleCall}
                  variant="secondary"
                  className="px-8 py-4 text-lg shadow-2xl group"
                >
                  <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Urgence : Appelez-nous
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
