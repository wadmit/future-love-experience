import { Button } from "@/components/ui/button";
import {
  Gift,
  Instagram,
  Share2,
  MessageCircle,
  ClipboardCheck,
} from "lucide-react";
import droneGiveawayImg from "@/assets/drone-giveaway-new.png";
import chinaSkyline from "@/assets/china-skyline.jpg";

const steps = [
  {
    icon: Instagram,
    title: "Follow WiseAdmit",
    description: "@wiseadmit on Instagram",
  },
  {
    icon: Share2,
    title: "Share the event",
    description: "Post on your story",
  },
  {
    icon: MessageCircle,
    title: "Comment & tag",
    description: "Tag 3 friends",
  },
  {
    icon: ClipboardCheck,
    title: "Take WiseScore",
    description: "At the event",
  },
];

const GiveawaySection = () => {
  return (
    <section
      id="giveaway"
      className="section-padding text-white relative overflow-hidden"
      style={{ backgroundColor: "#001D46" }}
    >
      <div className="absolute inset-0">
        <img
          src={chinaSkyline}
          alt="Shanghai skyline with traditional and modern architecture"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(222 47% 11% / 0.88) 0%, hsl(6 78% 57% / 0.35) 100%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-gold mb-5 opacity-0-initial animate-fade-up">
                  <Gift className="w-4 h-4" />
                  Giveaway
                </span>
                <h2 className="display-lg text-white mb-3 opacity-0-initial animate-fade-up delay-100">
                  Win a free trip to China
                </h2>
                <p className="body-lg text-white/75 max-w-md opacity-0-initial animate-fade-up delay-200">
                  2 lucky students win a 14-day China trip. Engage to earn more
                  entries.
                </p>
              </div>

              {/* Prize highlight */}
              <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm py-3 px-5 max-w-sm opacity-0-initial animate-fade-up delay-300">
                <p className="font-display font-bold text-white text-lg">
                  2 winners
                </p>
                <p className="text-gold font-semibold text-xl">
                  FREE 14-day China trip
                </p>
                <p className="text-white/60 text-[10px]">
                  *Air ticket and visa costs to be covered by students
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-2 opacity-0-initial animate-fade-up delay-400">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isFollow = step.title === "Follow WiseAdmit";
                  const content = (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white text-sm">
                          {step.title}
                        </h4>
                        <p className="text-sm text-white/60">
                          {isFollow ? (
                            <>
                              <a
                                href="https://instagram.com/wiseadmitedu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                @wiseadmit
                              </a>{" "}
                              on Instagram
                            </>
                          ) : (
                            step.description
                          )}
                        </p>
                      </div>
                    </>
                  );
                  return isFollow ? (
                    <a
                      key={step.title}
                      href="https://instagram.com/wiseadmitedu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl p-3 bg-black/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                      style={{ animationDelay: `${(index + 5) * 80}ms` }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={step.title}
                      className="flex items-center gap-4 rounded-xl p-3 bg-black/5 border border-white/10"
                      style={{ animationDelay: `${(index + 5) * 80}ms` }}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 opacity-0-initial animate-fade-up delay-700">
                <Button variant="hero" size="lg" className="btn-glow" asChild>
                  <a href="#register">
                    <Gift className="w-5 h-5 mr-2" />
                    Join the giveaway
                  </a>
                </Button>
                <p className="text-sm text-white/50 mt-3">
                  Winner announced Feb 14
                </p>
              </div>
            </div>

            {/* Right: Image */}
            {/* <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0-initial animate-fade-up delay-200">
              <div className="relative max-w-sm lg:max-w-md">
                <img
                  src={droneGiveawayImg}
                  alt="Drone giveaway prize"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
