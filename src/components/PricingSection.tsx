
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleDollarSign, Plus, Users, Layers } from 'lucide-react';
import { useActions } from '@/hooks/useActions';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
      description: 'Get started with automation for one department',
      monthlyPrice: 399,
      annualPrice: 359,
      features: [
        'Access to automation for 1 department of choice',
        '3 AI automation workflows',
        'Basic analytics dashboard',
        'Email support',
        'Up to 1,500 automations/month',
        'Single user access'
      ],
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('basic')
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Perfect for growing teams with expanding needs',
      monthlyPrice: 899,
      annualPrice: 799,
      features: [
        'Access to automation for 3 departments of choice',
        '12 AI automation workflows',
        'Advanced analytics & reporting',
        'Priority email & chat support',
        'Up to 7,500 automations/month',
        'Team access (up to 8 users)',
        'Custom integrations',
        'Workflow templates library'
      ],
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('professional'),
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Comprehensive solution for established businesses',
      monthlyPrice: 1799,
      annualPrice: 1599,
      features: [
        'Access to automation for all departments',
        '25 AI automation workflows',
        'Enterprise analytics & reporting',
        'Priority support with dedicated success manager',
        'Up to 20,000 automations/month',
        'Team access (up to 20 users)',
        'Custom AI model training',
        'SLA guarantees',
        'API access'
      ],
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('business')
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solution for large organizations',
      monthlyPrice: null,
      annualPrice: null,
      priceDisplay: 'Custom',
      features: [
        'Unlimited workflows across all departments',
        'Custom AI model development',
        'White-labeled solutions',
        'Unlimited automations',
        'Unlimited users',
        'On-premise deployment options',
        'Custom integrations & development',
        '24/7 premium support',
        'Dedicated account team'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    {plan.priceDisplay ? plan.priceDisplay : 
                    `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                  </span>
                  {!plan.priceDisplay && <span className="text-gray-600 ml-2">/month</span>}
                </div>
                
                {(plan.id === 'basic' || plan.id === 'professional') && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm font-medium mb-2">
                      {plan.id === 'basic' ? 'Select 1 Department:' : 'Select Up to 3 Departments:'}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {departments.map((dept) => (
                        <div 
                          key={dept} 
                          onClick={() => handleDepartmentToggle(dept)} 
                          className={`px-2 py-1 text-xs rounded cursor-pointer transition-colors ${
                            selectedDepartments.includes(dept) 
                              ? 'bg-nexus-600 text-white' 
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {dept}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-nexus-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
        
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Available Add-ons</h3>
            <Button 
              variant="ghost" 
              className="text-nexus-600"
              onClick={() => setShowAddOns(!showAddOns)}
            >
              {showAddOns ? 'Hide Add-ons' : 'Show Add-ons'}
            </Button>
          </div>
          
          {showAddOns && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-nexus-50 rounded-md text-nexus-600">
                        {addOn.icon}
                      </div>
                      <CardTitle className="text-lg">{addOn.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-600 mb-2">{addOn.description}</p>
                    <p className="font-bold">${addOn.price}<span className="text-sm text-gray-600 font-normal">/month</span></p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-nexus-600 text-nexus-600 hover:bg-nexus-50"
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
