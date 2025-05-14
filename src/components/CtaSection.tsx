import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const CtaSection = () => {
  return <section className="relative py-24">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI Automation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that have already enhanced their productivity and growth with our intelligent automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-nexus-600 hover:bg-gray-100">
              Schedule a Demo <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CtaSection;