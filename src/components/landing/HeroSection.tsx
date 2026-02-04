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
      <div className="relative z-10 container-wide text-center py-32 md:py-40">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 opacity-0-initial animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-white">
            An Immersive China Experience{" "}
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0-initial animate-fade-up delay-100">
          <span className="display-xl text-primary text-5xl">Fall in Love</span>
          <span className="display-xl text-white text-5xl">
            {" "}
            with Your Future
          </span>
          <span className="inline-block ml-2">❤️</span>
        </h1>

        {/* Description */}
        <p className="body-lg text-white/80 max-w-2xl mx-auto mt-6 opacity-0-initial animate-fade-up delay-300 text-lg">
          Celebrate Chinese New Year, discover study abroad opportunities, meet
          mentors, and unlock your path to China.
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-0-initial animate-fade-up delay-400">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-white font-medium text-base">
              Feb 14, 2026
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-white font-medium text-base">Chitwan</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 opacity-0-initial animate-fade-up delay-500">
          <Button variant="hero" size="xl" className="btn-glow" asChild>
            <a href="#register">Register for Event</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#register">Become Event Ambassador</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 opacity-0-initial animate-fade-up delay-600">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[140px] rounded-2xl border border-white/20 bg-white/10 px-8 py-5 text-center backdrop-blur-sm"
            >
              <p
                className={`font-display text-3xl md:text-4xl font-bold tracking-tight ${stat.color}`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">
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
