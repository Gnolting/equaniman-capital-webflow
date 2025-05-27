
import React, { useState } from 'react';
import AdminNav from '../components/admin/AdminNav';
import AdminDashboard from '../components/admin/AdminDashboard';
import ContentManager from '../components/admin/ContentManager';
import BrandsManager from '../components/admin/BrandsManager';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const { toast } = useToast();

  const handleLogout = () => {
    // Aquí se implementaría la lógica de logout
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente.",
    });
    // Redirigir al login o página principal
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'content':
        return <ContentManager />;
      case 'brands':
        return <BrandsManager />;
      case 'messages':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Gestión de Mensajes</h2>
            <p className="text-slate-600">Esta sección se desarrollará próximamente</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Analíticas</h2>
            <p className="text-slate-600">Esta sección se desarrollará próximamente</p>
          </div>
        );
      case 'users':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Gestión de Usuarios</h2>
            <p className="text-slate-600">Esta sección se desarrollará próximamente</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Configuración</h2>
            <p className="text-slate-600">Esta sección se desarrollará próximamente</p>
          </div>
        );
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />
      
      <div className="ml-64 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
