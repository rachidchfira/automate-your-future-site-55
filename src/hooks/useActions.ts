
import { toast } from "sonner";

export const useActions = () => {
  const handleGetStarted = () => {
    toast.success("Thank you for your interest! We'll contact you shortly.");
  };

  const handleScheduleDemo = () => {
    toast.success("Demo request received! Our team will reach out to schedule.");
  };

  const handleContactUs = () => {
    toast.success("Thank you for contacting us! We'll respond shortly.");
  };

  const handleFreeTrial = () => {
    toast.success("Your free trial has been activated! Check your email for details.");
  };

  const handleContactSales = () => {
    toast.success("Our sales team has been notified and will contact you soon.");
  };

  return {
    handleGetStarted,
    handleScheduleDemo,
    handleContactUs,
    handleFreeTrial,
    handleContactSales
  };
};
