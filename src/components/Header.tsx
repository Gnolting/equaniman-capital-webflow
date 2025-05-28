
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/694dbf72-d4ec-4514-84e0-4c7675753a19.png" 
              alt="Equaniman Capital"
              className="h-10 w-auto object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
            />
            <div>
              <h1 className="text-lg font-bold text-white">EQUANIMAN</h1>
              <p className="text-xs text-white/80">CAPITAL</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
