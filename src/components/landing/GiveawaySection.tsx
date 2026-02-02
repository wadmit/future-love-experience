import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const steps = [
  {
    title: "Follow WiseAdmit",
    emoji: "💕",
  },
  {
    title: "Share the Event",
    emoji: "📲",
  },
  {
    title: "Comment & Tag",
    emoji: "💬",
  },
  {
    title: "Bring Friends",
    emoji: "👥",
  },
];

const GiveawaySection = () => {
  return (
    <section id="giveaway" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-foreground/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gift Icon */}
          <div className="flex justify-center mb-8 opacity-0-initial animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg">
              <Gift className="w-8 h-8 text-gold-foreground" />
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="display-lg mb-4 opacity-0-initial animate-fade-up delay-100">
            Win a 45k Drone! 🚀
          </h2>
          
          <p className="body-lg text-primary-foreground/80 max-w-xl mx-auto mb-12 opacity-0-initial animate-fade-up delay-200">
            The more you engage, the more chances you get to win!
          </p>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl py-8 px-4 hover:bg-primary-foreground/15 transition-colors duration-300 opacity-0-initial animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="text-3xl mb-3">{step.emoji}</div>
                <h3 className="font-semibold text-primary-foreground">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="opacity-0-initial animate-fade-up delay-600">
            <Button variant="gold" size="xl" className="shadow-lg mb-6">
              <Gift className="w-5 h-5 mr-2" />
              Join the Giveaway
            </Button>
            
            <p className="text-sm text-primary-foreground/70">
              🎁 Already 200+ participants • 🎉 Winner announced on Feb 14
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
