
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Phone, Wrench, ShoppingBag, Calendar, MapPin, Star, Settings, ArrowRight, Zap, Shield, Clock, Users, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const stats = [
  { number: "1000+", label: "Motos réparées", icon: <Wrench className="h-6 w-6" /> },
  { number: "15+", label: "Années d'expérience", icon: <Clock className="h-6 w-6" /> },
  { number: "500+", label: "Clients satisfaits", icon: <Users className="h-6 w-6" /> },
  { number: "99%", label: "Taux de satisfaction", icon: <Star className="h-6 w-6" /> }
];

const reviews = [
  {
    id: 1,
    name: "Kodjo Mensah",
    location: "Lomé, Togo",
    rating: 5,
    comment: "Service exceptionnel ! L'équipe a parfaitement réparé ma moto et les prix sont raisonnables.",
    date: "Mars 2024",
    avatar: "/lovable-uploads/e10b4a98-2601-49a5-a202-dc319707a0c2.png"
  },
  {
    id: 2,
    name: "Ahmed Ouedraogo",
    location: "Ouagadougou, Burkina Faso",
    rating: 5,
    comment: "Professionnalisme remarquable. Je recommande vivement leurs services pour l'entretien des grosses cylindrées.",
    date: "Février 2024",
    avatar: "/lovable-uploads/e10b4a98-2601-49a5-a202-dc319707a0c2.png"
  },
  {
    id: 3,
    name: "Kofi Agbeko",
    location: "Kara, Togo",
    rating: 4,
    comment: "Excellent service après-vente et conseils pertinents pour l'entretien de ma moto.",
    date: "Février 2024",
    avatar: "/lovable-uploads/e10b4a98-2601-49a5-a202-dc319707a0c2.png"
  },
  {
    id: 4,
    name: "Rachid Zinsou",
    location: "Cotonou, Bénin",
    rating: 5,
    comment: "Le meilleur garage de la région pour les grosses motos. Personnel qualifié et prix compétitifs.",
    date: "Janvier 2024",
    avatar: "/lovable-uploads/e10b4a98-2601-49a5-a202-dc319707a0c2.png"
  }
];

const Index = () => {
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Merci pour votre avis !",
      description: "Votre commentaire a été envoyé avec succès.",
    });
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section Enhanced */}
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

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-white/80 mb-3 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-white/90 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Enhanced */}
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

          {/* CTA Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 ans d'expérience au service de votre passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Garantie qualité",
                desc: "Tous nos services sont garantis avec des pièces d'origine"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Intervention rapide",
                desc: "Diagnostic et réparation dans les plus brefs délais"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Équipe experte",
                desc: "Mécaniciens certifiés et passionnés de moto"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-primary mb-6 flex justify-center"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Contactez-nous dès maintenant
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe est prête à vous accompagner pour tous vos besoins
              </p>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Appelez-nous</p>
                    <p className="text-gray-600">90 01 05 44 / 79 70 10 00 / 99 41 02 06</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Notre adresse</p>
                    <p className="text-gray-600">133, Av. de la Libération, Hanoukopé - BP 1364, Lomé - Togo</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/3a142725-ac1b-43ac-b27f-eb37921a6bcb.png"
                  alt="Notre atelier"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section Enhanced */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 500 clients satisfaits nous font confiance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star
                        className={`h-4 w-4 ${
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{review.comment}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all">
                  <Star className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Laisser un avis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] p-0">
                <div className="bg-gradient-to-br from-primary/5 to-green-50 p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Partagez votre expérience</DialogTitle>
                  </DialogHeader>
                </div>
                <form onSubmit={handleReviewSubmit} className="space-y-6 p-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Votre nom</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Votre note</label>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.button
                          key={i}
                          type="button"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        >
                          <Star
                            className={`h-8 w-8 cursor-pointer transition-colors ${
                              i < newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Votre commentaire</label>
                    <textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    Envoyer mon avis
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Prêt à faire confiance aux experts ?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Rejoignez plus de 1000 motards qui nous font confiance pour l'entretien de leur passion
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="secondary" className="group text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transition-all">
                <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Contactez-nous maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-lg px-8 py-4 backdrop-blur-sm">
                <Link to="/boutique" className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6" />
                  Découvrir la boutique
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
