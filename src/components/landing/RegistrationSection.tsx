import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 lg:p-16 shadow-elevated border border-border/50 text-center">
            {/* Sparkle Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8 opacity-0-initial animate-fade-up">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            
            {/* Headline */}
            <h2 className="display-lg text-foreground mb-6 opacity-0-initial animate-fade-up delay-100">
              Reserve Your Spot
            </h2>
            
            {/* Description */}
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0-initial animate-fade-up delay-200">
              Scholarships, culture, connections — and your first step to China. 
              Join hundreds of students and parents at this transformative event.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-initial animate-fade-up delay-300">
              <Button variant="cta" size="xl" className="group">
                Register Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Become an Event Ambassador
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-border/50 opacity-0-initial animate-fade-up delay-400">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">🎓</span>
                <span className="text-sm">Free Entry</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">👨‍👩‍👧</span>
                <span className="text-sm">Parents Welcome</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">🎁</span>
                <span className="text-sm">₹45K Giveaway</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-lg">📝</span>
                <span className="text-sm">On-spot Admissions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
