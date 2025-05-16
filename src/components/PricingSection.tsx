import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
<<<<<<< HEAD
import { Check, CircleDollarSign, Plus, Users, Layers, Calculator, Package } from 'lucide-react';
import { useActions } from '@/hooks/useActions';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
=======
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
>>>>>>> origin/main
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
<<<<<<< HEAD
  const { handleContactSales } = useActions();
  const { toast } = useToast();
  const [customDepartments, setCustomDepartments] = useState<string[]>(["sales"]);
  const [basicDepartment, setBasicDepartment] = useState<string>("sales");
  const [professionalDepartments, setProfessionalDepartments] = useState<string[]>(["sales"]);
  const [showAddOns, setShowAddOns] = useState(false);
  const [pricingView, setPricingView] = useState<'packages' | 'departments' | 'custom'>('packages');
  const [customUsers, setCustomUsers] = useState(5);
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

  const handleCustomDepartmentToggle = (departmentId: string) => {
    if (customDepartments.includes(departmentId)) {
      if (customDepartments.length > 1) {
        setCustomDepartments(prev => prev.filter(dep => dep !== departmentId));
      }
    } else {
      setCustomDepartments(prev => [...prev, departmentId]);
    }
  };

  const handleSelectPlan = (plan: string) => {
    // setSelectedPlan(plan); // No longer needed if we redirect directly
    // setQuoteDialogOpen(true); // No longer needed
    window.location.href = 'https://tally.so/r/3j2D0Q';
  };

=======
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
  
>>>>>>> origin/main
  const handleAddOnSelect = (addOn: string) => {
    toast({
      title: "Add-on Selected",
      description: `${addOn} has been added to your plan.`,
    });
  };
<<<<<<< HEAD

  const calculateCustomPrice = () => {
    let basePrice = 0;
    const departmentCount = customDepartments.length;

    customDepartments.forEach(deptId => {
      const dept = departmentData.find(d => d.id === deptId);
      if (dept) basePrice += dept.basePrice;
    });

    if (departmentCount >= 3) basePrice *= 0.9;
    if (departmentCount >= 5) basePrice *= 0.85;

    const userCost = customUsers * 40;

    let totalPrice = basePrice + userCost;
    if (isAnnual) totalPrice *= 0.9;

    return Math.round(totalPrice);
  };

=======
  
>>>>>>> origin/main
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'For small teams getting started',
<<<<<<< HEAD
      monthlyPrice: 1299,
      annualPrice: 1169,
=======
      monthlyPrice: 399,
      annualPrice: 359,
>>>>>>> origin/main
      features: [
        '1 department',
        '3 AI workflows',
        'Basic analytics',
        'Email support',
        '1,500 automations/month',
        'Single user'
      ],
<<<<<<< HEAD
      cta: 'Get Quote',
      action: () => handleSelectPlan('Basic')
=======
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('basic')
>>>>>>> origin/main
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For growing teams',
<<<<<<< HEAD
      monthlyPrice: 4199,
      annualPrice: 4079,
=======
      monthlyPrice: 899,
      annualPrice: 799,
>>>>>>> origin/main
      features: [
        '3 departments',
        '12 AI workflows',
        'Advanced analytics',
        'Priority support',
        '7,500 automations/month',
        'Up to 8 users',
        'Custom integrations'
      ],
<<<<<<< HEAD
      cta: 'Get Quote',
      action: () => handleSelectPlan('Professional'),
=======
      cta: 'Start Free Trial',
      action: () => handleSelectPlan('professional'),
>>>>>>> origin/main
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For established businesses',
<<<<<<< HEAD
      monthlyPrice: 12209,
      annualPrice: 12099,
=======
      monthlyPrice: 1799,
      annualPrice: 1599,
>>>>>>> origin/main
      features: [
        'All departments',
        '25 AI workflows',
        'Enterprise analytics',
        'Dedicated manager',
        '20,000 automations/month',
        'Up to 20 users',
        'Custom AI training'
      ],
<<<<<<< HEAD
      cta: 'Get Quote',
      action: () => handleSelectPlan('Business')
    }
  ];

=======
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
  
>>>>>>> origin/main
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
<<<<<<< HEAD
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Flexible Departmental Pricing</h2>
          <p className="text-gray-600 text-lg mb-6">Choose the departments and services that match your business needs</p>

          <div className="flex items-center justify-center mt-8 mb-8">
=======
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that's right for your business</p>
          
          <div className="flex items-center justify-center mt-8 mb-4">
