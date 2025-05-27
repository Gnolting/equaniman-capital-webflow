import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Upload, Edit2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BrandsManager = () => {
  const { toast } = useToast();
  const [brands, setBrands] = useState([
    { id: 1, name: "Empresa Alpha", logo: "https://via.placeholder.com/200x80/4f46e5/ffffff?text=ALPHA", url: "#" },
    { id: 2, name: "Beta Corp", logo: "https://via.placeholder.com/200x80/059669/ffffff?text=BETA", url: "#" },
    { id: 3, name: "Gamma Industries", logo: "https://via.placeholder.com/200x80/dc2626/ffffff?text=GAMMA", url: "#" },
  ]);
  
  const [newBrand, setNewBrand] = useState({ name: '', logo: '', url: '' });
  const [editingBrand, setEditingBrand] = useState<number | null>(null);

  const handleAddBrand = () => {
    if (newBrand.name && newBrand.logo) {
      setBrands([...brands, { 
        id: Date.now(), 
        name: newBrand.name, 
        logo: newBrand.logo, 
        url: newBrand.url || '#' 
      }]);
      setNewBrand({ name: '', logo: '', url: '' });
      toast({
        title: "Marca agregada",
        description: "La nueva marca se ha agregado exitosamente.",
      });
    }
  };

  const handleDeleteBrand = (id: number) => {
    setBrands(brands.filter(brand => brand.id !== id));
    toast({
      title: "Marca eliminada",
      description: "La marca se ha eliminado exitosamente.",
    });
  };

  const handleEditBrand = (id: number, updatedBrand: any) => {
    setBrands(brands.map(brand => 
      brand.id === id ? { ...brand, ...updatedBrand } : brand
    ));
    setEditingBrand(null);
    toast({
      title: "Marca actualizada",
      description: "Los cambios se han guardado exitosamente.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Gestión de Marcas</h1>
        <p className="text-slate-600">Administra los logos de las empresas que confían en Equaniman Capital</p>
      </div>

      {/* Add New Brand */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Agregar Nueva Marca
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="brandName">Nombre de la empresa</Label>
              <Input
                id="brandName"
                value={newBrand.name}
                onChange={(e) => setNewBrand({...newBrand, name: e.target.value})}
                placeholder="Nombre de la empresa"
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="brandLogo">URL del logo</Label>
              <Input
                id="brandLogo"
                value={newBrand.logo}
                onChange={(e) => setNewBrand({...newBrand, logo: e.target.value})}
                placeholder="https://ejemplo.com/logo.png"
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="brandUrl">URL del sitio web (opcional)</Label>
              <Input
                id="brandUrl"
                value={newBrand.url}
                onChange={(e) => setNewBrand({...newBrand, url: e.target.value})}
                placeholder="https://empresa.com"
                className="mt-2"
              />
            </div>
          </div>
          
          <Button onClick={handleAddBrand} className="bg-amber-600 hover:bg-amber-700">
            <Plus className="mr-2 h-4 w-4" />
            Agregar Marca
          </Button>
        </CardContent>
      </Card>

      {/* Existing Brands */}
      <Card>
        <CardHeader>
          <CardTitle>Marcas Actuales ({brands.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div key={brand.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                {editingBrand === brand.id ? (
                  <div className="space-y-2">
                    <Input
                      value={brand.name}
                      onChange={(e) => handleEditBrand(brand.id, { name: e.target.value })}
                      className="text-sm"
                    />
                    <Input
                      value={brand.logo}
                      onChange={(e) => handleEditBrand(brand.id, { logo: e.target.value })}
                      placeholder="URL del logo"
                      className="text-sm"
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={() => setEditingBrand(null)}>
                        Guardar
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingBrand(null)}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-slate-900 mb-2">{brand.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 truncate">{brand.url}</span>
                      <div className="flex space-x-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingBrand(brand.id)}
                        >
                          <Edit2 className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteBrand(brand.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {brands.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate-500">No hay marcas agregadas aún</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandsManager;
