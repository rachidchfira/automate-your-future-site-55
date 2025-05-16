
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState("ecommerce");
  
  const caseStudies: Record<string, CaseStudy[]> = {
    ecommerce: [
      {
        id: "cs1",
        title: "Increasing Conversions with AI-Powered Recommendations",
        company: "FashionNova",
        industry: "E-commerce / Fashion",
        challenge: "FashionNova struggled with cart abandonment and wanted to increase average order value.",
        solution: "We implemented an AI recommendation engine that analyzes browsing history and purchase patterns to suggest relevant products.",
        results: ["32% increase in average order value", "24% reduction in cart abandonment", "18% increase in revenue within 3 months"],
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      }
    ],
    finance: [
      {
        id: "cs2",
        title: "Automating Fraud Detection for Financial Transactions",
        company: "SecureBank",
        industry: "Banking & Finance",
        challenge: "SecureBank needed to improve their fraud detection while reducing the high rate of false positives.",
        solution: "We developed a machine learning system that analyzes transaction patterns and customer behavior to accurately detect fraudulent activities.",
        results: ["85% reduction in false positives", "98.7% detection rate of actual fraud", "$2.3M saved in prevented fraud annually"],
        image: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // New Finance image
      }
    ],
    healthcare: [
      {
        id: "cs3",
        title: "Streamlining Patient Care with AI Scheduling",
        company: "MediCare Clinic",
        industry: "Healthcare",
        challenge: "MediCare Clinic faced inefficient scheduling leading to long wait times and unhappy patients.",
        solution: "We created an AI scheduling system that optimizes appointment slots based on procedure type, staff availability, and patient preferences.",
        results: ["40% reduction in patient wait times", "25% increase in appointment capacity", "93% patient satisfaction rate"],
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" // Different Healthcare image
      }
    ]
  };

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600 text-lg">
            See how our AI automation solutions have helped businesses achieve their goals and drive measurable results.
          </p>
        </div>
        
        <Tabs defaultValue="ecommerce" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(caseStudies).map(([category, studies]) => (
            <TabsContent key={category} value={category} className="w-full">
              {studies.map((study) => (
                <Card key={study.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-64 md:h-auto relative">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5">
                      <CardContent className="p-6 md:p-8">
                        <div className="mb-4">
                          <span className="text-sm font-medium text-nexus-600 uppercase tracking-wider">{study.industry}</span>
                          <h3 className="text-2xl font-bold mt-1">{study.title}</h3>
                          <p className="text-gray-600 mt-2">{study.company}</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900">Results:</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                              {study.results.map((result, i) => (
                                <li key={i}>{result}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