>>>>>>> origin/main
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
<<<<<<< HEAD

          <Tabs
            defaultValue="packages"
            value={pricingView}
            onValueChange={(v: string) => setPricingView(v as 'packages' | 'departments' | 'custom')}
            className="w-full max-w-md mx-auto"
          >
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="packages">
                <Package size={16} className="mr-2" />
                Packages
              </TabsTrigger>
              <TabsTrigger value="departments">
                <Layers size={16} className="mr-2" />
                By Department
              </TabsTrigger>
              <TabsTrigger value="custom">
                <Calculator size={16} className="mr-2" />
                Custom Builder
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {pricingView === 'packages' && (
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
        )}

        {pricingView === 'departments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentData.map((dept) => (
              <Card key={dept.id} className="border-gray-200 hover:border-nexus-300 transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{dept.name} Department</CardTitle>
                  <CardDescription>Specialized {dept.name} automation solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-5">
                    <p className="text-3xl font-bold">${isAnnual ? Math.round(dept.basePrice * 0.9) : dept.basePrice}<span className="text-sm text-gray-600">/mo</span></p>
                    <p className="text-sm text-gray-500">per department</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {dept.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-nexus-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-nexus-600 flex-shrink-0" />
                      <span className="text-sm">5 users included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-nexus-600 flex-shrink-0" />
                      <span className="text-sm">3,000 automations/month</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setCustomDepartments([dept.id]);
                      handleSelectPlan(dept.name);
                    }}
                  >
                    Get Quote for {dept.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {pricingView === 'custom' && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Build Your Custom Solution</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">1. Select Your Departments</h4>
                  <div className="flex flex-wrap gap-2">
                    {departmentData.map((dept) => (
                      <div
                        key={dept.id}
                        onClick={() => handleCustomDepartmentToggle(dept.id)}
                        className={`px-4 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                          customDepartments.includes(dept.id)
                            ? 'bg-nexus-600 text-white shadow-sm'
                            : 'bg-white border border-gray-200 text-gray-700 hover:border-nexus-300'
                        }`}
                      >
                        {dept.name}
                        {customDepartments.includes(dept.id) && (
                          <Badge variant="outline" className="ml-2 bg-white text-nexus-700 border-nexus-200">
                            ${isAnnual ? Math.round(dept.basePrice * 0.9) : dept.basePrice}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3">2. Select User Count</h4>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCustomUsers(Math.max(1, customUsers - 1))}
                    >
                      -
                    </Button>
                    <span className="text-xl font-medium w-8 text-center">{customUsers}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCustomUsers(customUsers + 1)}
                    >
                      +
                    </Button>
                    <span className="text-sm text-gray-500">
                      (${40}/user/month)
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-2">Selected Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {customDepartments.map(deptId => {
                      const dept = departmentData.find(d => d.id === deptId);
                      if (!dept) return null;
                      return dept.keyFeatures.map((feature, idx) => (
                        <div key={`${deptId}-${idx}`} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                          <Check size={14} className="text-nexus-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ));
                    })}
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                      <Check size={14} className="text-nexus-600" />
                      <span className="text-sm">{customUsers} user licenses</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                      <Check size={14} className="text-nexus-600" />
                      <span className="text-sm">{customDepartments.length * 3000} automations/month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="bg-nexus-50 border-nexus-100">
                  <CardHeader>
                    <CardTitle>Your Custom Package</CardTitle>
                    <CardDescription>Summary of your selections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Departments:</p>
                        <p className="font-medium">{customDepartments.length} selected</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Users:</p>
                        <p className="font-medium">{customUsers} users</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Billing:</p>
                        <p className="font-medium">{isAnnual ? 'Annual (10% discount)' : 'Monthly'}</p>
                      </div>
                      <div className="pt-4 border-t border-nexus-100">
                        <p className="text-sm text-gray-500">Total Price:</p>
                        <p className="text-3xl font-bold">${calculateCustomPrice()}<span className="text-sm text-gray-600">/mo</span></p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-nexus-600 hover:bg-nexus-700"
                      onClick={() => {
                        setSelectedPlan('Custom');
                        setQuoteDialogOpen(true);
                      }}
                    >
                      Get Custom Quote
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        )}

        <div className="mt-14">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Available Add-ons</h3>
            <Button
              variant="ghost"
=======
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
>>>>>>> origin/main
              size="sm"
              className="text-nexus-600"
              onClick={() => setShowAddOns(!showAddOns)}
            >
              {showAddOns ? 'Hide Add-ons' : 'Show Add-ons'}
            </Button>
          </div>
<<<<<<< HEAD

=======
          
>>>>>>> origin/main
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
<<<<<<< HEAD
                    <Button
                      variant="outline"
                      size="sm"
=======
                    <Button 
                      variant="outline" 
                      size="sm" 
>>>>>>> origin/main
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
<<<<<<< HEAD

        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <p className="text-gray-600 mb-3">Need a more customized solution for your business?</p>
          <Button
            variant="outline"
=======
        
        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <p className="text-gray-600 mb-3">Have questions about our pricing?</p>
          <Button 
            variant="outline" 
>>>>>>> origin/main
            className="border-nexus-300 text-nexus-600 hover:bg-nexus-50"
            onClick={handleContactSales}
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
<<<<<<< HEAD

      <QuoteFormDialog
        isOpen={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
        selectedPlan={selectedPlan}
        selectedDepartments={
          selectedPlan === 'Basic'
            ? [departmentData.find(d => d.id === basicDepartment)?.name || '']
            : selectedPlan === 'Professional'
              ? professionalDepartments.map(id => departmentData.find(d => d.id === id)?.name || '')
              : selectedPlan === 'Custom'
                ? customDepartments.map(id => departmentData.find(d => d.id === id)?.name || '')
                : []
        }
      />
=======
>>>>>>> origin/main
    </section>
  );
};

export default PricingSection;
