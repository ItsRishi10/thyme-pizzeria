import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Thyme Woodfired Pizzeria
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary font-medium hover:text-primary transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-primary font-medium hover:text-primary transition-colors duration-300"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-primary font-medium hover:text-primary transition-colors duration-300"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('visit')}
            className="text-primary font-medium hover:text-primary transition-colors duration-300"
          >
            Visit Us
          </button>
          <button
            onClick={() => scrollToSection('order')}
            className="btn-primary text-sm"
          >
            Order Online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left text-foreground font-medium hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left text-foreground font-medium hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="text-left text-foreground font-medium hover:text-primary transition-colors"
            >
              Visit Us
            </button>
            <button
              onClick={() => scrollToSection('order')}
              className="btn-primary text-sm w-full"
            >
              Order Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
