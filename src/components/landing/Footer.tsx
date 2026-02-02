import { Calendar, MapPin, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Event Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Fall in Love with Your Future 💖
            </h3>
            <div className="space-y-2 text-background/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>February 14, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>WiseAdmit Landmark, Chitwan</span>
              </div>
            </div>
          </div>
          
          {/* Logo / Brand */}
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary mb-2">
              WiseAdmit
            </div>
            <p className="text-sm text-background/60">
              Your Gateway to Global Education
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2026 WiseAdmit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
