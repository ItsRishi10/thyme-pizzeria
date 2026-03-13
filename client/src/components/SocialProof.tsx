import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      text: 'Hidden gem for authentic wood-fired pizzas. The sourdough base is incredible!',
      author: 'Priya M.',
      rating: 5,
    },
    {
      text: 'The sourdough base was thin, light, and perfectly baked. Best pizza in Whitefield!',
      author: 'Rahul K.',
      rating: 5,
    },
    {
      text: 'Fantastic wood-fired pizza and garlic bread. Highly recommend!',
      author: 'Anjali P.',
      rating: 5,
    },
    {
      text: 'One of the best sourdough pizzas in town. Worth the visit!',
      author: 'Arjun S.',
      rating: 5,
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
            <h2 className="section-title text-primary mb-4">Loved by Locals</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg font-semibold text-foreground">
                4.5 rating from 450+ customers
              </p>
            </div>
            <p className="section-subtitle mx-auto">
              Real reviews from our happy customers
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-background to-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="text-primary font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
