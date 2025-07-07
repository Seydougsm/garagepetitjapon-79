
import { motion } from "framer-motion";
import { Wrench, Clock, Users, Star } from "lucide-react";

const stats = [
  { number: "1000+", label: "Motos réparées", icon: <Wrench className="h-6 w-6" /> },
  { number: "15+", label: "Années d'expérience", icon: <Clock className="h-6 w-6" /> },
  { number: "500+", label: "Clients satisfaits", icon: <Users className="h-6 w-6" /> },
  { number: "99%", label: "Taux de satisfaction", icon: <Star className="h-6 w-6" /> }
];

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
