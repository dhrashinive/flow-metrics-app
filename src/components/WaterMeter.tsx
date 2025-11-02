import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const WaterMeter = () => {
  const currentUsage = 2847;
  const monthlyLimit = 5000;
  const percentage = (currentUsage / monthlyLimit) * 100;

  return (
    <Card className="shadow-elevated bg-gradient-water border-0">
      <CardHeader>
        <CardTitle className="text-primary-foreground">Current Month Usage</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary-foreground mb-2 animate-pulse-glow">
            {currentUsage.toLocaleString()}
          </div>
          <div className="text-primary-foreground/80">liters used</div>
        </div>
        
        <div className="space-y-2">
          <Progress value={percentage} className="h-3 bg-primary-foreground/20" />
          <div className="flex justify-between text-sm text-primary-foreground/80">
            <span>{percentage.toFixed(1)}% of monthly limit</span>
            <span>{monthlyLimit.toLocaleString()}L limit</span>
          </div>
        </div>

        <div className="pt-4 border-t border-primary-foreground/20">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-foreground">124</div>
              <div className="text-xs text-primary-foreground/70">Liters today</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-foreground">2,153</div>
              <div className="text-xs text-primary-foreground/70">Liters remaining</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
