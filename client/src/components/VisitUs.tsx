import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function VisitUs() {
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
    <section id="visit" className="py-20 md:py-32 bg-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title text-primary mb-4">Visit Us</h2>
            <p className="section-subtitle mx-auto">
              Located in the heart of Whitefield, a hidden gem for pizza lovers
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Info Cards */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    AECS Layout, Whitefield<br />
                    Bangalore, India
                  </p>
                  <p className="text-sm text-primary font-semibold mt-2">
                    Nearby: Marathahalli, Kundanahalli
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Thursday: 11:00 AM - 10:00 PM<br />
                    Friday - Saturday: 11:00 AM - 11:00 PM<br />
                    Sunday: 12:00 PM - 10:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Call for reservations or special orders
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href="https://maps.google.com/?q=AECS+Layout+Whitefield+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Get Directions
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Map */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-lg h-96 md:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8176223169945!2d77.7415!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b0b0b0b0b1%3A0xb0b0b0b0b0b0b0b0!2sAECS%20Layout%2C%20Whitefield%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
