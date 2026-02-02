import { Twitter, Linkedin, Instagram } from "lucide-react";
import rupeshImg from "@/assets/speaker-rupesh.jpg";
import swikarImg from "@/assets/speaker-swikar.jpg";
import sanjuImg from "@/assets/speaker-sanju.jpg";
import peggyImg from "@/assets/speaker-peggy.jpg";

const speakers = [
  {
    name: "Rupesh Regmi",
    role: "Vision, China Opportunity & Decision-Making",
    image: rupeshImg,
    featured: true,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Swikar",
    role: "Content Creation & Future Skills",
    image: swikarImg,
    featured: true,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Sanju",
    role: "Scholarships & Clarity",
    image: sanjuImg,
    featured: false,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Peggy",
    role: "China, Culture & Mini Lesson",
    image: peggyImg,
    featured: false,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 opacity-0-initial animate-fade-up">
            Meet the Experts
          </span>
          <h2 className="display-lg mb-6 opacity-0-initial animate-fade-up delay-100">
            <span className="text-secondary-foreground">Speakers</span>
            <span className="text-secondary-foreground"> & </span>
            <span className="text-primary">Mentors</span>
          </h2>
          <p className="body-lg text-secondary-foreground/70 opacity-0-initial animate-fade-up delay-200">
            Learn from industry leaders who've guided thousands to success
          </p>
        </div>
        
        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.name}
              className={`group text-center opacity-0-initial animate-fade-up ${speaker.featured ? 'lg:scale-105' : ''}`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image Container */}
              <div className={`relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] ${speaker.featured ? 'ring-2 ring-primary/50' : ''}`}>
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Info */}
              <h3 className={`font-display text-xl font-bold mb-2 ${speaker.featured ? 'text-primary' : 'text-secondary-foreground'}`}>
                {speaker.name}
              </h3>
              <p className="text-secondary-foreground/60 text-sm mb-4">
                {speaker.role}
              </p>
              
              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a 
                  href={speaker.social.twitter} 
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4 text-secondary-foreground/60" />
                </a>
                <a 
                  href={speaker.social.linkedin} 
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 text-secondary-foreground/60" />
                </a>
                <a 
                  href={speaker.social.instagram} 
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4 text-secondary-foreground/60" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Closing Line */}
        <div className="text-center opacity-0-initial animate-fade-up delay-700">
          <p className="font-display text-2xl md:text-3xl text-secondary-foreground/80 italic">
            Don't listen to us. <span className="text-primary font-semibold not-italic">Go test yourself.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
