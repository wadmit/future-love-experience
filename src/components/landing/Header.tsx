import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "Highlights", href: "#highlights" },
    { label: "Speakers", href: "#speakers" },
    { label: "Experience", href: "#experience" },
    { label: "Giveaway", href: "#giveaway" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="font-display font-bold text-xl text-white">WiseAdmit</span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors font-medium text-sm"
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
