
import { Check } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Assessment",
      description: "We analyze your business processes, identify automation opportunities and determine the potential ROI.",
      benefits: ["Process mapping", "Opportunity identification", "ROI calculation"]
    },
    {
      number: 2,
      title: "Solution Design",
      description: "Our experts create a custom automation solution tailored to your specific business needs and objectives.",
      benefits: ["Custom architecture", "User experience design", "Integration planning"]
    },
    {
      number: 3,
      title: "Implementation",
      description: "We develop and deploy your automation solution, ensuring seamless integration with your existing systems.",
      benefits: ["Agile development", "Continuous testing", "Smooth deployment"]
    },
    {
      number: 4,
      title: "Training & Support",
      description: "We provide comprehensive training for your team and ongoing support to ensure long-term success.",
      benefits: ["User training", "Documentation", "24/7 technical support"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Implement AI Automation</h2>
          <p className="text-gray-600 text-lg">
            Our proven methodology ensures successful implementation of AI automation solutions that deliver measurable results.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <div className="h-16 w-16 rounded-full gradient-bg text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center md:text-left">{step.title}</h3>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-nexus-600 mt-1 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
