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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden animate-fade-up">
      <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-4 flex items-center gap-3">
        <div className="flex-1">
          <p className="font-bold text-foreground text-sm">Ready to join?</p>
          <p className="text-xs text-muted-foreground">Feb 14 • Limited spots</p>
        </div>
        <Button variant="cta" size="sm">
          Register Now
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default StickyRegistration;
