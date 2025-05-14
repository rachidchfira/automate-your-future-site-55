
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="text-2xl font-bold mb-4 block">
              Nexus<span className="text-nexus-400">AI</span>
            </a>
            <p className="text-gray-300 mb-6">
              Powering business growth through intelligent automation solutions tailored to your specific needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conversational AI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Processing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom AI Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-nexus-400" />
                <a href="mailto:info@nexusai.com" className="text-gray-300 hover:text-white transition-colors">info@nexusai.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-nexus-400" />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">+1-555-123-4567</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-3 py-2 rounded-l-md text-gray-900 w-full focus:outline-none focus:ring-1 focus:ring-nexus-500"
                />
                <button 
                  type="submit" 
                  className="bg-nexus-600 hover:bg-nexus-700 px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {currentYear} NexusAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
