import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleDollarSign, Plus, Users, Layers } from 'lucide-react';
import { useActions } from '@/hooks/useActions';
import { useToast } from '@/hooks/use-toast';

// List of departments available for selection
const departments = [
  "Sales", 
  "Customer Success", 
  "HR", 
  "Operations", 
  "Finance", 
  "Marketing"
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { handleFreeTrial, handleContactSales } = useActions();
  const { toast } = useToast();
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>(["Sales"]);
  const [showAddOns, setShowAddOns] = useState(false);
  
  const handleDepartmentToggle = (department: string) => {
    // For Basic tier, only allow one department
    if (selectedDepartments.includes(department)) {
      if (selectedDepartments.length > 1) {
        setSelectedDepartments(prev => prev.filter(dep => dep !== department));
      }
    } else {
      setSelectedDepartments(prev => [...prev, department]);
    }
  };
  
  const handleSelectPlan = (plan: string) => {
    if (plan === 'enterprise') {
      handleContactSales();
    } else {
      handleFreeTrial();
    }
  };
  
  const handleAddOnSelect = (addOn: string) => {
    toast({
      title: "Add-on Selected",
      description: `${addOn} has been added to your plan.`,
    });
  };
  
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'For small teams getting started',
      monthlyPrice: 399,
      annualPrice: 359,
      features: [
        '1 department',
        '3 AI workflows',
        'Basic analytics',
        'Email support',
        '1,500 automations/month',
        'Single user'
      ],
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('basic')
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For growing teams',
      monthlyPrice: 899,
      annualPrice: 799,
      features: [
        '3 departments',
        '12 AI workflows',
        'Advanced analytics',
        'Priority support',
        '7,500 automations/month',
        'Up to 8 users',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('professional'),
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For established businesses',
      monthlyPrice: 1799,
      annualPrice: 1599,
      features: [
        'All departments',
        '25 AI workflows',
        'Enterprise analytics',
        'Dedicated manager',
        '20,000 automations/month',
        'Up to 20 users',
        'Custom AI training'
      ],
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('business')
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom enterprise solution',
      monthlyPrice: null,
      annualPrice: null,
      priceDisplay: 'Custom',
      features: [
        'Unlimited workflows',
        'Custom AI development',
        'White-labeled solution',
        'Unlimited automations',
        'Unlimited users',
        'On-premise options',
        '24/7 premium support'
      ],
      cta: 'Contact Sales',
      action: handleContactSales
    }
  ];
  
  const addOns = [
    {
      name: 'Additional Department',
      price: 250,
      description: 'Add access to one more department',
      icon: <Layers size={20} />
    },
    {
      name: 'Additional 5,000 Automations',
      price: 150,
      description: 'Extend your monthly automation limit',
      icon: <CircleDollarSign size={20} />
    },
    {
      name: 'Additional 5 Users',
      price: 100,
      description: 'Add more team members to your plan',
      icon: <Users size={20} />
    },
    {
      name: 'Custom AI Training Session',
      price: 1500,
      description: 'One-time training session for your team',
      icon: <Plus size={20} />
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that's right for your business</p>
          
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="bg-white p-1 rounded-full border border-gray-200 flex shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full transition-colors ${!isAnnual ? 'bg-nexus-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full transition-colors ${isAnnual ? 'bg-nexus-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Annual (Save 10%)
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative transition-all hover:-translate-y-1 hover:shadow-lg ${plan.popular ? 'border-nexus-500 shadow-lg' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                  <div className="bg-nexus-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={`pb-4 ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="mb-4 flex items-end">
                  <span className="text-4xl font-bold">
                    {plan.priceDisplay ? plan.priceDisplay : 
                    `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                  </span>
                  {!plan.priceDisplay && <span className="text-gray-600 ml-1">/mo</span>}
                </div>
                
                {(plan.id === 'basic' || plan.id === 'professional') && (
                  <div className="mb-4 p-3 bg-nexus-50 rounded-md">
                    <p className="text-sm font-medium mb-2 text-nexus-800">
                      {plan.id === 'basic' ? 'Select your department:' : 'Select up to 3:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {departments.map((dept) => (
                        <div 
                          key={dept} 
                          onClick={() => handleDepartmentToggle(dept)} 
                          className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-colors ${
                            selectedDepartments.includes(dept) 
                              ? 'bg-nexus-600 text-white shadow-sm' 
                              : 'bg-white border border-gray-200 text-gray-700 hover:border-nexus-300'
                          }`}
                        >
                          {dept}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={16} className="text-nexus-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? "bg-nexus-600 hover:bg-nexus-700 shadow-md" : ""}`} 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={plan.action}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-14">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Available Add-ons</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-nexus-600"
              onClick={() => setShowAddOns(!showAddOns)}
            >
              {showAddOns ? 'Hide Add-ons' : 'Show Add-ons'}
            </Button>
          </div>
          
          {showAddOns && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addOn, index) => (
                <Card key={index} className="border-gray-200 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardHeader className="pb-2 flex flex-row items-center gap-2">
                    <div className="p-1.5 bg-nexus-50 rounded-md text-nexus-600">
                      {addOn.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base">{addOn.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2 pt-0">
                    <p className="text-xs text-gray-500 mb-2">{addOn.description}</p>
                    <p className="font-semibold">${addOn.price}<span className="text-xs text-gray-500 font-normal">/mo</span></p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-nexus-600 border-nexus-300 hover:bg-nexus-50"
                      onClick={() => handleAddOnSelect(addOn.name)}
                    >
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <p className="text-gray-600 mb-3">Have questions about our pricing?</p>
          <Button 
            variant="outline" 
            className="border-nexus-300 text-nexus-600 hover:bg-nexus-50"
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
