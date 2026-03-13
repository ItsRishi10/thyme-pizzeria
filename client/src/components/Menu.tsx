import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const menuData = {
    pizzas: {
      title: 'Wood-Fired Pizzas',
      items: [
        {
          name: 'Marinara',
          description: 'San Marzano tomatoes, garlic, oregano, olive oil',
          price: '₹380',
        },
        {
          name: 'Margherita',
          description: 'Fresh mozzarella, basil, tomato sauce, olive oil',
          price: '₹420',
        },
        {
          name: 'Peri Peri Chicken',
          description: 'Spiced chicken, peri peri sauce, red onion, cilantro',
          price: '₹480',
        },
        {
          name: 'Fruits of the Sea',
          description: 'Fresh prawns, calamari, mussels, garlic, white wine sauce',
          price: '₹580',
        },
        {
          name: 'Veg Special',
          description: 'Roasted vegetables, fresh herbs, mozzarella, olive oil',
          price: '₹420',
        },
        {
          name: 'Burrata',
          description: 'Creamy burrata, heirloom tomatoes, basil, balsamic',
          price: '₹520',
        },
      ],
    },
    sides: {
      title: 'Sides & Starters',
      items: [
        {
          name: 'Garlic Bread',
          description: 'Crispy sourdough with garlic butter and herbs',
          price: '₹220',
        },
        {
          name: 'Bruschetta',
          description: 'Toasted sourdough with tomato, basil, garlic',
          price: '₹240',
        },
        {
          name: 'Calzones',
          description: 'Folded pizza with mozzarella, ricotta, and your choice of filling',
          price: '₹380',
        },
      ],
    },
    bakes: {
      title: 'Fresh Bakes',
      items: [
        {
          name: 'Sourdough Bread',
          description: '48-hour fermented artisanal sourdough loaf',
          price: '₹180',
        },
        {
          name: 'Focaccia',
          description: 'Olive oil focaccia with rosemary and sea salt',
          price: '₹160',
        },
        {
          name: 'Ciabatta',
          description: 'Light and airy Italian ciabatta bread',
          price: '₹140',
        },
      ],
    },
  };

  const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

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
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Our Menu</h2>
            <p className="section-subtitle mx-auto">
              Handcrafted pizzas and artisanal breads made fresh daily
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {menuData[category as keyof typeof menuData].title.split(' ')[0]}
              </button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* View Full Menu Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <button className="btn-primary">
              View Full Menu
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
