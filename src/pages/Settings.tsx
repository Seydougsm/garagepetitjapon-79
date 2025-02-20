import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Edit, FileText, ShoppingBag, Image as ImageIcon, BarChart, Users, Settings as SettingsIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Annonce {
  id: number;
  title: string;
  description: string;
  price: string;
  images: string[];
}

interface GalleryImage {
  id: number;
  url: string;
}

interface SiteLogo {
  url: string;
}

const Settings = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>(() => {
    const saved = localStorage.getItem('annonces');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newProduct, setNewProduct] = useState<Partial<Annonce>>({
    images: []
  });
  
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem('galleryImages');
    return saved ? JSON.parse(saved) : [];
  });

  const [siteLogo, setSiteLogo] = useState<SiteLogo>(() => {
    const saved = localStorage.getItem('siteLogo');
    return saved ? JSON.parse(saved) : { url: "/lovable-uploads/e10b4a98-2601-49a5-a202-dc319707a0c2.png" };
  });

  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [showProductDialog, setShowProductDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Annonce | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const stats = [
    { title: "Total Produits", value: annonces.length, icon: ShoppingBag, color: "bg-blue-500" },
    { title: "Vues", value: "1,234", icon: Users, color: "bg-green-500" },
    { title: "Posts", value: "45", icon: FileText, color: "bg-purple-500" },
    { title: "Images", value: galleryImages.length, icon: ImageIcon, color: "bg-orange-500" },
  ];

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.images?.length) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs et ajouter au moins une image",
        variant: "destructive"
      });
      return;
    }

    const product: Annonce = {
      id: Date.now(),
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      images: newProduct.images
    };

    const updatedAnnonces = [...annonces, product];
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    setNewProduct({ images: [] });
    setShowProductDialog(false);
    toast({
      title: "Succès",
      description: "Le produit a été ajouté avec succès"
    });
  };

  const handleEditProduct = () => {
    if (!editingProduct) return;

    const updatedAnnonces = annonces.map(annonce => 
      annonce.id === editingProduct.id ? editingProduct : annonce
    );
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    setEditingProduct(null);
    setShowEditDialog(false);
    toast({
      title: "Succès",
      description: "Le produit a été modifié avec succès"
    });
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedAnnonces = annonces.filter(annonce => annonce.id !== productId);
    setAnnonces(updatedAnnonces);
    localStorage.setItem('annonces', JSON.stringify(updatedAnnonces));
    toast({
      title: "Succès",
      description: "Le produit a été supprimé avec succès"
    });
  };

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewProduct(prev => ({
            ...prev,
            images: [...(prev.images || []), reader.result as string]
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleEditProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && editingProduct) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditingProduct(prev => ({
            ...prev!,
            images: [...prev!.images, reader.result as string]
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImage: GalleryImage = {
            id: Date.now(),
            url: reader.result as string
          };
          const updatedImages = [...galleryImages, newImage];
          setGalleryImages(updatedImages);
          localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
          toast({
            title: "Succès",
            description: "L'image a été ajoutée à la galerie"
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newLogo = { url: reader.result as string };
        setSiteLogo(newLogo);
        localStorage.setItem('siteLogo', JSON.stringify(newLogo));
        toast({
          title: "Succès",
          description: "Le logo a été mis à jour avec succès"
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return (
          <div className="pl-72 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Produits</h2>
              <Dialog open={showProductDialog} onOpenChange={setShowProductDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un produit
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Ajouter un nouveau produit</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom du produit</label>
                      <Input
                        value={newProduct.title || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                        placeholder="Nom du produit"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        value={newProduct.description || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        placeholder="Description du produit"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Prix</label>
                      <Input
                        value={newProduct.price || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        placeholder="Prix"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Images</label>
                      <div 
                        className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer mt-2"
                        onClick={() => document.getElementById('product-images')?.click()}
                      >
                        <Input
                          id="product-images"
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          onChange={handleProductImageUpload}
                        />
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Cliquez pour ajouter des images</p>
                      </div>
                      {newProduct.images && newProduct.images.length > 0 && (
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          {newProduct.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <Button className="w-full" onClick={handleAddProduct}>
                      Ajouter le produit
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {annonces.map((annonce) => (
                <Card key={annonce.id}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex gap-4">
                      <div className="flex gap-2">
                        {annonce.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${annonce.title} - Image ${index + 1}`}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                      <div>
                        <h3 className="font-semibold">{annonce.title}</h3>
                        <p className="text-sm text-gray-600">{annonce.description}</p>
                        <p className="text-primary font-medium mt-1">{annonce.price}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setEditingProduct(annonce);
                          setShowEditDialog(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDeleteProduct(annonce.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Modifier le produit</DialogTitle>
                </DialogHeader>
                {editingProduct && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom du produit</label>
                      <Input
                        value={editingProduct.title}
                        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                        placeholder="Nom du produit"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        value={editingProduct.description}
                        onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                        placeholder="Description du produit"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Prix</label>
                      <Input
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                        placeholder="Prix"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Images</label>
                      <div 
                        className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer mt-2"
                        onClick={() => document.getElementById('edit-product-images')?.click()}
                      >
                        <Input
                          id="edit-product-images"
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          onChange={handleEditProductImageUpload}
                        />
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Cliquez pour ajouter des images</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {editingProduct.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setEditingProduct({
                                ...editingProduct,
                                images: editingProduct.images.filter((_, i) => i !== index)
                              })}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" onClick={handleEditProduct}>
                      Enregistrer les modifications
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        );
      
      case 'gallery':
        return (
          <div className="pl-72 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Galerie</h2>
            </div>
            
            <div>
              <div 
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer"
                onClick={() => document.getElementById('gallery-images')?.click()}
              >
                <Input
                  id="gallery-images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleGalleryImageUpload}
                />
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">Cliquez pour ajouter des images à la galerie</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.url}
                    alt="Gallery image"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="pl-72 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Paramètres</h2>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Logo du site</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={siteLogo.url}
                    alt="Logo actuel"
                    className="h-16 object-contain"
                  />
                  <div>
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById('logo-upload')?.click()}
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Changer le logo
                    </Button>
                    <Input
                      id="logo-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleLogoUpload}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Format recommandé : PNG ou JPG
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="pl-72">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">Tableau de Bord</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{stat.title}</p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Aperçu des Ventes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
                    <BarChart className="w-12 h-12 text-gray-300" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Activités Récentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {annonces.slice(0, 5).map((annonce) => (
                      <div key={annonce.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src={annonce.images[0]}
                            alt={annonce.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{annonce.title}</h4>
                          <p className="text-sm text-gray-500">{annonce.price}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r p-6">
        <div className="flex items-center gap-3 mb-8">
          <img 
            src={siteLogo.url}
            alt="Logo" 
            className="h-8"
          />
          <span className="font-bold">Administration</span>
        </div>
        
        <nav className="space-y-2">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('overview')}
          >
            <BarChart className="mr-2 h-4 w-4" />
            Vue d'ensemble
          </Button>
          <Button
            variant={activeTab === 'products' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('products')}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Produits
          </Button>
          <Button
            variant={activeTab === 'gallery' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('gallery')}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Galerie
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('settings')}
          >
            <SettingsIcon className="mr-2 h-4 w-4" />
            Paramètres
          </Button>
        </nav>
      </div>

      <div className="p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
