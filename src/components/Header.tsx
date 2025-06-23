
import React from 'react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-32">
          {/* Logo - Made even larger */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/5eb33c52-dfae-4ed9-b96e-c863801e71b5.png" 
              alt="Equaniman Capital"
              className="h-28 w-auto object-contain"
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
