import { GraduationCap, Palette, Mic, Camera, Gift, Gamepad2, Plane } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "5-Minute Scholarship Assessment",
    description: "Get personalized scholarship guidance tailored to your profile in just 5 minutes.",
    emoji: "🎓",
  },
  {
    icon: Palette,
    title: "Chinese Calligraphy & Paper Cutting",
    description: "Experience traditional Chinese art forms and create your own masterpiece.",
    emoji: "🖌",
  },
  {
    icon: Mic,
    title: "Talks by Mentors & Experts",
    description: "Learn from industry leaders and education visionaries about your future.",
    emoji: "🎤",
  },
  {
    icon: Camera,
    title: "Photo & Reel Moments",
    description: "Capture Instagram-worthy memories at our themed photo corners.",
    emoji: "📸",
  },
  {
    icon: Gift,
    title: "On-spot Admissions",
    description: "Apply and receive admission decisions right at the event.",
    emoji: "🎁",
  },
  {
    icon: Gamepad2,
    title: "Games & Interactive Activities",
    description: "Face painting, mini challenges, and fun games for all attendees.",
    emoji: "🎮",
  },
  {
    icon: Plane,
    title: "₹45K Drone Giveaway",
    description: "Participate for a chance to win an amazing drone worth ₹45,000!",
    emoji: "🎁",
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-valentine-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 opacity-0-initial animate-fade-up">
            What Awaits You
          </span>
          <h2 className="display-lg text-foreground mb-6 opacity-0-initial animate-fade-up delay-100">
            The Experience
          </h2>
          <p className="body-lg text-muted-foreground opacity-0-initial animate-fade-up delay-200">
            An evening packed with culture, connections, and opportunities. Here's what makes this event unforgettable.
          </p>
        </div>
        
        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              className="group bg-background rounded-2xl p-6 lg:p-8 card-hover border border-border/50 opacity-0-initial animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl">{experience.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
