import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleDollarSign, Plus, Users, Layers, Package, Clock, Zap, Target } from 'lucide-react';
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

  const servicePackages = [
    {
      id: 'starter',
      name: 'Starter Package',
      description: 'Perfect for small businesses starting their automation journey',
      price: 2500,
      timeline: '3-4weeks',
      features: [
        '1 department workflow',
        '3 AI automations',
        'Basic integrations',
        'Process analysis & mapping',
        'User training session',
        '30 days support'
      ],
      deliverables: [
        'Custom workflow documentation',
        'Integration setup',
        'Training materials',
        '30-day support plan'
      ],
      cta: 'Get In Touch',
      action: () => handleSelectPlan('starter'),
      icon: <Zap size={24} />
    },
    {
      id: 'growth',
      name: 'Growth Package',
      description: 'Ideal for growing businesses with multiple departments',
      price: 8000,
      timeline: '4-6 weeks',
      features: [
        '3 department workflows',
        '8 AI automations',
        'Advanced integrations',
        'Custom analytics dashboard',
        'ROI tracking setup',
        '90 days support'
      ],
      deliverables: [
        'Multi-department workflow system',
        'Custom analytics dashboard',
        'Integration documentation',
        'ROI measurement tools',
        '90-day support plan'
      ],
      cta: 'Get In Touch',
      action: () => handleSelectPlan('growth'),
      popular: true,
      icon: <Target size={24} />
    },
    {
      id: 'transformation',
      name: 'Transformation Package',
      description: 'Complete business automation for established companies',
      price: 25000,
      timeline: '8 weeks',
      features: [
        'Complete business automation',
        '15+ AI workflows',
        'Custom AI model training',
        'Dedicated project manager',
        'Enterprise integrations',
        '6 months support'
      ],
      deliverables: [
        'End-to-end automation system',
        'Custom AI models',
        'Enterprise integration suite',
        'Comprehensive documentation',
        'Dedicated support team',
        '6-month support plan'
      ],
      cta: 'Get In Touch',
      action: () => handleSelectPlan('transformation'),
      icon: <Package size={24} />
    }
  ];

  const additionalServices = [
    {
      name: 'Additional Department',
      price: 1500,
      description: 'Add automation for one more department',
      icon: <Layers size={20} />
    },
    {
      name: 'Custom AI Training',
      price: 3000,
      description: 'Train AI models on your specific data',
      icon: <CircleDollarSign size={20} />
    },
    {
      name: 'Extended Support',
      price: 500,
      description: 'Additional 3 months of support',
      icon: <Users size={20} />
    },
    {
      name: 'Priority Implementation',
      price: 1000,
      description: 'Expedited delivery timeline',
      icon: <Clock size={20} />
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Custom Workflow Development Packages</h2>
          <p className="text-gray-600 text-lg">Choose the package that fits your automation needs and budget</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicePackages.map((package_) => (
            <Card
              key={package_.id}
              className={`relative transition-all hover:-translate-y-1 hover:shadow-lg ${package_.popular ? 'border-nexus-500 shadow-lg' : 'border-gray-200'}`}
            >
              {package_.popular && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                  <div className="bg-nexus-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className={`pb-4 ${package_.popular ? 'pt-8' : 'pt-6'}`}>
                <div className="flex items-center gap-3 mb-2">
                  {package_.icon}
                  <CardTitle className="text-2xl font-bold">{package_.name}</CardTitle>
                </div>
                <CardDescription className="text-sm">{package_.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">${package_.price.toLocaleString()}</span>
                    <span className="text-gray-600">one-time</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Timeline: {package_.timeline}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-nexus-800">What's Included:</h4>
                  <ul className="space-y-2 mb-4">
                    {package_.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check size={16} className="text-nexus-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold mb-3 text-nexus-800">Deliverables:</h4>
                  <ul className="space-y-2">
                    {package_.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check size={16} className="text-nexus-600 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${package_.popular ? "bg-nexus-600 hover:bg-nexus-700 shadow-md" : ""}`}
                  variant={package_.popular ? "default" : "outline"}
                  onClick={package_.action}
                >
                  {package_.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Additional Services</h3>
            <p className="text-gray-600">Enhance your automation with these add-on services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h4 className="font-semibold">{service.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-2xl font-bold text-nexus-600">${service.price}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 pt-6 border-t border-gray-100">
          <p className="text-gray-600 mb-3">Need a custom solution that doesn't fit these packages?</p>
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
