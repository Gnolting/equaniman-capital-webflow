
import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    // Aquí se implementaría la lógica de autenticación en el futuro
    navigate('/admin');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/694dbf72-d4ec-4514-84e0-4c7675753a19.png" 
              alt="Equaniman Capital"
              className="h-10 w-auto object-contain"
              style={{ filter: 'brightness(0) saturate(100%)' }}
            />
            <div>
              <h1 className="text-lg font-bold text-amber-600">EQUANIMAN</h1>
              <p className="text-xs text-gray-600">CAPITAL</p>
            </div>
          </div>

          {/* Admin Button */}
          <Button
            onClick={handleAdminAccess}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 border-amber-600 text-amber-600 hover:bg-amber-50"
          >
            <Settings className="w-4 h-4" />
            <span>Admin</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
