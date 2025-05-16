import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { useActions } from '@/hooks/useActions';

const CtaSection = () => {
  const { handleScheduleDemo, handleContactUs } = useActions();
  
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI Automation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that have already enhanced their productivity and growth with our intelligent automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
            <Button 
              className="bg-white text-nexus-600 hover:bg-gray-100 rounded-md px-8 py-3 text-lg font-medium"
              onClick={handleScheduleDemo}
            >
              <span className="flex items-center">Schedule a Demo <ArrowRight size={16} className="ml-2" /></span>
            </Button>
            <Button 
              className="bg-nexus-600/10 border border-white text-white hover:bg-nexus-600/20 rounded-md px-8 py-3 text-lg font-medium"
              onClick={handleContactUs}
            >
              <span className="flex items-center">Contact Us <Mail size={16} className="ml-2" /></span>
            </Button>
          </div>
          
          {/* Removed phone number display
          <div className="mt-8 pt-6 border-t border-white/30 flex justify-center">
            <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Phone size={16} />
              <span className="text-lg">Call us: (888) 123-4567</span>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
