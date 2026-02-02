import { Button } from "@/components/ui/button";
import { Gift, Heart, Share2, MessageCircle, Users } from "lucide-react";
import droneGiveawayImg from "@/assets/drone-giveaway.webp";

const steps = [
  {
    icon: Heart,
    title: "Follow WiseAdmit",
    description: "Follow @wiseadmit on Instagram",
    emoji: "💕",
  },
  {
    icon: Share2,
    title: "Share the Event",
    description: "Share the event post on your story",
    emoji: "📲",
  },
  {
    icon: MessageCircle,
    title: "Comment & Tag",
    description: "Tag 3 friends who should attend",
    emoji: "💬",
  },
  {
    icon: Users,
    title: "Take WiseScore",
    description: "Take the WiseScore assessment at the event",
    emoji: "👥",
  },
];

const GiveawaySection = () => {
  return (
    <section id="giveaway" className="section-padding text-white relative overflow-hidden" style={{ backgroundColor: '#001D46' }}>
      {/* Decorative floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-foreground/30 rounded-full"
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
        <div className="max-w-5xl mx-auto">
          {/* Hero Section with Drone Image and Text */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
            {/* Drone Image */}
            <div className="relative flex-shrink-0 opacity-0-initial animate-fade-up">
              {/* Golden glow effect behind drone */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-75" />
              <img 
                src={droneGiveawayImg} 
                alt="Win a ₹45K Drone" 
                className="relative w-64 h-auto md:w-80 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="display-lg mb-4 opacity-0-initial animate-fade-up delay-100">
                Win a ₹45k Drone!
              </h2>
              <p className="body-lg text-white/80 max-w-md opacity-0-initial animate-fade-up delay-200">
                The more you engage, the more chances you get to win!
              </p>
            </div>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-colors duration-300 opacity-0-initial animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="text-3xl mb-3">{step.emoji}</div>
                <h3 className="font-display text-lg font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center opacity-0-initial animate-fade-up delay-600">
            <Button variant="gold" size="xl" className="mb-6 shadow-lg">
              <Gift className="w-5 h-5 mr-2" />
              Join the Giveaway
            </Button>
            
            <p className="text-sm text-white/70">
              🎁 Already 200+ participants • 🎉 Winner announced on Feb 14
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
