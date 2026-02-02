import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Instagram } from "lucide-react";
import droneGiveawayImg from "@/assets/drone-giveaway-new.png";

const steps = [
  {
    emoji: "💕",
    title: "Follow WiseAdmit",
    description: "Follow @wiseadmit on Instagram",
  },
  {
    emoji: "📲",
    title: "Share the Event",
    description: "Share the event post on your story",
  },
  {
    emoji: "💬",
    title: "Comment & Tag",
    description: "Tag 3 friends who should attend",
  },
  {
    emoji: "👥",
    title: "Take WiseScore",
    description: "Take the WiseScore assessment at the event",
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
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-8 lg:gap-12 items-center">
            {/* Left Column - Text & Steps */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <Badge className="bg-gold text-gold-foreground mb-4 text-sm px-4 py-1.5 opacity-0-initial animate-fade-up">
                🎁 Mega Giveaway
              </Badge>
              
              {/* Headline */}
              <h2 className="display-lg mb-4 opacity-0-initial animate-fade-up delay-100">
                Win a 45K Drone!
              </h2>
              
              {/* Description */}
              <p className="body-lg text-white/80 mb-8 opacity-0-initial animate-fade-up delay-200">
                The more you engage, the more chances you get to win!
              </p>
              
              {/* How to Enter */}
              <h3 className="text-lg font-semibold text-white/90 mb-4 opacity-0-initial animate-fade-up delay-300">
                How to Enter:
              </h3>
              
              {/* Vertical Steps */}
              <div className="space-y-3 mb-8">
                {steps.map((step, index) => {
                  const isFollowStep = step.title === "Follow WiseAdmit";
                  const content = (
                    <>
                      <span className="text-2xl flex-shrink-0">{step.emoji}</span>
                      <div>
                        <h4 className="font-display text-base font-bold text-white">
                          {step.title}
                        </h4>
                        <p className="text-sm text-white/70">
                          {step.description}
                        </p>
                      </div>
                    </>
                  );
                  
                  return isFollowStep ? (
                    <a
                      key={step.title}
                      href="https://instagram.com/wiseadmit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-colors duration-300 opacity-0-initial animate-fade-up cursor-pointer"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={step.title}
                      className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-colors duration-300 opacity-0-initial animate-fade-up"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
              
              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0-initial animate-fade-up delay-700">
                <Button variant="gold" size="lg">
                  <Gift className="w-5 h-5 mr-2" />
                  Join the Giveaway
                </Button>
              </div>
              
              <p className="text-sm text-white/60 mt-4 opacity-0-initial animate-fade-up delay-800">
                🎁 Already 200+ participants • 🎉 Winner announced on Feb 14
              </p>
            </div>
            
            {/* Right Column - Drone Image */}
            <div className="order-1 lg:order-2 relative flex justify-center opacity-0-initial animate-fade-up">
              {/* Golden glow effect behind drone */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-90" />
              
              {/* Drone Image */}
              <div className="relative">
                <img 
                  src={droneGiveawayImg} 
                  alt="Win a ₹45K Drone" 
                  className="relative w-full max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
                />
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-gold text-gold-foreground rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-xl font-bold">₹45,000</div>
                  <div className="text-xs opacity-80">Grand Prize Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
