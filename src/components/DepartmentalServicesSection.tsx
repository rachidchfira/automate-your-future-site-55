
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceItem {
  id: string;
  title: string;
}

interface DepartmentData {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

const departments: DepartmentData[] = [
  {
    id: 'sales',
    title: 'Sales',
    description: 'Supercharge your sales team with intelligent automation that generates leads, nurtures prospects, and closes deals.',
    services: [
      { id: 'sales-1', title: 'Automate lead generation and scoring based on CRM data' },
      { id: 'sales-2', title: 'Draft personalized follow-up emails to nurture prospects' },
      { id: 'sales-3', title: 'Generate sales pitches and prepare meeting notes automatically' },
      { id: 'sales-4', title: 'Track progress through the pipeline and provide real-time analytics' },
      { id: 'sales-5', title: 'Schedule reminders to reduce no-shows and increase conversions' },
      { id: 'sales-6', title: 'Handle outbound sales calls to qualify leads and inbound calls for queries' },
    ]
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    description: 'Enhance customer satisfaction and retention with proactive support and personalized experiences.',
    services: [
      { id: 'cs-1', title: 'Automate onboarding workflows for new customers' },
      { id: 'cs-2', title: 'Send proactive notifications for upselling or renewals' },
      { id: 'cs-3', title: 'Monitor customer feedback and suggest improvements' },
      { id: 'cs-4', title: 'Provide tailored recommendations based on user behavior' },
      { id: 'cs-5', title: 'Track customer health scores to reduce churn risk' },
      { id: 'cs-6', title: 'Manage inbound customer calls for troubleshooting or relationship building' },
    ]
  },
  {
    id: 'hr',
    title: 'Human Resources',
    description: 'Streamline recruitment, onboarding, and employee engagement with intelligent HR automation.',
    services: [
      { id: 'hr-1', title: 'Automate job postings and manage applicant tracking systems (ATS)' },
      { id: 'hr-2', title: 'Screen resumes and rank candidates based on requirements' },
      { id: 'hr-3', title: 'Schedule interviews and coordinate with managers seamlessly' },
      { id: 'hr-4', title: 'Generate onboarding checklists for new employees' },
      { id: 'hr-5', title: 'Create and share employee engagement and retention strategies' },
      { id: 'hr-6', title: 'Conduct outbound candidate screening calls and schedule interviews efficiently' },
    ]
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Optimize business operations with automated workflows, reporting, and process improvement.',
    services: [
      { id: 'ops-1', title: 'Keep workflows and data processes running smoothly with automation' },
      { id: 'ops-2', title: 'Track project milestones and send real-time status updates' },
      { id: 'ops-3', title: 'Provide performance summaries for departments and teams' },
      { id: 'ops-4', title: 'Automate routine tasks like reporting and system backups' },
      { id: 'ops-5', title: 'Identify inefficiencies and recommend optimized workflows' },
      { id: 'ops-6', title: 'Handle operational inquiries and facilitate vendor communication' },
    ]
  },
  {
    id: 'finance',
    title: 'Finance & Admin',
    description: 'Streamline financial operations with automated invoicing, reporting, and expense management.',
    services: [
      { id: 'fin-1', title: 'Automate invoice generation and payment reminders' },
      { id: 'fin-2', title: 'Track expenses, profits, and budget forecasts in real time' },
      { id: 'fin-3', title: 'Prepare financial reports and provide tax-related summaries' },
      { id: 'fin-4', title: 'Monitor cash flow and alert for unusual activity' },
      { id: 'fin-5', title: 'Set up workflows for approvals and expense reimbursements' },
      { id: 'fin-6', title: 'Conduct outbound calls to follow up on overdue payments' },
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Enhance your marketing efforts with automated content creation, analysis, and campaign management.',
    services: [
      { id: 'mkt-1', title: 'Conduct in-depth audience and competitor research 24/7' },
      { id: 'mkt-2', title: 'Create, schedule, and post engaging content tailored to your brand' },
      { id: 'mkt-3', title: 'Respond instantly to customer messages on social media or email' },
      { id: 'mkt-4', title: 'Generate innovative campaign ideas to stay ahead of market trends' },
      { id: 'mkt-5', title: 'Provide detailed performance reports with suggestions for improvement' },
      { id: 'mkt-6', title: 'Conduct outbound calls for surveys or campaign promotions' },
    ]
  }
];

const DepartmentalServicesSection = () => {
  const [activeTab, setActiveTab] = useState(departments[0].id);

  return (
    <section id="departmental-services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Every Department</h2>
          <p className="text-gray-600 text-lg">
            Our AI agents can transform every department in your organization with tailored automation solutions
          </p>
        </div>

        <Tabs 
          defaultValue={departments[0].id} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="h-auto flex-wrap gap-2 bg-transparent p-0">
              {departments.map((dept) => (
                <TabsTrigger 
                  key={dept.id}
                  value={dept.id}
                  className={cn(
                    "rounded-full px-6 py-2 text-sm transition-all",
                    activeTab === dept.id 
                      ? "bg-nexus-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {dept.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {departments.map((department) => (
            <TabsContent 
              key={department.id}
              value={department.id}
              className="mt-0 animate-fade-in"
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold mb-4 text-nexus-800">{department.title}</h3>
                    <p className="text-gray-600 mb-6">{department.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {department.services.map((service) => (
                        <div 
                          key={service.id} 
                          className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
                        >
                          <div className="h-6 w-6 rounded-full bg-nexus-100 flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-nexus-600" />
                          </div>
                          <p className="text-gray-700">{service.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DepartmentalServicesSection;
