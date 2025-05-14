
import { toast } from "@/components/ui/use-toast";

export const useActions = () => {
  const handleGetStarted = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you shortly with next steps.",
    });
  };

  const handleScheduleDemo = () => {
    toast({
      title: "Demo Request Received",
      description: "Our team will reach out to schedule your personalized demo.",
    });
  };

  const handleContactUs = () => {
    toast({
      title: "Message Received",
      description: "Thank you for contacting us! We'll respond shortly.",
    });
  };

  const handleFreeTrial = () => {
    toast({
      title: "Free Trial Activated",
      description: "Check your email for details on how to get started.",
    });
  };

  const handleContactSales = () => {
    toast({
      title: "Sales Request Submitted",
      description: "Our sales team will contact you soon to discuss your needs.",
    });
  };

  return {
    handleGetStarted,
    handleScheduleDemo,
    handleContactUs,
    handleFreeTrial,
    handleContactSales
  };
};
