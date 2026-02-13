import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EVENT_MAP_URL = "https://share.google/tvxXOrKzTb0BB4lLp";

const LocationSection = () => {
  return (
    <section
      id="location"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-wide relative z-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-widest opacity-0-initial animate-fade-up">
              Venue
            </span>
            <h2 className="mb-3 sm:mb-4 opacity-0-initial animate-fade-up delay-100">
              <span className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold">
                Event{" "}
              </span>
              <span className="text-primary italic text-2xl sm:text-3xl md:text-4xl font-bold">
                location
              </span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base opacity-0-initial animate-fade-up delay-200">
              Join us in Chitwan. Open the map for directions and exact venue
              details.
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-lg opacity-0-initial animate-fade-up delay-300">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg sm:text-xl leading-tight">
                    Hotel Landmark Narayani (Royal Century)
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Bharatpur Height, Chitwan · Feb 14
                    <br />
                    11:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                size="default"
                className="w-full sm:w-auto shrink-0"
                asChild
              >
                <a
                  href={EVENT_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
