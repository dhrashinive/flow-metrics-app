import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface UsageCardProps {
  title: string;
  value: string;
  unit: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning";
}

export const UsageCard = ({ title, value, unit, icon, trend, variant = "default" }: UsageCardProps) => {
  const variantStyles = {
    default: "border-border",
    primary: "border-primary/20 bg-primary/5",
    success: "border-success/20 bg-success/5",
    warning: "border-warning/20 bg-warning/5",
  };

  const iconStyles = {
    default: "text-primary",
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
  };

  return (
    <Card className={`shadow-card transition-all hover:shadow-elevated ${variantStyles[variant]}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={iconStyles[variant]}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">{value}</span>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
        {trend && (
          <p className={`text-xs mt-2 ${trend.isPositive ? "text-success" : "text-destructive"}`}>
            {trend.isPositive ? "↓" : "↑"} {Math.abs(trend.value)}% vs last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};
