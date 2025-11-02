import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";

const alerts = [
  {
    type: "warning",
    message: "Water usage 15% above average for this time of month",
    icon: AlertTriangle,
  },
  {
    type: "info",
    message: "Scheduled maintenance on Thursday 2-4 PM",
    icon: Info,
  },
  {
    type: "success",
    message: "You saved 120L this week compared to last week",
    icon: CheckCircle,
  },
];

export const AlertsSection = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Alerts & Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          const variantClass =
            alert.type === "warning"
              ? "border-warning/50 bg-warning/5"
              : alert.type === "success"
              ? "border-success/50 bg-success/5"
              : "border-primary/50 bg-primary/5";

          const iconClass =
            alert.type === "warning"
              ? "text-warning"
              : alert.type === "success"
              ? "text-success"
              : "text-primary";

          return (
            <Alert key={index} className={variantClass}>
              <Icon className={`h-4 w-4 ${iconClass}`} />
              <AlertDescription className="ml-2">{alert.message}</AlertDescription>
            </Alert>
          );
        })}
      </CardContent>
    </Card>
  );
};
