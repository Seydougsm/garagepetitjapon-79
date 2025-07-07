
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Shield, Star, Phone, MessageCircle, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  type: 'moto' | 'piece';
  featured?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Yamaha YZF-R1",
    description: "Moto sportive haute performance, moteur 1000cc, parfait état",
    category: "Moto Sportive",
    images: ["/lovable-uploads/22318024-04a6-4cb5-8e1d-cd1c8ecdff13.png"],
    type: 'moto',
    featured: true
  },
  {
    id: 2,
    title: "Honda CBR1000RR",
    description: "Superbike de course, technologie avancée, performance exceptionnelle",
    category: "Moto Sportive",
    images: ["/lovable-uploads/3aede12d-c8e4-4396-b5cb-ff3144a3b030.png"],
    type: 'moto',
    featured: true
  },
  {
    id: 3,
    title: "Kawasaki Ninja ZX-10R",
    description: "Moto de piste, aérodynamique optimisée, puissance maximale",
    category: "Moto Sportive",
    images: ["/lovable-uploads/360ec007-5442-4ced-992e-ad200f4095aa.png"],
    type: 'moto'
  },
  {
    id: 4,
    title: "Plaquettes de Frein Racing",
    description: "Plaquettes haute performance pour freinage intensif",
    category: "Freinage",
    images: ["/lovable-uploads/1e42ff7b-309f-417a-bf72-8396bd7d69af.png"],
    type: 'piece'
  },
  {
    id: 5,
    title: "Pneus Sport Michelin",
    description: "Pneus haute adhérence pour motos sportives",
    category: "Pneumatiques",
    images: ["/lovable-uploads/06e77160-d9a5-4391-a5cd-2fe8d4274add.png"],
    type: 'piece'
  },
  {
    id: 6,
    title: "Kit Chaîne Renforcée",
    description: "Chaîne et pignons haute résistance pour grosses cylindrées",
    category: "Transmission",
    images: ["/lovable-uploads/78548c65-1594-4bd8-909e-e868be4e4e8c.png"],
    type: 'piece'
  },
  {
    id: 7,
    title: "Suzuki GSX-R1000",
    description: "Moto de course, châssis aluminium, performance pure",
    category: "Moto Sportive",
    images: ["/lovable-uploads/3861c29b-0424-4f72-ab1c-fae1026de077.png"],
    type: 'moto'
  },
  {
    id: 8,
    title: "Amortisseurs Öhlins",
    description: "Suspensions premium pour performance et confort",
    category: "Suspension",
    images: ["/lovable-uploads/8ed43a06-a59f-4936-bafc-e957747b0ab9.png"],
    type: 'piece'
  }
];

const Boutique = () => {
  const [filter, setFilter] = useState<'all' | 'moto' | 'piece'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product => 
    filter === 'all' || product.type === filter
  );

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Bonjour, je suis intéressé par ${product.title}. Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/22890010544?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallOrder = () => {
    window.open("tel:+22890010544", "_self");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Notre Boutique
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez notre sélection de motos haute performance et pièces détachées premium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Voir les Produits
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleCallOrder}
              >
                <Phone className="mr-2 h-5 w-5" />
                Nous Appeler
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className="flex-1 sm:flex-none"
              >
                Tous les Produits
              </Button>
              <Button
                variant={filter === 'moto' ? 'default' : 'outline'}
                onClick={() => setFilter('moto')}
                className="flex-1 sm:flex-none"
              >
                Motos
              </Button>
              <Button
                variant={filter === 'piece' ? 'default' : 'outline'}
                onClick={() => setFilter('piece')}
                className="flex-1 sm:flex-none"
              >
                Pièces Détachées
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Produits Premium
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sélection exclusive de motos haute performance et pièces détachées de qualité professionnelle
            </p>
          </motion.div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={viewMode === 'list' ? 'w-full' : ''}
              >
                <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : 'h-full'
                }`}>
                  {product.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-red-500 hover:bg-red-600">
                      Featured
                    </Badge>
                  )}
                  
                  <div className={`relative overflow-hidden group ${
                    viewMode === 'list' ? 'md:w-1/3' : 'aspect-square'
                  }`}>
                    {product.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`${product.title} - Image ${imageIndex + 1}`}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          imageIndex === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 absolute inset-0'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <Badge variant={product.type === 'moto' ? 'default' : 'outline'} className="text-xs">
                          {product.type === 'moto' ? 'Moto' : 'Pièce'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl">{product.title}</CardTitle>
                      <CardDescription className="text-sm md:text-base">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardFooter className="pt-0 flex flex-col sm:flex-row gap-2">
                      <Button 
                        className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
                        onClick={() => handleWhatsAppOrder(product)}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Commander sur WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleCallOrder}
                        className="flex-1 sm:flex-none"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Appeler
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-xl mb-8">
              Contactez-nous directement ! Nous avons un large stock de pièces et pouvons vous aider à trouver exactement ce dont vous avez besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/22890010544?text=Bonjour, je recherche une pièce spécifique pour ma moto. Pouvez-vous m\'aider ?', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Demande Personnalisée
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleCallOrder}
              >
                <Phone className="mr-2 h-5 w-5" />
                90 01 05 44
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bien plus qu'une boutique, nous vous accompagnons dans tous vos projets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantie Qualité</h3>
              <p className="text-gray-600 mb-4">Tous nos produits sont garantis authentiques et de qualité premium</p>
              <Button variant="outline" size="sm">En savoir plus</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-600 mb-4">Service d'installation professionnel par nos mécaniciens experts</p>
              <Button variant="outline" size="sm">Réserver</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conseil Expert</h3>
              <p className="text-gray-600 mb-4">Conseils personnalisés pour choisir les bonnes pièces</p>
              <Button variant="outline" size="sm">Nous contacter</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Boutique;
