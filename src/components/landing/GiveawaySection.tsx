import { Button } from "@/components/ui/button";
import { Rocket, Share2, MessageCircle, Users, Instagram } from "lucide-react";

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
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sparkle/Confetti Effect */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full opacity-40"
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-8 opacity-0-initial animate-fade-up">
            <Rocket className="w-5 h-5" />
            <span className="font-semibold">Grand Prize</span>
          </div>
          
          {/* Headline */}
          <h2 className="display-lg mb-4 opacity-0-initial animate-fade-up delay-100">
            Win a <span className="text-gold">₹45K</span> Drone! 🚀
          </h2>
          
          {/* Subtext */}
          <p className="body-lg text-secondary-foreground/80 mb-12 max-w-2xl mx-auto opacity-0-initial animate-fade-up delay-200">
            Follow WiseAdmit, share, comment, bring friends — more effort = more chances to win!
          </p>
          
          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-6 opacity-0-initial animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="opacity-0-initial animate-fade-up delay-600">
            <Button variant="gold" size="xl" className="mb-6">
              Join the Giveaway
            </Button>
            
            <p className="text-sm text-secondary-foreground/60">
              Winner announced live on February 14. Must be present to win. T&C apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
