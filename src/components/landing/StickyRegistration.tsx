import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const StickyRegistration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:hidden animate-fade-up safe-area-pb">
      <div className="bg-card rounded-xl sm:rounded-2xl shadow-elevated border border-border/50 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-xs sm:text-sm">Ready to join?</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Feb 14 • Limited spots</p>
        </div>
        <Button variant="cta" size="sm" className="shrink-0 text-xs sm:text-sm">
          Register Now
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 hover:bg-muted rounded-full transition-colors shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default StickyRegistration;
