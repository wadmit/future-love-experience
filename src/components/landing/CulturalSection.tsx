import { Sparkles } from "lucide-react";

const culturalActivities = [
  {
    title: "Chinese Calligraphy",
    chinese: "书法",
    description: "Write your name in beautiful Mandarin characters with expert guidance.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
  },
  {
    title: "Paper Cutting",
    chinese: "剪纸",
    description: "Create intricate zodiac & festive designs with traditional Chinese paper cutting.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
  },
  {
    title: "Mini Chinese Lesson",
    chinese: "中文课",
    description: "Learn essential Mandarin phrases and impress everyone with your new skills.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    title: "Photo & Reel Corners",
    chinese: "拍照角",
    description: "Capture Instagram-worthy moments at our themed photo booths.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
  },
];

const CulturalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cny-red/5 via-background to-gold/5" />
      
      {/* Decorative Lantern Pattern */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold/10 rounded-full blur-2xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-cny-red/10 rounded-full blur-2xl animate-pulse-glow delay-500" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4 opacity-0-initial animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Immerse Yourself
          </span>
          <h2 className="display-lg text-foreground mb-6 opacity-0-initial animate-fade-up delay-100">
            Cultural Showcase
          </h2>
          <p className="body-lg text-muted-foreground opacity-0-initial animate-fade-up delay-200">
            Experience the rich heritage of Chinese culture through hands-on activities and interactive sessions.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {culturalActivities.map((activity, index) => (
            <div
              key={activity.title}
              className="group relative bg-card rounded-3xl overflow-hidden card-hover opacity-0-initial animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <span className="text-gold font-medium text-lg">
                      {activity.chinese}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-primary to-cny-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;
