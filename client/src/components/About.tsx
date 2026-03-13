import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="section-title text-primary mb-4">Our Story</h2>
            <p className="section-subtitle">
              Thyme Woodfired Pizzeria is a cozy neighborhood pizzeria in AECS Layout, Whitefield, specializing in handcrafted sourdough pizzas baked in a traditional wood-fired oven.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Images */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative overflow-hidden rounded-lg h-80 md:h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/sourdough-dough-iKUbvMvuaT3frT4AGeWoZ4.webp"
                  alt="Artisanal sourdough dough"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg h-64 md:h-72">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/fresh-ingredients-cNTpG8GPaQzqPp5crPHqUq.webp"
                  alt="Fresh ingredients"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Handcrafted with Passion</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We believe in the art of slow fermentation. Our sourdough bases are carefully crafted over 48 hours, developing complex flavors and a light, airy texture that sets us apart.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Wood-Fired Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our traditional wood-fired oven reaches temperatures of 900°F, baking each pizza to perfection in just 90 seconds. The result: a crispy crust with a tender, flavorful interior.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Fresh Ingredients</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We source the finest ingredients locally and internationally. From San Marzano tomatoes to fresh mozzarella, every element is chosen for quality and authenticity.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-primary font-semibold text-lg italic">
                  "Handcrafted wood-fired pizza made with thyme and time."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
