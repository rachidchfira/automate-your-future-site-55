
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useActions } from '@/hooks/useActions';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleGetStarted } = useActions();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsMenuOpen(false); // Close mobile menu if open
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-nexus-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-gray-700 hover:text-nexus-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="text-gray-700 hover:text-nexus-600 transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-700 hover:text-nexus-600 transition-colors"
            >
              Pricing
            </button>
            <Button 
              className="bg-nexus-600 hover:bg-nexus-700 text-white" 
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </nav>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-4">
            <button 
              className="px-8 py-3 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button 
              className="px-8 py-3 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>
            <button 
              className="px-8 py-3 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection('case-studies')}
            >
              Case Studies
            </button>
            <button 
              className="px-8 py-3 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => scrollToSection('pricing')}
            >
              Pricing
            </button>
            <div className="px-8 py-3">
              <Button 
                className="w-full bg-nexus-600 hover:bg-nexus-700 text-white"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
