import { Button } from "@/components/ui/button";
import { Heart, Calendar, MapPin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const stats = [
    {
      value: "300+",
      label: "Expected Attendees",
      color: "text-gold",
    },
    {
      value: "5min",
      label: "Scholarship Test",
      color: "text-gold",
    },
    // {
    //   value: "45k",
    //   label: "Drone Giveaway",
    //   color: "text-gold",
    // },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Hearts */}
      <div className="absolute top-20 left-8 opacity-0-initial animate-fade-in delay-300">
        <Heart className="w-6 h-6 text-primary fill-primary animate-float" />
      </div>
      <div className="absolute top-1/2 left-12 opacity-0-initial animate-fade-in delay-500">
        <Heart className="w-4 h-4 text-primary fill-primary animate-float delay-200" />
      </div>
      <div className="absolute top-1/3 right-16 opacity-0-initial animate-fade-in delay-400">
        <Sparkles className="w-5 h-5 text-gold animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4 sm:px-6 py-20 sm:py-28 md:py-32 lg:py-40">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6 md:mb-8 opacity-0-initial animate-fade-up">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-white">
            An Immersive China Experience{" "}
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0-initial animate-fade-up delay-100 px-1">
          <span className="display-xl text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Fall in Love</span>
          <span className="display-xl text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {" "}
            with Your Future
          </span>
          <span className="inline-block ml-1 sm:ml-2">❤️</span>
        </h1>

        {/* Description */}
        <p className="text-white/80 max-w-2xl mx-auto mt-4 sm:mt-6 opacity-0-initial animate-fade-up delay-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Celebrate Chinese New Year, discover study abroad opportunities, meet
          mentors, and unlock your path to China.
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 opacity-0-initial animate-fade-up delay-400">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
              Feb 14, 2026
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
            <span className="text-white font-medium text-xs sm:text-sm md:text-base">Chitwan</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 md:mt-10 opacity-0-initial animate-fade-up delay-500">
          <Button variant="hero" size="default" className="btn-glow h-11 sm:h-12 sm:px-8 sm:text-base md:h-14 md:px-10 md:text-lg w-full sm:w-auto" asChild>
            <a href="#register">Register for Event</a>
          </Button>
          <Button variant="heroOutline" size="default" className="h-11 sm:h-12 sm:px-8 sm:text-base md:h-14 md:px-10 md:text-lg w-full sm:w-auto" asChild>
            <a href="#register">Become Student Ambassador</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 opacity-0-initial animate-fade-up delay-600">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-center backdrop-blur-sm"
            >
              <p
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${stat.color}`}
              >
                {stat.value}
              </p>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
