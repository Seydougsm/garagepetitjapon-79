
import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
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
  ];

  return (
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
          {reasons.map((item, index) => (
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
  );
};

export default WhyChooseUsSection;
