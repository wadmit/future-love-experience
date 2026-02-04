import {
  Brush,
  Scissors,
  Languages,
  Camera,
  GraduationCap,
  University,
} from "lucide-react";
import calligraphyImg from "@/assets/experience-calligraphy-new.jpg";
import paperCuttingImg from "@/assets/experience-paper-cutting-new.webp";
import chineseLessonImg from "@/assets/experience-chinese-lesson.jpg";
import photoCornerImg from "@/assets/experience-photo-corner.jpg";
import onSpotAdmissionsImg from "@/assets/on-spot-admission.png";
import studentCounselingImg from "@/assets/student-parent-counsel.webp";
const experiences = [
  {
    title: "Chinese Calligraphy",
    description:
      "Learn to write your name in beautiful Chinese characters with traditional brush and ink",
    image: calligraphyImg,
    icon: Brush,
    tag: "书法",
  },
  {
    title: "Paper Cutting Art",
    description:
      "Create intricate zodiac patterns with traditional red paper cutting techniques",
    image: paperCuttingImg,
    icon: Scissors,
    tag: "剪纸",
  },
  {
    title: "On spot Admissions & Scholarships",
    description:
      "Apply on the spot and get expert guidance on scholarships and eligibility",
    image: onSpotAdmissionsImg,
    icon: University,
    tag: "中文",
    gradient: true,
  },
  {
    title: "Student & Parent Counseling",
    description:
      "Personalized academic advice and dedicated support for students and parents",
    icon: GraduationCap,
    image: studentCounselingImg,
    tag: "",
    gradient: true,
  },
];

const CulturalShowcase = () => {
  return (
    <section className="section-padding bg-[white-80]" id="experience">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Cultural Immersion
          </span>
          <h2 className="display-lg mb-6 opacity-0-initial animate-fade-up delay-100">
            <span className="text-foreground text-5xl">Experience </span>
            <span className="text-primary text-3xl md:text-5xl">
              Chinese Culture{" "}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Hands-on activities that bring China's rich traditions to life
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const hasImage = exp.image;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] hover-lift cursor-pointer"
              >
                {/* Background */}
                {hasImage ? (
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Tag */}
                  {/* <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
                    <span className="font-medium text-foreground">
                      {exp.tag}
                    </span>
                  </div> */}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed max-w-sm opacity-80">
                    {exp.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CulturalShowcase;
