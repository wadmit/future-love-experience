import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Speakers", href: "#speakers" },
    { label: "Giveaway", href: "#giveaway" },
    { label: "Register", href: "#register" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-card shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span
            className={`font-display font-bold text-xl transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            WiseAdmit
          </span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors font-medium text-sm ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button variant="hero" size="default" className="hidden sm:flex gap-2">
          <Heart className="w-4 h-4" />
          Register Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
