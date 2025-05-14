
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-nexus-800">
              Nexus<span className="text-nexus-600">AI</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-nexus-600 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-nexus-600 transition-colors">How It Works</a>
            <a href="#case-studies" className="text-gray-700 hover:text-nexus-600 transition-colors">Case Studies</a>
            <a href="#pricing" className="text-gray-700 hover:text-nexus-600 transition-colors">Pricing</a>
            <Button className="bg-nexus-600 hover:bg-nexus-700 text-white">Get Started</Button>
          </nav>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4">
            <a href="#services" className="px-8 py-3 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Services</a>
            <a href="#how-it-works" className="px-8 py-3 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>How It Works</a>
            <a href="#case-studies" className="px-8 py-3 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Case Studies</a>
            <a href="#pricing" className="px-8 py-3 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Pricing</a>
            <div className="px-8 py-3">
              <Button className="w-full bg-nexus-600 hover:bg-nexus-700 text-white">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
