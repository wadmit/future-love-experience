import { Twitter, Linkedin, Instagram } from "lucide-react";
import rupeshImg from "@/assets/speaker-rupesh.jpg";
import swikarImg from "@/assets/speaker-swikar.jpg";
import sanjuImg from "@/assets/speaker-sanju.jpg";
import peggyImg from "@/assets/speaker-peggy.jpg";
const speakers = [{
  name: "Rupesh Regmi",
  role: "Vision, China Opportunity & Decision-Making",
  image: rupeshImg,
  featured: true,
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  }
}, {
  name: "Swikar Sharma",
  role: "Content Creation & Future Skills",
  image: swikarImg,
  featured: true,
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  }
}, {
  name: "Sanju Dongol",
  role: "Scholarships & Clarity",
  image: sanjuImg,
  featured: false,
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  }
}, {
  name: "Mrs. Jiejun Chen (Peggy)",
  role: "China, Culture & Mini Lesson",
  image: peggyImg,
  featured: false,
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  }
}];
const SpeakersSection = () => {
  return <section id="speakers" className="section-padding bg-white relative overflow-hidden text-4xl">
      <div className="container-wide relative z-10 text-4xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 opacity-0-initial animate-fade-up">
            Meet the Experts
          </span>
          <h2 className="display-lg mb-6 opacity-0-initial animate-fade-up delay-100">
            <span className="text-foreground text-5xl">Speakers</span>
            <span className="text-foreground"> & </span>
            <span className="text-primary text-3xl md:text-5xl">Mentors</span>
          </h2>
          <p className="body-lg text-muted-foreground opacity-0-initial animate-fade-up delay-200">
            Learn from industry leaders who've guided thousands to success
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {speakers.map((speaker, index) => <div key={speaker.name} className={`group text-center opacity-0-initial animate-fade-up ${speaker.featured ? "lg:scale-105" : ""}`} style={{
          animationDelay: `${(index + 3) * 100}ms`
        }}>
              {/* Image Container */}
              <div className={`relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] ${speaker.featured ? "ring-2 ring-primary/50" : ""}`}>
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <h3 className={`font-display text-xl font-bold mb-2 ${speaker.featured ? "text-primary" : "text-foreground"}`}>
                {speaker.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{speaker.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                
                <a href={speaker.social.linkedin} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </a>
                <a href={speaker.social.instagram} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200">
                  <Instagram className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SpeakersSection;