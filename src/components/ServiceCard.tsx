
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, className }) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-nexus-100 flex items-center justify-center mb-4">
          <div className="text-nexus-600">{icon}</div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
