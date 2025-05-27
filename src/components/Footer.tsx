
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Equaniman Capital</h3>
            <p className="text-gray-300 mb-4">
              Asesoría financiera profesional con sede en Buenos Aires, Argentina. 
              Transformamos su visión en realidad económica.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Equaniman Capital. Todos los derechos reservados.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Asesoría Empresarial</li>
              <li>Planificación Financiera</li>
              <li>Gestión de Inversiones</li>
              <li>Consultoría Estratégica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>Buenos Aires, Argentina</p>
              <p>contacto@equanimancapital.com</p>
              <p>Lun - Vie: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
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
