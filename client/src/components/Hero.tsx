import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/hero-pizza-oven-VAJB7J5TtndG4XZmmNDChh.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Wood-Fired Sourdough Pizza
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Handcrafted pizzas baked in a traditional wood-fired oven using fresh ingredients and slow-fermented sourdough.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-500 text-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('order')}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-500 text-lg"
          >
            Order Online
          </button>
          <button
            onClick={() => scrollToSection('visit')}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-500 text-lg"
          >
            Find Us
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom--10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
