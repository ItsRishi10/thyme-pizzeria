import { motion } from 'framer-motion';
import { ShoppingCart, Phone } from 'lucide-react';

const phone = '+91 98868 18658';

export default function OrderOnline() {
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
    <section id="order" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Order Online</h2>
            <p className="section-subtitle mx-auto">
              Enjoy our pizzas from the comfort of your home. Fast delivery to your doorstep.
            </p>
          </motion.div>

          {/* Order Options Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Swiggy */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white rounded-lg border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Swiggy</h3>
              <p className="text-muted-foreground mb-6">
                Order now on Swiggy for fast delivery
              </p>
              <a
                href="https://www.swiggy.com/city/bangalore/thyme-woodfired-pizzeria-s-brookefield-rest925473"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Order on Swiggy
              </a>
            </motion.div>

            {/* Zomato */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white rounded-lg border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Zomato</h3>
              <p className="text-muted-foreground mb-6">
                Browse our menu and order on Zomato
              </p>
              <a
                href="https://www.zomato.com/bangalore/thyme-wood-fired-pizzeria-brookefield-bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Order on Zomato
              </a>
            </motion.div>

            {/* Call for Pickup */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white rounded-lg border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Call for Pickup</h3>
              <p className="text-muted-foreground mb-6">
                Call us directly for pickup orders
              </p>
              <a
                href={`tel:${phone}`}
                className="btn-primary inline-block"
              >
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Info Message */}
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-white rounded-lg border border-border"
          >
            <p className="text-lg text-muted-foreground mb-2">
              Most of our sales happen through delivery apps. Download Swiggy or Zomato to order now!
            </p>
            <p className="text-sm text-primary font-semibold">
              Delivery available to Kundalahalli, Marathahalli, and nearby areas
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
