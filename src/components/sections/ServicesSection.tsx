
import { Link } from "react-router-dom";
import { Wrench, ShoppingBag, Settings, Star, ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Réparation & Entretien",
    description: "Service complet pour vos grosses motos",
    icon: <Wrench className="h-8 w-8" />,
    image: "/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png",
    features: ["Diagnostic complet", "Réparations expertes", "Garantie qualité"]
  },
  {
    id: 2,
    title: "Vente d'Accessoires",
    description: "Large gamme de pièces et accessoires",
    icon: <ShoppingBag className="h-8 w-8" />,
    image: "/lovable-uploads/0451645d-ad57-4fb6-85e1-6d300e2c13c4.png",
    features: ["Pièces d'origine", "Accessoires premium", "Livraison rapide"]
  },
  {
    id: 3,
    title: "Diagnostic",
    description: "Analyse complète de votre moto",
    icon: <Settings className="h-8 w-8" />,
    image: "/lovable-uploads/21b4100a-3af7-41cc-94c4-16e7224a3176.png",
    features: ["Équipement moderne", "Analyse précise", "Rapport détaillé"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Nos Services Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise reconnue pour tous vos besoins en mécanique moto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-primary mb-6 flex justify-center"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <Star className="h-4 w-4 text-yellow-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                <Link to="/services">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'une intervention urgente ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe d'experts est disponible pour vous aider immédiatement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Appeler maintenant
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
              <Calendar className="mr-2 h-5 w-5" />
              Réserver en ligne
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
