import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { MapView } from "@/components/Map";

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
              Located in the heart of Kundalahalli, a hidden gem for pizza lovers
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
                    AECS Layout, Kundalahalli<br />
                    Bangalore, India
                  </p>
                  <p className="text-sm text-primary font-semibold mt-2">
                    Nearby: Marathahalli, Whitefield
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
                    All Week: 12:00 PM - 11:00 PM
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
                      +91 98868 18658
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
                  href="https://www.google.com/maps/place/Thyme+Woodfired+Pizzeria/@12.9626017,77.7131766,20z/data=!4m15!1m8!3m7!1s0x3bae122522e01d5d:0x1c03cb5b886ac7ec!2sAECS+Layout,+Marathahalli,+Bengaluru,+Karnataka+560037!3b1!8m2!3d12.9629354!4d77.7122996!16s%2Fg%2F1vb9bhlj!3m5!1s0x3bae130042b0ab61:0x96198778dfb67fd2!8m2!3d12.9626817!4d77.713296!16s%2Fg%2F11w2dl58c_?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Get Directions
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Map */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-lg">
              <MapView />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
