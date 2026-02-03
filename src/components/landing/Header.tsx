import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

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
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-[white]`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a
          href="https://wiseadmit.io"
          target="_blank"
          className="flex items-center"
        >
          <img src={logoDark} alt="WiseAdmit" className="h-12 md:h-15" />
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors font-medium text-sm text-foreground hover:text-[#111518]`}
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
