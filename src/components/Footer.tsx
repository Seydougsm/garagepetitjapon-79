
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number.replace(/\+|\s/g, '')}`, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=47M2+8WF,Boulevard+Du+Mono,Lomé,Togo', '_blank');
  };

  const footerLinks = [
    { to: "/", label: "Accueil" },
    { to: "/services", label: "Services" },
    { to: "/boutique", label: "Boutique" },
    { to: "/galerie", label: "Galerie" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  const phoneNumbers = ["+228 90 01 05 44", "+228 79 70 10 00", "+228 99 41 02 06"];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-green-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Restez informé de nos actualités
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Recevez nos dernières offres et conseils d'entretien
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 p-4 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-white/20"
              />
              <Button size="lg" variant="secondary" className="group">
                S'inscrire
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* GARAGE PETIT JAPON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-primary font-bold text-2xl mb-4">GARAGE PETIT JAPON</h3>
              <p className="text-gray-300 mb-6 text-lg">
                "Le spécialiste des grosses cylindrées depuis 15 ans"
              </p>
              <p className="text-gray-400 mb-6">
                Votre partenaire de confiance pour l'entretien et la réparation de vos motos. 
                Une équipe passionnée à votre service.
              </p>
              
              <div className="space-y-4">
                <motion.button 
                  whileHover={{ x: 5 }}
                  onClick={handleMapClick}
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>47M2+8WF, Boulevard Du Mono, Lomé - Togo</span>
                </motion.button>
                
                <div className="space-y-2">
                  {phoneNumbers.map((phone, index) => (
                    <motion.button
                      key={phone}
                      whileHover={{ x: 5 }}
                      onClick={() => handleWhatsAppClick(phone)}
                      className="flex items-center gap-3 hover:text-primary transition-colors group w-full"
                    >
                      <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>{phone}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-6">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-xl mb-6">Suivez-nous</h3>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Horaires d'ouverture</h4>
                <div className="text-gray-400 space-y-1">
                  <p>Lundi - Vendredi: 8h - 18h</p>
                  <p>Samedi: 8h - 16h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <p>© 2025 GARAGE PETIT JAPON. Tous droits réservés.</p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>à Lomé, Togo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
