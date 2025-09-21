"use client";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Immersive360Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationValue = useMotionValue(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const images = [
    { src: "/case-studies/illusionaire/01.svg", title: "Neural Awakening", description: "The journey begins as consciousness emerges from the depths of sleep" },
    { src: "/case-studies/illusionaire/02.svg", title: "Digital Surveillance", description: "The cyber eye watches as reality bends and shifts around us" },
    { src: "/case-studies/illusionaire/03.svg", title: "Portal Discovery", description: "Finding gateways between dimensions in the quantum realm" },
    { src: "/case-studies/illusionaire/04.svg", title: "Holographic Manifestation", description: "Where thoughts become reality through digital projection" },
    { src: "/case-studies/illusionaire/05.svg", title: "Neural Network", description: "Connecting minds across the digital consciousness grid" },
    { src: "/case-studies/illusionaire/06.svg", title: "Quantum Cube", description: "Reality fractures into infinite probability states" },
    { src: "/case-studies/illusionaire/07.svg", title: "AI Companion", description: "The robotic guide emerges to navigate the digital landscape" },
    { src: "/case-studies/illusionaire/08.svg", title: "VR Transcendence", description: "Final ascension through virtual reality into infinite consciousness" }
  ];

  useEffect(() => {
    if (!isRotating) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isRotating, images.length]);

  useEffect(() => {
    const rotation = -(activeIndex * (360 / images.length));
    rotationValue.set(rotation);
  }, [activeIndex, rotationValue, images.length]);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsRotating(false);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setIsRotating(true);
    }, 5000);
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 insomnia-text-invert-purple">
            360° Experience Gallery
          </h2>
          <p className="text-xl insomnia-text-invert max-w-3xl mx-auto">
            Immerse yourself in a rotating gallery of virtual environments. Click to explore, hover to discover.
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[600px] mx-auto perspective-1000"
          style={{ perspective: "1000px" }}
        >
          {/* Rotating Gallery */}
          <motion.div
            className="relative w-full h-full preserve-3d"
            style={{
              transformStyle: "preserve-3d",
              rotateY: useTransform(rotationValue, (value) => `${value}deg`),
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            {images.map((image, index) => {
              const rotateY = (index * (360 / images.length));
              const translateZ = 300;
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-80 h-96 cursor-pointer"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: "-160px",
                    marginTop: "-192px",
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                    transformStyle: "preserve-3d",
                    zIndex: index === activeIndex ? 50 : 1,
                  }}
                >
                  {/* Image Frame */}
                  <motion.div 
                    className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl bg-gradient-to-br from-gray-900 via-purple-900/20 to-black"
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={120}
                          height={120}
                          className="filter drop-shadow-2xl"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))'
                          }}
                          unoptimized
                        />
                      </motion.div>
                    </div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        boxShadow: index === activeIndex 
                          ? ["0 0 20px rgba(139, 92, 246, 0.5)", "0 0 40px rgba(139, 92, 246, 1)", "0 0 20px rgba(139, 92, 246, 0.5)"]
                          : "0 0 0px rgba(139, 92, 246, 0)",
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Index Label */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    animate={{
                      scale: index === activeIndex ? [1, 1.2, 1] : 1,
                      backgroundColor: index === activeIndex ? "#8b5cf6" : "#6b21a8",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Info Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
              <h3 className="text-3xl font-bold insomnia-text-invert-purple mb-4">
                {images[activeIndex].title}
              </h3>
              <p className="insomnia-text-invert text-lg mb-6">
                {images[activeIndex].description}
              </p>
              
              {/* Navigation Dots */}
              <div className="flex justify-center gap-3">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-purple-500 border-purple-500" 
                        : "bg-transparent border-gray-500 hover:border-purple-400"
                    }`}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center mt-8 gap-4">
          <motion.button
            onClick={() => setIsRotating(!isRotating)}
            className="px-6 py-3 bg-[var(--mb-accent)] hover:bg-[var(--mb-accent)]/90 rounded-full text-white font-medium transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            {isRotating ? "Pause Rotation" : "Resume Rotation"}
          </motion.button>
          
          <motion.button
            onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="px-6 py-3 bg-[var(--mb-primary)] hover:bg-[var(--mb-primary)]/90 rounded-full text-white font-medium transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            Previous
          </motion.button>
          
          <motion.button
            onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
            className="px-6 py-3 bg-[var(--mb-primary)] hover:bg-[var(--mb-primary)]/90 rounded-full text-white font-medium transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            Next
          </motion.button>
        </div>
      </div>

    </section>
  );
}
