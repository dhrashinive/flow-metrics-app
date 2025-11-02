import { UsageCard } from "@/components/UsageCard";
import { UsageChart } from "@/components/UsageChart";
import { AlertsSection } from "@/components/AlertsSection";
import { WaterMeter } from "@/components/WaterMeter";
import { WaterSavingTips } from "@/components/WaterSavingTips";
import { Droplets, TrendingDown, DollarSign, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-water flex items-center justify-center">
              <Droplets className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">AquaMetrics</h1>
              <p className="text-sm text-muted-foreground">Smart Water Usage Analytics</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <UsageCard
              title="Daily Average"
              value="342"
              unit="L/day"
              icon={<Droplets className="h-5 w-5" />}
              trend={{ value: 12, isPositive: true }}
              variant="primary"
            />
            <UsageCard
              title="Monthly Usage"
              value="2,847"
              unit="liters"
              icon={<TrendingDown className="h-5 w-5" />}
              trend={{ value: 8, isPositive: true }}
              variant="success"
            />
            <UsageCard
              title="Current Cost"
              value="₹2,374"
              unit="INR"
              icon={<DollarSign className="h-5 w-5" />}
              variant="default"
            />
            <UsageCard
              title="Last Reading"
              value="2m"
              unit="ago"
              icon={<Clock className="h-5 w-5" />}
              variant="default"
            />
          </div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - 2 cols */}
            <div className="space-y-6 lg:col-span-2">
              <WaterMeter />
              <UsageChart />
              <AlertsSection />
            </div>

            {/* Right Column - 1 col */}
            <div className="space-y-6">
              <WaterSavingTips />
              
              {/* Quick Stats */}
              <div className="grid gap-4">
                <div className="bg-card rounded-lg p-6 shadow-card border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Weekly Savings</div>
                  <div className="text-3xl font-bold text-success">120L</div>
                  <div className="text-xs text-muted-foreground mt-1">vs last week</div>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-card border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Efficiency Score</div>
                  <div className="text-3xl font-bold text-primary">87%</div>
                  <div className="text-xs text-success mt-1">+5% improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-6 bg-card/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 AquaMetrics. Helping you conserve water, one drop at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
