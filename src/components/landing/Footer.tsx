import { Calendar, MapPin, Clock, Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div>
            <h3 className="font-display text-2xl font-bold text-card mb-4">
              WiseAdmit
            </h3>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              Helping students navigate their journey to world-class education in China. We connect dreams with opportunities through personalized guidance and exclusive scholarship access.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="font-display text-lg font-semibold text-card mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-secondary-foreground/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary-foreground/50" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-foreground/50" />
                <a href="mailto:info@wiseadmit.com" className="hover:text-primary transition-colors">
                  info@wiseadmit.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-foreground/50" />
                <a href="tel:+97798XXXXXXXX" className="hover:text-primary transition-colors">
                  +977 98XXXXXXXX
                </a>
              </div>
            </div>
          </div>
          
          {/* Event Details */}
          <div>
            <h4 className="font-display text-lg font-semibold text-card mb-6">
              Event Details
            </h4>
            <div className="space-y-4 text-secondary-foreground/70">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-secondary-foreground/50" />
                <span>February 14, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary-foreground/50" />
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary-foreground/50" />
                <span>Hotel Yak & Yeti, Durbar Marg, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © 2026 WiseAdmit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
