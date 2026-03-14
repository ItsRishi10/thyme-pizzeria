import { motion } from 'framer-motion';
import { useState } from 'react';
import menuImage1 from '../assets/menu-image.jpg';
import menuImage2 from '../assets/menu-image-2.jpg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentImage, setCurrentImage] = useState(menuImage1);

  const menuImages = [menuImage1, menuImage2];


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-primary mb-4">Our Menu</h2>
          <p className="section-subtitle mx-auto">
            Handcrafted pizzas and artisanal breads made fresh daily
          </p>
        </div>

        {/* Menu Images Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
          {menuImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Menu ${idx + 1}`}
              className="cursor-pointer w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => {
                setCurrentImage(img);
                setShowMenu(true);
              }}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close button */}
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-6 right-8 text-white text-4xl font-bold z-50"
          >
            ✕
          </button>

          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={6}
            wheel={{ step: 0.2 }}
            pinch={{ step: 5 }}
            doubleClick={{ disabled: true }}
            centerOnInit={true}
            limitToBounds={false}
          >
            <TransformComponent>
              <div className="w-screen h-screen flex items-center justify-center">
                <img
                  src={currentImage}
                  alt="Full Menu"
                  className="w-[30vw] max-w-[900px] select-none"
                  draggable={false}
                />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </section>
  );
}