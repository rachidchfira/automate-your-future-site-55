import { Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      { id: 'cs-1', title: 'Automated onboarding workflows for new customers' },
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
  },
  {
    id: 'executive',
    title: 'Executive Support',
    description: 'Empower executive decision-making with intelligent scheduling, communication management, and data analysis.',
    services: [
      { id: 'exec-1', title: 'Create daily schedules with tasks, deadlines, and meeting reminders' },
      { id: 'exec-2', title: 'Manage inboxes and ensure critical messages are prioritized' },
      { id: 'exec-3', title: 'Coordinate meeting schedules and handle follow-ups' },
      { id: 'exec-4', title: 'Automate report generation for key business performance metrics' },
      { id: 'exec-5', title: 'Retrieve and organize data for executive decision-making' },
      { id: 'exec-6', title: 'Manage high-priority calls and handle stakeholder communication' },
    ]
  },
  {
    id: 'product',
    title: 'Product Development',
    description: 'Accelerate product innovation with automated research, feedback analysis, and development workflows.',
    services: [
      { id: 'prod-1', title: 'Research customer needs and market trends to inspire new features' },
      { id: 'prod-2', title: 'Gather and analyze user feedback to refine existing products' },
      { id: 'prod-3', title: 'Track development milestones and send regular progress updates' },
      { id: 'prod-4', title: 'Automate testing workflows to ensure product quality' },
      { id: 'prod-5', title: 'Prepare go-to-market strategies and documentation for new launches' },
      { id: 'prod-6', title: 'Conduct outbound calls to gather feedback on prototypes' },
    ]
  },
  {
    id: 'it',
    title: 'IT and Support',
    description: 'Enhance technical operations with automated monitoring, incident resolution, and system maintenance.',
    services: [
      { id: 'it-1', title: 'Monitor and maintain system performance and uptime' },
      { id: 'it-2', title: 'Automate incident tracking and resolution workflows' },
      { id: 'it-3', title: 'Provide real-time assistance for technical issues or inquiries' },
      { id: 'it-4', title: 'Schedule security updates and data backups' },
      { id: 'it-5', title: 'Streamline integration processes for new tools and software' },
      { id: 'it-6', title: 'Manage inbound technical support calls and coordinate follow-ups' },
    ]
  }
];

const DepartmentalServicesSection = () => {
  return (
    <section id="departmental-services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Every Department</h2>
          <p className="text-gray-600 text-lg mb-6">
            Our AI agents can transform every department in your organization with tailored automation solutions
          </p>
        </div>

        <div className="relative px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {departments.map((department) => (
                <CarouselItem key={department.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full border border-gray-200 rounded-xl overflow-hidden bg-white p-6 transition-all hover:shadow-md flex flex-col">
                    <h3 className="text-xl font-semibold text-nexus-600 mb-3">{department.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{department.description}</p>
                    
                    <div className="space-y-3">
                      {department.services.map((service) => (
                        <div key={service.id} className="flex items-start gap-2">
                          <div className="mt-0.5 text-nexus-500 flex-shrink-0">
                            <Check size={16} />
                          </div>
                          <span className="text-gray-700 text-sm">{service.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none bg-white border-nexus-200 hover:bg-nexus-50 hover:border-nexus-300" />
              <CarouselNext className="static transform-none bg-white border-nexus-200 hover:bg-nexus-50 hover:border-nexus-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DepartmentalServicesSection;
