
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Kofi Mensah",
    location: "Lomé, Togo",
    bike: "Yamaha R1",
    rating: 5,
    text: "Service exceptionnel ! Mon R1 n'avait jamais tourné aussi bien. L'équipe est professionnelle et les délais respectés. Je recommande vivement !",
    image: "/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"
  },
  {
    name: "Ama Koffi",
    location: "Kpalimé, Togo",
    bike: "Honda CBR 1000RR",
    rating: 5,
    text: "Problème électrique résolu rapidement. Diagnostic précis et prix honnête. Mon CBR est comme neuf ! Merci à toute l'équipe.",
    image: "/lovable-uploads/78548c65-1594-4bd8-909e-e868be4e4e8c.png"
  },
  {
    name: "Yao Komi",
    location: "Sokodé, Togo",
    bike: "Kawasaki Z1000",
    rating: 5,
    text: "15 ans d'expérience, ça se sent ! Travail de qualité, conseils avisés. Ma Z1000 a retrouvé toute sa puissance. Parfait !",
    image: "/lovable-uploads/92c9235f-57ee-4142-9e5f-e7ab25a86dfc.png"
  },
  {
    name: "Efua Asante",
    location: "Kara, Togo",
    bike: "BMW S1000RR",
    rating: 5,
    text: "Spécialistes des grosses cylindrées confirmé ! Service premium pour ma BMW. Travail impeccable et suivi personnalisé.",
    image: "/lovable-uploads/b29e0374-bc59-4e9e-abf1-6a59aed922c4.png"
  },
  {
    name: "Kwame Asante",
    location: "Atakpamé, Togo",
    bike: "Ducati Panigale V4",
    rating: 5,
    text: "Révision complète de ma Ducati. Attention aux détails remarquable. Prix transparent et service après-vente au top !",
    image: "/lovable-uploads/d6db9d47-c713-4e67-b5e1-77ed99deced5.png"
  },
  {
    name: "Akosua Osei",
    location: "Dapaong, Togo",
    bike: "Suzuki GSX-R1000",
    rating: 5,
    text: "Dépannage d'urgence impeccable ! Équipe réactive, compétente. Ma GSX-R est repartie parfaitement. Service professionnel.",
    image: "/lovable-uploads/fe266e6c-f042-4d04-8ed0-47b1211aaa8c.png"
  }
];

const TestimonialsSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/22890010544?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20ma%20moto", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+22890010544", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Découvrez pourquoi plus de 500 motards nous recommandent
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9/5</span>
            <span className="text-gray-600 text-lg ml-2">(500+ avis)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-green-600/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-sm text-primary font-semibold">{testimonial.bike}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white flex-1 text-xs group-hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="mr-1 h-3 w-3" />
                    WhatsApp
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={handleCall}
                    variant="outline"
                    className="flex-1 text-xs group-hover:scale-105 transition-transform"
                  >
                    <Phone className="mr-1 h-3 w-3" />
                    Appel
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary via-green-600 to-primary rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Rejoignez Nos Clients Satisfaits !
            </h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Votre satisfaction est notre priorité. Découvrez pourquoi nous sommes le choix n°1 des motards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg shadow-2xl group"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Demandez Votre Devis
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
                  Consultation Gratuite
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

export default TestimonialsSection;
