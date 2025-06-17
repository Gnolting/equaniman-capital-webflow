
import React from 'react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3064952f-f6c9-41a3-b308-27c3484324d2.png" 
              alt="Equaniman Capital"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Language Selector */}
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
