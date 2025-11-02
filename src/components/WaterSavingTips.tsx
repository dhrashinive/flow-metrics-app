import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const tips = [
  "Fix leaky faucets - a single drip can waste 20 gallons per day",
  "Take shorter showers - reduce by 2 minutes to save 150 gallons/month",
  "Run dishwasher only when full - saves up to 320 gallons/month",
  "Install low-flow showerheads - reduce usage by up to 50%",
  "Water plants early morning - reduces evaporation by 30%",
];

export const WaterSavingTips = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-warning" />
          Water Saving Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-semibold text-primary">{index + 1}</span>
              </div>
              <span className="text-sm text-muted-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
