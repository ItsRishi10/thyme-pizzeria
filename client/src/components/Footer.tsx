import { Instagram, MapPin, Phone, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                Thyme Woodfired Pizzeria
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Handcrafted wood-fired pizza made with thyme and time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-primary transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>AECS Layout, Kundalahalli<br />Bangalore, India</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:hello@thymepizzeria.com" className="hover:text-primary transition-colors">
                  hello@thymepizzeria.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-bold text-background mb-4">Follow Us</h4>
            <section className="mb-6 grid md:grid-cols-5">
              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.instagram.com/thyme.pizzeria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/20 rounded-lg hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.facebook.com/thymepizzeria.blr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/20 rounded-lg hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </section>
            <h4 className="font-bold text-background mb-2 text-sm">Hours</h4>
            <p className="text-xs text-background/70 leading-relaxed">
              All Week: 12:00 PM - 11:00 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {currentYear} Thyme Woodfired Pizzeria. All rights reserved.
            </p>
            <p className="text-center italic text-primary">
              "Handcrafted wood-fired pizza made with thyme and time."
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
