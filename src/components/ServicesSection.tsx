
import ServiceCard from './ServiceCard';
import { MessageSquare, BarChart3, Zap, Database, Clock, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom AI Workflows',
      description: 'We design and build bespoke AI automation workflows tailored to your specific business processes and requirements.',
      icon: <Zap size={24} />
    },
    {
      title: 'Process Analysis & Optimization',
      description: 'Our experts analyze your current workflows, identify automation opportunities, and design optimized processes that save time and reduce costs.',
      icon: <BarChart3 size={24} />
    },
    {
      title: 'Integration Development',
      description: 'Seamlessly connect your existing tools and platforms with custom integrations that work exactly how you need them to.',
      icon: <Globe size={24} />
    },
    {
      title: 'Data Processing & Analytics',
      description: 'Transform your raw data into actionable insights with custom data processing workflows and real-time analytics dashboards.',
      icon: <Database size={24} />
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training for your team and ongoing support to ensure your automation solutions deliver maximum value.',
      icon: <Clock size={24} />
    },
    {
      title: 'ROI Measurement',
      description: 'Track the real impact of your automation with custom reporting and analytics that show clear return on investment.',
      icon: <MessageSquare size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Custom Development Services</h2>
          <p className="text-gray-600 text-lg">
            We don't sell software - we build custom automation solutions that fit your business perfectly. 
            Every workflow is designed specifically for your needs, processes, and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
