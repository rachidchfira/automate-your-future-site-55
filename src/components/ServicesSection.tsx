
import ServiceCard from './ServiceCard';
import { MessageSquare, BarChart3, Zap, Database, Clock, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Conversational AI',
      description: 'Implement intelligent chatbots and virtual assistants that understand natural language and provide exceptional customer service 24/7.',
      icon: <MessageSquare size={24} />
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage machine learning models to analyze data, identify patterns and predict future trends to make informed business decisions.',
      icon: <BarChart3 size={24} />
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and complex workflows to increase efficiency and reduce operational costs.',
      icon: <Zap size={24} />
    },
    {
      title: 'Data Processing',
      description: 'Automate data extraction, cleaning, and transformation processes to maintain high-quality, actionable information.',
      icon: <Database size={24} />
    },
    {
      title: 'Task Scheduling',
      description: 'Create intelligent scheduling systems that optimize resource allocation and manage complex calendars.',
      icon: <Clock size={24} />
    },
    {
      title: 'Multi-Channel Integration',
      description: 'Seamlessly connect your platforms and create a unified experience across all customer touchpoints.',
      icon: <Globe size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Automation Services</h2>
          <p className="text-gray-600 text-lg">
            We offer cutting-edge AI solutions to help businesses like yours automate tasks, 
            gain insights, and achieve operational excellence.
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
