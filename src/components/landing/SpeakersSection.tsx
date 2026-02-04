import { Twitter, Linkedin, Instagram } from "lucide-react";
import rupeshImg from "@/assets/rupesh.png";
import swikarImg from "@/assets/swikar.png";
import sanjuImg from "@/assets/sanju.png";
import peggyImg from "@/assets/peggy.png";
const speakers = [
  {
    name: "Dr. Rupesh Regmi",
    role: "CEO, Founder of WiseAdmit",
    image: rupeshImg,
    featured: false,
    social: {
      linkedin: "https://www.linkedin.com/in/r4regmi",
      instagram: "https://www.instagram.com/dr.rupesh.ai",
    },
  },
  {
    name: "Swikar Sharma",
    role: "Content Creator",
    image: swikarImg,
    featured: false,
    social: {
      linkedin: "https://www.linkedin.com/in/swikar-sharma-a37984173",
      instagram: "https://www.instagram.com/swikar.codes",
    },
  },
  {
    name: "Sanju Dongol",
    role: "Head of Growth & Partnership",
    image: sanjuImg,
    featured: false,
    social: {
      linkedin: "https://www.linkedin.com/in/sanjudongol8/",
    },
  },
  {
    name: "Mrs. Jiejun Chen (Peggy)",
    role: "Director of Admission",
    image: peggyImg,
    featured: false,
    social: {},
  },
];
const SpeakersSection = () => {
  return (
    <section
      id="speakers"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0-initial animate-fade-up">
            Meet the Experts
          </span>
          <h2 className="display-lg mb-4 sm:mb-6 opacity-0-initial animate-fade-up delay-100">
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Speakers
            </span>
            <span className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              {" "}
              &{" "}
            </span>
            <span className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              Mentors
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed opacity-0-initial animate-fade-up delay-200">
            Learn from industry leaders who've guided thousands to success
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 lg:gap-6 mb-10 md:mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className={`group text-center opacity-0-initial animate-fade-up ${
                speaker.featured ? "lg:scale-105" : ""
              }`}
              style={{
                animationDelay: `${(index + 3) * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 aspect-[3/4] max-w-[280px] mx-auto ${
                  speaker.featured ? "lg:ring-2 lg:ring-primary/50" : ""
                }`}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <h3
                className={`text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 ${
                  speaker.featured ? "text-primary" : "text-foreground"
                }`}
              >
                {speaker.name}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                {speaker.role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-2 sm:gap-4">
                {speaker.social.linkedin && (
                  <a
                    href={speaker.social.linkedin}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  </a>
                )}
                {speaker.social.instagram && (
                  <a
                    href={speaker.social.instagram}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpeakersSection;
