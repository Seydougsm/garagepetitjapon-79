
import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const ReviewsSection = () => {
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const { toast } = useToast();

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Merci pour votre avis !",
      description: "Votre commentaire a été envoyé avec succès.",
    });
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  return (
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
  );
};

export default ReviewsSection;
