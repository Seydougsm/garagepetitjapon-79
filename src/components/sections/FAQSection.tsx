
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels types de motos réparez-vous ?",
    answer: "Nous sommes spécialisés dans les grosses cylindrées de toutes marques : Yamaha, Honda, Suzuki, Kawasaki, BMW, Ducati, Harley-Davidson, etc. Notre expertise couvre les motos sportives, touring, roadster et custom."
  },
  {
    question: "Proposez-vous un service de diagnostic gratuit ?",
    answer: "Oui ! Nous offrons un diagnostic initial gratuit pour évaluer l'état de votre moto. Ce service inclut un contrôle visuel et un test de base pour identifier les problèmes potentiels."
  },
  {
    question: "Combien de temps prend une réparation ?",
    answer: "Le délai dépend de la complexité de l'intervention. Une révision standard prend 1-2 jours, tandis qu'une réparation complexe peut nécessiter 3-7 jours. Nous vous informons toujours du délai avant de commencer."
  },
  {
    question: "Utilisez-vous des pièces d'origine ?",
    answer: "Nous privilégions les pièces d'origine constructeur pour garantir la qualité et la durabilité. Nous proposons aussi des alternatives de qualité équivalente selon votre budget."
  },
  {
    question: "Offrez-vous une garantie sur vos réparations ?",
    answer: "Absolument ! Toutes nos interventions sont garanties 6 mois pièces et main d'œuvre. Pour les pièces d'origine, nous appliquons la garantie constructeur."
  },
  {
    question: "Puis-je avoir un devis avant la réparation ?",
    answer: "Bien sûr ! Après diagnostic, nous vous fournissons un devis détaillé avant toute intervention. Aucune réparation n'est effectuée sans votre accord préalable."
  },
  {
    question: "Acceptez-vous les paiements échelonnés ?",
    answer: "Oui, nous proposons des facilités de paiement pour les grosses réparations. Contactez-nous pour discuter des modalités adaptées à votre situation."
  },
  {
    question: "Proposez-vous un service de dépannage ?",
    answer: "Nous proposons un service de remorquage dans un rayon de 20km autour de Lomé. Appelez-nous en cas de panne pour organiser le transport de votre moto."
  }
];

const FAQSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/22890010544?text=Bonjour,%20j'ai%20une%20question%20concernant%20vos%20services", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+22890010544", "_self");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-gray-50 rounded-2xl px-6 py-2 border-none shadow-sm hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 pb-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour répondre à toutes vos questions personnalisées
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg shadow-lg group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Posez votre Question
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={handleCall}
                variant="secondary"
                className="px-8 py-4 text-lg shadow-lg group"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Appelez-nous Directement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
