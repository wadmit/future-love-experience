import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logo from "@/assets/wiseadmit-logo.svg";

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
        <a href="/" className="flex items-center">
          <img src={logo} alt="WiseAdmit" className="h-8 md:h-10" />
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
