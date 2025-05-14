
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center pt-10 pb-20 lg:py-24">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Power Your Business with{' '}
                <span className="gradient-text">Intelligent Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Automate repetitive tasks, streamline workflows, and unlock growth with our cutting-edge AI solutions tailored for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button size="lg" className="bg-nexus-600 hover:bg-nexus-700 text-white">
                  Get Started <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-nexus-600 text-nexus-600 hover:bg-nexus-50">
                  Book a Demo
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-500">
                <p>Trusted by 500+ businesses worldwide</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-nexus-600 to-blue-500 rounded-lg blur-lg opacity-75 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="AI Automation Dashboard" 
                  className="rounded-md w-full shadow-lg animate-float"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 py-8 opacity-70">
          {['Microsoft', 'Oracle', 'Adobe', 'Salesforce', 'Slack'].map((company) => (
            <div key={company} className="text-gray-500 text-xl font-bold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
