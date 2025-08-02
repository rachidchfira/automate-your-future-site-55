import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleDollarSign, Plus, Users, Layers, Package } from 'lucide-react';
import { useActions } from '@/hooks/useActions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import QuoteFormDialog from './QuoteFormDialog';

// Enhanced department data with pricing info and key features
const departmentData = [
  {
    id: "sales",
    name: "Sales",
    basePrice: 199,
    keyFeatures: [
      "Lead generation automation",
      "Personalized sales outreach",
      "Deal pipeline management",
      "Sales analytics dashboard"
    ]
  },
  {
    id: "customer_success",
    name: "Customer Success",
    basePrice: 189,
    keyFeatures: [
      "Automated onboarding",
      "Customer health monitoring",
      "Proactive retention tools",
      "Satisfaction analytics"
    ]
  },
  {
    id: "hr",
    name: "HR",
    basePrice: 179,
    keyFeatures: [
      "Recruitment automation",
      "Employee onboarding",
      "Performance management",
      "Engagement monitoring"
    ]
  },
  {
    id: "operations",
    name: "Operations",
    basePrice: 209,
    keyFeatures: [
      "Workflow automation",
      "Process optimization",
      "Resource scheduling",
      "Operations analytics"
    ]
  },
  {
    id: "finance",
    name: "Finance",
    basePrice: 229,
    keyFeatures: [
      "Invoice automation",
      "Expense management",
      "Financial reporting",
      "Budget forecasting"
    ]
  },
  {
    id: "marketing",
    name: "Marketing",
    basePrice: 199,
    keyFeatures: [
      "Content automation",
      "Campaign management",
      "Performance analytics",
      "Audience targeting"
    ]
  },
  {
    id: "executive_support",
    name: "Executive Support",
    basePrice: 219,
    keyFeatures: [
      "Daily schedule & task management",
      "Inbox prioritization & management",
      "Meeting coordination & follow-ups",
      "Automated report generation"
    ]
  },
  {
    id: "product_development",
    name: "Product Development",
    basePrice: 209,
    keyFeatures: [
      "Customer need & market trend research",
      "User feedback analysis",
      "Development milestone tracking",
      "Automated testing workflows"
    ]
  },
  {
    id: "it_support",
    name: "IT and Support",
    basePrice: 199,
    keyFeatures: [
      "System performance monitoring",
      "Automated incident tracking",
      "Real-time technical assistance",
      "Security update & backup scheduling"
    ]
  }
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { handleContactSales } = useActions();
  const { toast } = useToast();
  const [basicDepartment, setBasicDepartment] = useState<string>("sales");
  const [professionalDepartments, setProfessionalDepartments] = useState<string[]>(["sales"]);
  const [showAddOns, setShowAddOns] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleBasicDepartmentChange = (departmentId: string) => {
    setBasicDepartment(departmentId);
  };

  const handleProfessionalDepartmentToggle = (departmentId: string) => {
    if (professionalDepartments.includes(departmentId)) {
      if (professionalDepartments.length > 1) {
        setProfessionalDepartments(prev => prev.filter(dep => dep !== departmentId));
      }
    } else {
      if (professionalDepartments.length < 3) {
        setProfessionalDepartments(prev => [...prev, departmentId]);
      } else {
        toast({
          title: "Maximum Departments",
          description: "Professional plan allows up to 3 departments. Please remove one before adding another.",
        });
      }
    }
  };

  const handleSelectPlan = (plan: string) => {
    window.location.href = 'https://tally.so/r/3j2D0Q';
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
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        '1 department',
        '3 AI workflows',
        'Basic analytics',
        'Email support',
        '1,000 automations/month',
        'Single user'
      ],
      cta: 'Get In Touch',
      action: () => handleSelectPlan('basic')
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For growing teams',
      monthlyPrice: 4199,
      annualPrice: 4099,
      features: [
        '3 departments',
        '12 AI workflows',
        'Advanced analytics',
        'Priority support',
        '7,500 automations/month',
        'Up to 8 users',
        'Custom integrations'
      ],
      cta: 'Get In Touch',
      action: () => handleSelectPlan('professional'),
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For established businesses',
      monthlyPrice:  12999,
      annualPrice: 11999,
      features: [
        'All departments',
        '25 AI workflows',
        'Enterprise analytics',
        'Dedicated manager',
        '20,000 automations/month',
        'Up to 20 users',
        'Custom AI training'
      ],
      cta: 'Get In Touch',
      action: () => handleSelectPlan('business')
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that's right for your business</p>

          <div className="flex items-center justify-center mt-8 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    {`$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                  </span>
                  <span className="text-gray-600 ml-1">/mo</span>
                </div>

                {plan.id === 'basic' && (
                  <div className="mb-4 p-3 bg-nexus-50 rounded-md">
                    <p className="text-sm font-medium mb-2 text-nexus-800">
                      Select your department:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {departmentData.map((dept) => (
                        <div
                          key={dept.id}
                          onClick={() => handleBasicDepartmentChange(dept.id)}
                          className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-colors ${
                            basicDepartment === dept.id
                              ? 'bg-nexus-600 text-white shadow-sm'
                              : 'bg-white border border-gray-200 text-gray-700 hover:border-nexus-300'
                          }`}
                        >
                          {dept.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {plan.id === 'professional' && (
                  <div className="mb-4 p-3 bg-nexus-50 rounded-md">
                    <p className="text-sm font-medium mb-2 text-nexus-800">
                      Select up to 3:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {departmentData.map((dept) => (
                        <div
                          key={dept.id}
                          onClick={() => handleProfessionalDepartmentToggle(dept.id)}
                          className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-colors ${
                            professionalDepartments.includes(dept.id)
                              ? 'bg-nexus-600 text-white shadow-sm'
                              : 'bg-white border border-gray-200 text-gray-700 hover:border-nexus-300'
                          }`}
                        >
                          {dept.name}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {professionalDepartments.length}/3 departments selected
                    </p>
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

        {/* Available Add-ons section removed */}

        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <p className="text-gray-600 mb-3">Need a more customized solution for your business?</p>
          <Button
            variant="outline"
            className="border-nexus-300 text-nexus-600 hover:bg-nexus-50"
            onClick={handleContactSales}
          >
            Contact Sales Team
          </Button>
        </div>
      </div>

      <QuoteFormDialog
        isOpen={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
        selectedPlan={selectedPlan}
        selectedDepartments={
          selectedPlan === 'Basic'
            ? [departmentData.find(d => d.id === basicDepartment)?.name || '']
            : selectedPlan === 'Professional'
              ? professionalDepartments.map(id => departmentData.find(d => d.id === id)?.name || '')
              : []
        }
      />
    </section>
  );
};

export default PricingSection;
