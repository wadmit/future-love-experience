import { Button } from "@/components/ui/button";
import { Gift, Instagram, Share2, MessageCircle, Users } from "lucide-react";

const steps = [
  {
    icon: Instagram,
    title: "Follow",
    description: "Follow WiseAdmit on Instagram",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Share this event with friends",
  },
  {
    icon: MessageCircle,
    title: "Comment",
    description: "Comment on our giveaway post",
  },
  {
    icon: Users,
    title: "Bring Friends",
    description: "More friends = More chances!",
  },
];

const GiveawaySection = () => {
  return (
    <section id="giveaway" className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-secondary-foreground/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Grand Prize Badge */}
          <div className="flex justify-center mb-8 opacity-0-initial animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary-foreground/10 border border-gold/30 px-5 py-2.5 rounded-full">
              <Gift className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">Grand Prize</span>
            </div>
          </div>
          
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0-initial animate-fade-up delay-100">
              Win a <span className="text-gold">₹45K</span> Drone! 🚀
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto opacity-0-initial animate-fade-up delay-200">
              Follow WiseAdmit, share, comment, bring friends — more effort = more chances to win!
            </p>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 text-center hover:bg-secondary-foreground/10 transition-all duration-300 opacity-0-initial animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-secondary-foreground/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 text-secondary-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/60">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* CTA */}
          <div className="text-center opacity-0-initial animate-fade-up delay-600">
            <Button variant="gold" size="xl" className="mb-6 shadow-lg px-10">
              Join the Giveaway
            </Button>
            
            <p className="text-sm text-secondary-foreground/50">
              Winner announced live on February 14. Must be present to win. T&C apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
