import { Scissors, Pen, GraduationCap, Users } from "lucide-react";
import calligraphyImg from "@/assets/experience-calligraphy-new.jpg";
import paperCuttingImg from "@/assets/experience-paper-cutting-new.webp";
import chineseLessonImg from "@/assets/experience-chinese-lesson.jpg";
import photoCornerImg from "@/assets/experience-photo-corner.jpg";
const experiences = [{
  icon: Pen,
  title: "Chinese Calligraphy",
  description: "Master the art of brushwork with traditional ink and rice paper. Write your name in beautiful Chinese characters.",
  image: calligraphyImg,
  tags: ["Practice & Art", "Take Paper", "Make a Wishing"],
  imageFirst: true
}, {
  icon: Scissors,
  title: "Paper Cutting (剪纸)",
  description: "Create intricate paper cutting art designs using this ancient art of Chinese paper cutting.",
  image: paperCuttingImg,
  tags: ["Red Paper", "Fancy Patterns", "Festival Designs"],
  imageFirst: false
}, {
  icon: GraduationCap,
  title: "On-spot Admissions & Scholarships",
  description: "Apply on the spot and get expert guidance on scholarships and eligibility.",
  image: chineseLessonImg,
  tags: ["Apply Now", "Scholarship Review", "Eligibility Check"],
  imageFirst: true
}, {
  icon: Users,
  title: "Student & Parent Counseling",
  description: "Personalized academic advice and dedicated support for parents.",
  image: photoCornerImg,
  tags: ["Career Guidance", "University Selection", "Parent Support"],
  imageFirst: false
}];
const ExperienceSection = () => {
  return <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="display-lg text-foreground mb-6 opacity-0-initial animate-fade-up delay-100 text-4xl">
            What You'll Experience
          </h2>
          <p className="body-lg text-muted-foreground opacity-0-initial animate-fade-up delay-200 text-lg">
            Hands-on cultural activities that bring Chinese tradition to life
          </p>
        </div>
        
        {/* Experience Items */}
        <div className="space-y-8 lg:space-y-12">
          {experiences.map((experience, index) => <div key={experience.title} className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center opacity-0-initial animate-fade-up`} style={{
          animationDelay: `${(index + 3) * 100}ms`
        }}>
              {/* Image */}
              <div className={`${experience.imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] group">
                  <img src={experience.image} alt={experience.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              
              {/* Content */}
              <div className={`${experience.imageFirst ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <experience.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                    {experience.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {experience.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map(tag => <span key={tag} className="px-4 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80 hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;