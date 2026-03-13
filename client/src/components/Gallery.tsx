import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/hero-pizza-oven-VAJB7J5TtndG4XZmmNDChh.webp',
      alt: 'Wood-fired pizza oven',
      span: 'md:col-span-2',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/pizza-margherita-BvTnjbRgJiS8C6uWDhzE5Q.webp',
      alt: 'Margherita pizza',
      span: '',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/fresh-ingredients-cNTpG8GPaQzqPp5crPHqUq.webp',
      alt: 'Fresh ingredients',
      span: '',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/sourdough-dough-iKUbvMvuaT3frT4AGeWoZ4.webp',
      alt: 'Artisanal sourdough',
      span: 'md:col-span-2',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663434078785/E4YdUvjfhETzg7dLaimZGM/cafe-interior-isKpsMrPFm9ZLZNKotkTex.webp',
      alt: 'Cozy pizzeria interior',
      span: 'md:col-span-2',
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
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Gallery</h2>
            <p className="section-subtitle mx-auto">
              A glimpse into our artisanal pizza-making process and cozy atmosphere
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-lg h-64 md:h-80 group cursor-pointer ${image.span}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-4">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
