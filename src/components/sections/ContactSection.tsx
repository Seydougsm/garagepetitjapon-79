
import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
