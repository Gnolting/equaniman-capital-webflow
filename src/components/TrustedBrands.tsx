
import React from 'react';

const TrustedBrands = () => {
  // Placeholder brands - these will be replaced with actual client logos later
  const brands = [
    { name: "Empresa Alpha", logo: "https://via.placeholder.com/200x80/4f46e5/ffffff?text=ALPHA" },
    { name: "Beta Corp", logo: "https://via.placeholder.com/200x80/059669/ffffff?text=BETA" },
    { name: "Gamma Industries", logo: "https://via.placeholder.com/200x80/dc2626/ffffff?text=GAMMA" },
    { name: "Delta Solutions", logo: "https://via.placeholder.com/200x80/7c3aed/ffffff?text=DELTA" },
    { name: "Epsilon Group", logo: "https://via.placeholder.com/200x80/ea580c/ffffff?text=EPSILON" },
    { name: "Zeta Capital", logo: "https://via.placeholder.com/200x80/0891b2/ffffff?text=ZETA" }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-amber-400 mb-4">
            Marcas que Confían en Nosotros
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Empresas líderes en diversos sectores han confiado en Equaniman Capital 
            para optimizar sus estrategias financieras y alcanzar sus objetivos de crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 italic">
            * Los logos mostrados son ejemplos. Los logos reales de nuestros clientes 
            se agregarán a través del panel administrativo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
