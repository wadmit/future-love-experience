import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import { Link } from "react-router-dom";

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
    { label: "Giveaway", href: "#giveaway" },
    { label: "Speakers", href: "#speakers" },
    { label: "Register", href: "#register" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-300 bg-[white]`}
    >
      <div className="container-wide flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <a
          href="https://wiseadmit.io"
          target="_blank"
          className="flex items-center shrink-0"
        >
          <img
            src={logoDark}
            alt="WiseAdmit"
            className="h-9 sm:h-10 md:h-12 lg:h-14"
          />
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors font-medium text-xs lg:text-sm text-foreground hover:text-[#111518]`}
            >
              {item.label}
            </a>
          ))}
          {/* <Link
            to="/dashboard"
            className="transition-colors font-medium text-xs lg:text-sm text-foreground hover:text-[#111518]"
          >
            Dashboard
          </Link> */}
        </nav>

        {/* CTA */}
        <Button variant="hero" size="default" className="hidden sm:flex gap-2">
          <Heart className="w-4 h-4" />
          <a href="#register">Register Now</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
