
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Building2,
  Mail,
  BarChart3
} from 'lucide-react';

interface AdminNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const AdminNav = ({ activeSection, onSectionChange, onLogout }: AdminNavProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'content', label: 'Contenido', icon: FileText },
    { id: 'brands', label: 'Marcas', icon: Building2 },
    { id: 'messages', label: 'Mensajes', icon: Mail },
    { id: 'analytics', label: 'Analíticas', icon: BarChart3 },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <div className="bg-slate-900 text-white h-screen w-64 fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/694dbf72-d4ec-4514-84e0-4c7675753a19.png" 
            alt="Equaniman Capital"
            className="h-8 w-auto"
          />
          <div>
            <h2 className="text-lg font-bold text-amber-400">EQUANIMAN</h2>
            <p className="text-xs text-slate-400">Panel Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'secondary' : 'ghost'}
              className={`w-full justify-start text-left ${
                activeSection === item.id 
                  ? 'bg-amber-600 text-slate-900 hover:bg-amber-500' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
          onClick={onLogout}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default AdminNav;
