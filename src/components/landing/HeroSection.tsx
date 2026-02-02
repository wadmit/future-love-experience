import { Button } from "@/components/ui/button";
import { Heart, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-valentine-rose opacity-60 animate-float" />
      <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-gold opacity-50 animate-float delay-200" />
      <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-primary opacity-40 animate-float delay-400" />
      
      <div className="container-wide relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-valentine-pink/50 border border-valentine-rose/30 opacity-0-initial animate-fade-up">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">Valentine's Day + Chinese New Year</span>
            </div>
            
            {/* Headline */}
            <h1 className="display-xl text-foreground opacity-0-initial animate-fade-up delay-100">
              Fall in Love with{" "}
              <span className="text-primary">Your Future</span>
              <span className="inline-block ml-2 animate-heart-beat">💖</span>
            </h1>
            
            {/* Subheadline */}
            <p className="display-md text-secondary font-normal opacity-0-initial animate-fade-up delay-200">
              An Immersive China Experience
            </p>
            
            {/* Description */}
            <p className="body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0-initial animate-fade-up delay-300">
              Celebrate Chinese New Year, explore study opportunities in China, meet mentors, 
              and discover your path — all in one extraordinary evening.
            </p>
            
            {/* Event Details */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground opacity-0-initial animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">February 14, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">WiseAdmit Landmark, Chitwan</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0-initial animate-fade-up delay-500">
              <Button variant="hero" size="xl" className="btn-glow">
                Register for the Event
              </Button>
              <Button variant="heroOutline" size="xl">
                Become an Event Ambassador
              </Button>
            </div>
          </div>
          
          {/* Right - Hero Image */}
          <div className="relative opacity-0-initial animate-fade-up delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="WiseAdmit Event - Fall in Love with Your Future" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-2xl p-4 shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">₹45K</p>
                  <p className="text-sm text-muted-foreground">Drone Giveaway</p>
                </div>
              </div>
            </div>
            
            {/* Lantern Decoration */}
            <div className="absolute -top-6 -right-4 w-16 h-16 lantern-glow rounded-full bg-gold/30 animate-pulse-glow hidden md:block" />
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
