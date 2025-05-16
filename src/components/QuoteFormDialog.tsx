import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { storeQuoteRequest } from '@/lib/supabase';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface QuoteFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  selectedDepartments: string[];
}

const QuoteFormDialog = ({ isOpen, onClose, selectedPlan, selectedDepartments }: QuoteFormDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: '',
    employeeCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (submissionError) setSubmissionError(null);
  };

  const handleEmployeeCountChange = (value: string) => {
    setFormData(prev => ({ ...prev, employeeCount: value }));
    // Clear error when user makes a change
    if (submissionError) setSubmissionError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the Tally form
    window.location.href = 'https://tally.so/r/3j2D0Q';
    
    // Optionally, you might want to still show a submitting state or close the dialog
    // For simplicity, this example directly redirects.
    // If you need to perform actions before redirecting (like showing a toast or closing the dialog),
    // you can add them here. For example:
    // setIsSubmitting(true);
    // toast({ title: "Redirecting to form..." });
    // onClose(); // Close the dialog before redirecting
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
          <DialogDescription>
            {selectedPlan 
              ? `Get a personalized quote for our ${selectedPlan} plan` 
              : 'Get a personalized quote for our services'}
            {selectedDepartments.length > 0 && (
              <>
                <br />
                <span className="text-sm text-gray-500">
                  Selected departments: {selectedDepartments.join(', ')}
                </span>
              </>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {submissionError && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{submissionError}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Smith" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john@company.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input 
                id="company" 
                name="company" 
                placeholder="Your Company" 
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="(555) 123-4567" 
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="employeeCount">Company Size</Label>
            <Select 
              value={formData.employeeCount} 
              onValueChange={handleEmployeeCountChange}
            >
              <SelectTrigger id="employeeCount">
                <SelectValue placeholder="Select number of employees" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your specific needs or requirements" 
              value={formData.message}
              onChange={handleChange}
              className="min-h-[100px]"
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-nexus-600 hover:bg-nexus-700" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormDialog;
