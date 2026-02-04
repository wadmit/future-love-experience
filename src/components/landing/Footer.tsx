import {
  Calendar,
  MapPin,
  Clock,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="text-secondary-foreground py-10 sm:py-12 md:py-16 bg-[#1a1a1a]">
      <div className="container-wide px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-card mb-3 sm:mb-4">
              WiseAdmit
            </h3>
            <p className="text-secondary-foreground/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Helping students navigate their journey to world-class education.
              We connect dreams with opportunities through personalized guidance
              and exclusive scholarship access.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/wiseadmitedu"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/wiseadmitedu"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/wiseadmitedu"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-card mb-4 sm:mb-6">
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4 text-secondary-foreground/70 text-sm sm:text-base">
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/50 shrink-0" />
                <span>Bakhundol, Lalitpur , Nepal</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/50 shrink-0" />
                <a
                  href="mailto:info@wiseadmit.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@wiseadmit.io
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/50 shrink-0" />
                <a
                  href="tel:+97798XXXXXXXX"
                  className="hover:text-primary transition-colors"
                >
                  +977- 9802356755
                </a>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-card mb-4 sm:mb-6">
              Event Details
            </h4>
            <div className="space-y-3 sm:space-y-4 text-secondary-foreground/70 text-sm sm:text-base">
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/50 shrink-0" />
                <span>February 14, 2026</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/50 shrink-0" />
                <span>11:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/50 shrink-0" />
                <span>Chitwan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/50 text-xs sm:text-sm">
            © 2026 WiseAdmit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
