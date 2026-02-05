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
      "Create beautiful patterns with traditional red paper cutting techniques",
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
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Cultural Immersion
          </span>
          <h2 className="display-lg mb-4 sm:mb-6 opacity-0-initial animate-fade-up delay-100">
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Experience{" "}
            </span>
            <span className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              Chinese Culture{" "}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg">
            Hands-on activities that bring China's rich traditions to life
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const hasImage = exp.image;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] hover-lift cursor-pointer"
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
                <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed max-w-sm opacity-80">
                    {exp.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CulturalShowcase;
