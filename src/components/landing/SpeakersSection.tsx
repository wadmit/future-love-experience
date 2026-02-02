import { useState } from "react";

const speakers = [
  {
    name: "Rupesh Regmi",
    role: "CEO & Study Abroad Visionary",
    topic: "Vision & China Opportunities",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    funFact: "Has helped 5000+ students study abroad",
  },
  {
    name: "Swikar",
    role: "China Education & Future Skills Expert",
    topic: "Content Creation & Future Skills",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
    funFact: "Built a 100K+ follower community",
  },
  {
    name: "Lucy Winner",
    role: "Social Media Guru & Giveaway Host",
    topic: "Drone Giveaway Host",
    duration: "Special",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    funFact: "Makes every event unforgettable",
  },
  {
    name: "Sanju",
    role: "Scholarships & Clarity Specialist",
    topic: "Scholarship Assessment Sessions",
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    funFact: "Secured ₹2Cr+ in scholarships for students",
  },
  {
    name: "Peggy",
    role: "Chinese Culture Ambassador",
    topic: "China, Culture & Mini Lesson",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    funFact: "Native speaker with 10+ years teaching",
  },
];

const SpeakersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 opacity-0-initial animate-fade-up">
            Learn from the Best
          </span>
          <h2 className="display-lg text-foreground mb-6 opacity-0-initial animate-fade-up delay-100">
            Speakers & Mentors
          </h2>
          <p className="body-lg text-muted-foreground opacity-0-initial animate-fade-up delay-200">
            Meet the visionaries who will guide you on your journey to studying in China.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="group relative bg-card rounded-2xl overflow-hidden card-hover opacity-0-initial animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                
                {/* Fun Fact Overlay */}
                <div 
                  className={`absolute inset-0 bg-primary/90 flex items-center justify-center p-4 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-primary-foreground text-center font-medium">
                    ✨ {speaker.funFact}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <h3 className="font-display text-lg font-bold mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-2">
                  {speaker.role}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-primary-foreground/20">
                    {speaker.duration}
                  </span>
                  <span className="text-primary-foreground/70 truncate">
                    {speaker.topic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
