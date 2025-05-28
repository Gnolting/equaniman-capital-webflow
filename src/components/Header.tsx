
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0693f403-ef13-42be-b768-e0b436c03ae5.png" 
              alt="Equaniman Capital"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
