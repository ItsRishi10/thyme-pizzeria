import { motion } from 'framer-motion';
import { Flame, Leaf, Wheat, Hand, MapPin } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Flame,
      title: 'Wood-Fired Oven',
      description: 'Traditional oven reaching 900°F for authentic, perfectly baked pizzas',
    },
    {
      icon: Wheat,
      title: 'Slow-Fermented Sourdough',
      description: '48-hour fermentation for complex flavors and light, airy texture',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Locally sourced and premium ingredients for authentic flavors',
    },
    {
      icon: Hand,
      title: 'Handcrafted Daily',
      description: 'Every pizza is made fresh to order with care and attention',
    },
    {
      icon: MapPin,
      title: 'Neighborhood Gem',
      description: 'A cozy, intimate pizzeria loved by locals in Whitefield',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Why Our Pizza Is Special</h2>
            <p className="section-subtitle mx-auto">
              We combine tradition, quality, and passion in every pizza we create
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-8 rounded-lg bg-gradient-to-br from-background to-white border border-border hover:border-primary transition-all duration-500 hover:shadow-lg"
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
