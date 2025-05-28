
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/694dbf72-d4ec-4514-84e0-4c7675753a19.png" 
                alt="Equaniman Capital"
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-amber-400">EQUANIMAN</h3>
                <p className="text-sm text-slate-400">CAPITAL</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Asesoría financiera profesional con sede en Buenos Aires, Argentina. 
              Transformamos su visión en realidad económica.
            </p>
            <p className="text-slate-400 text-sm">
              © 2024 Equaniman Capital. Todos los derechos reservados.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Servicios</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Asesoría Empresarial</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Planificación Financiera</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Gestión de Inversiones</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Consultoría Estratégica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contacto</h4>
            <div className="space-y-2 text-slate-300">
              <p className="hover:text-amber-400 transition-colors">Buenos Aires, Argentina</p>
              <p className="hover:text-amber-400 transition-colors">contacto@equanimancapital.com</p>
              <p className="hover:text-amber-400 transition-colors">Lun - Vie: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            Diseñado para ser compatible con integración backend via Convex. 
            Panel administrativo disponible para gestión de contenido.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
