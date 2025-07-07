
import { Link } from "react-router-dom";
import { Phone, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
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
  );
};

export default FinalCTASection;
