import { Button } from "@/components/ui/button";
import { Gift, Heart, Share2, MessageCircle, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Heart,
    step: "01",
    title: "Follow",
    description: "@wiseadmit on Instagram",
  },
  {
    icon: Share2,
    step: "02",
    title: "Share",
    description: "Event post on your story",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Tag",
    description: "3 friends who should attend",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Assessment",
    description: "Take WiseScore at the event",
  },
];

const GiveawaySection = () => {
  return (
    <section id="giveaway" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4 tracking-widest opacity-0-initial animate-fade-up">
              Giveaway
            </span>
            <h2 className="display-lg mb-4 opacity-0-initial animate-fade-up delay-100">
              <span className="text-foreground">Win a </span>
              <span className="text-primary italic">₹45k Drone!</span>
              <span className="ml-2">🚀</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-xl mx-auto opacity-0-initial animate-fade-up delay-200">
              The more you engage, the more chances you get to win!
            </p>
          </div>
          
          {/* Giveaway Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl opacity-0-initial animate-fade-up delay-300">
            {/* Prize Banner */}
            <div className="flex items-center justify-center gap-4 mb-10 pb-8 border-b border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Grand Prize</p>
                <p className="text-2xl font-display font-bold text-foreground">DJI Drone Worth ₹45,000</p>
              </div>
            </div>
            
            {/* How to Enter */}
            <h3 className="text-center font-display text-xl font-semibold text-foreground mb-8">
              How to Enter
            </h3>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative bg-muted/50 rounded-2xl p-5 text-center hover:bg-muted transition-colors duration-300 opacity-0-initial animate-fade-up"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <span className="absolute top-3 left-3 text-xs font-bold text-primary">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-display text-base font-bold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Button variant="cta" size="xl" className="mb-4 shadow-lg">
                <Gift className="w-5 h-5 mr-2" />
                Join the Giveaway
              </Button>
              
              <p className="text-sm text-muted-foreground">
                🎁 200+ participants • 🎉 Winner announced on Feb 14
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
