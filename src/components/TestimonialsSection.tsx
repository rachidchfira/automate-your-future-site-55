import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "NixusAi transformed our customer service operations. The AI chatbot they implemented handles 80% of inquiries automatically, allowing our team to focus on complex cases. Our customer satisfaction ratings have never been higher.",
      author: "Sarah Johnson",
      position: "Customer Service Director",
      company: "TechStream Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      quote: "The workflow automation solution provided by NixusAi has been a game-changer. We've reduced processing time by 65% and eliminated most human errors. The ROI has been incredible.",
      author: "Michael Chang",
      position: "Operations Manager",
      company: "GlobalTrade Ltd",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      quote: "Working with NixusAi was seamless from start to finish. Their team took the time to understand our unique challenges and designed a custom solution that perfectly addressed our needs. I couldn't be happier with the results.",
      author: "Emily Rodriguez",
      position: "Marketing Director",
      company: "BrandForward",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Hear from businesses that have transformed their operations with our AI automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md overflow-hidden card-hover">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-nexus-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.352 4C4.456 7.456 1.646 13.825 2.228 20.606c3.213-3.857 5.868-6.312 7.963-7.368-0.305 3.747-2.701 6.522-7.228 8.324 2.471 5.413 7.588 7.899 10.042 8.532-0.64-2.104-0.598-5.033 0.125-8.778 1.044-0.245 2.167-0.371 3.37-0.371 8.209 0 13.5-6.494 13.5-13.5 0-6.139-4.478-11.093-10.543-11.93C17.667 4.147 14.319 4 9.352 4zm1.761 4.074c3.949 0 8.74 1.105 8.74 7.426 0 4.33-3.19 7.426-7.426 7.426-0.98 0-1.919-0.145-2.817-0.431 1.172-1.584 1.712-3.861 0.696-6.067-2.224 0.907-4.188 1.038-5.887 0.394 0.028-4.543 1.607-8.748 6.694-8.748z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
