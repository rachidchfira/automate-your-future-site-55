
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useActions } from '@/hooks/useActions';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { handleFreeTrial, handleContactSales } = useActions();
  
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses starting with automation',
      monthlyPrice: 499,
      annualPrice: 449,
      features: [
        '2 AI automation workflows',
        'Basic analytics dashboard',
        'Email support',
        'Up to 1,000 automations/month',
        'Single user access'
      ],
      cta: 'Start Free Trial',
      action: handleFreeTrial
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Ideal for growing businesses with expanding needs',
      monthlyPrice: 999,
      annualPrice: 899,
      features: [
        '10 AI automation workflows',
        'Advanced analytics & reporting',
        'Priority email & chat support',
        'Up to 5,000 automations/month',
        'Team access (up to 5 users)',
        'Custom integrations',
        'Workflow templates library'
      ],
      cta: 'Start Free Trial',
      action: handleFreeTrial,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for larger organizations',
      monthlyPrice: 2499,
      annualPrice: 2199,
      features: [
        'Unlimited AI automation workflows',
        'Enterprise analytics & reporting',
        'Dedicated account manager',
        'Unlimited automations',
        'Unlimited team access',
        'Custom AI model training',
        'SLA guarantees',
        'On-premise deployment options',
        'Custom integrations & development'
      ],
      cta: 'Contact Sales',
      action: handleContactSales
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg mb-8">
            Choose the plan that's right for your business and scale as you grow
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white p-1 rounded-full border border-gray-200 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full ${!isAnnual ? 'bg-nexus-600 text-white' : 'text-gray-600'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full ${isAnnual ? 'bg-nexus-600 text-white' : 'text-gray-600'}`}
              >
                Annual (Save 10%)
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.popular ? 'border-nexus-500 shadow-xl' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-4 mr-4">
                  <div className="bg-nexus-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-nexus-600 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={plan.popular ? "w-full bg-nexus-600 hover:bg-nexus-700" : "w-full"} 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={plan.action}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Have questions about our pricing or need a custom solution?</p>
          <Button 
            variant="outline" 
            className="border-nexus-600 text-nexus-600 hover:bg-nexus-50"
            onClick={handleContactSales}
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
