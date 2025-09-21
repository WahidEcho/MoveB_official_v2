"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Deterministic positioning arrays - defined outside component for stability
const PARTICLE_LEFT_POSITIONS = [23.4, 67.8, 12.1, 89.3, 45.6, 78.9, 34.2, 91.7, 56.3, 18.8, 
  73.5, 39.1, 82.4, 27.6, 64.2, 15.9, 95.3, 48.7, 71.2, 36.5, 
  85.8, 52.1, 19.4, 76.7, 43.9, 88.2, 31.5, 69.8, 14.3, 96.6,
  58.4, 25.7, 79.1, 42.3, 87.6, 33.8, 72.4, 16.2, 94.9, 49.5,
  26.8, 81.3, 37.6, 93.2, 55.9, 22.1, 74.7, 41.4, 86.5, 29.3];

const PARTICLE_TOP_POSITIONS = [15.7, 82.3, 48.9, 73.1, 26.4, 91.6, 37.8, 64.2, 19.5, 85.9,
  42.7, 76.3, 31.1, 88.4, 53.6, 17.2, 79.8, 35.5, 92.1, 46.9,
  22.6, 68.4, 39.7, 84.3, 51.8, 16.5, 77.9, 34.2, 89.6, 45.1,
  21.4, 86.7, 58.3, 33.9, 75.2, 28.6, 81.8, 47.4, 14.7, 93.5,
  36.8, 72.1, 29.9, 85.2, 52.5, 18.3, 78.6, 41.7, 87.9, 25.8];

export default function IllusionaireHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 100;
      const y = (clientY / innerHeight - 0.5) * 100;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Deep Space Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => {
            // Safe array access with fallback
            const leftPos = PARTICLE_LEFT_POSITIONS?.[i % PARTICLE_LEFT_POSITIONS.length] ?? 50;
            const topPos = PARTICLE_TOP_POSITIONS?.[i % PARTICLE_TOP_POSITIONS.length] ?? 50;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  delay: (i % 20) * 0.1,
                }}
              />
            );
          })}
        </div>

        {/* Aurora Effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, 
              rgba(139, 92, 246, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 25%, 
              rgba(236, 72, 153, 0.1) 50%, 
              transparent 70%)`,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ y: y2, opacity }}
      >
        {/* Floating Title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
           <h1 className="text-8xl md:text-9xl font-black mb-6 relative insomnia-text-invert-purple">
             Illusionaire
           </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <motion.p 
            className="text-2xl md:text-3xl insomnia-text-invert font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Virtual Reality Experience
          </motion.p>
        </motion.div>

        {/* Floating Image Gallery Orbital */}
        <motion.div 
          className="relative w-96 h-96 mx-auto mb-12"
          style={{ y: y3 }}
        >
          {/* Central Hub */}
          <motion.div
            className="absolute inset-0 rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Orbiting Images */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => {
            const angle = (index * 45) * (Math.PI / 180);
            const radius = 150;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={num}
                className="absolute w-20 h-20 rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: x - 40,
                  marginTop: y - 40,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                }}
                whileHover={{ 
                  scale: 1.5, 
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={`/case-studies/insomnia/${num.toString().padStart(2, '0')}.svg`}
                  alt={`Illusionaire Experience ${num}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20"
                  animate={{
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
          
          {/* Center Orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-2xl"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.8)",
                "0 0 20px rgba(139, 92, 246, 0.5)"
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Interactive Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl insomnia-text-invert leading-relaxed mb-8">
            Step into a world where reality bends and dreams take shape. Our virtual Illusionaire experience 
            transcends traditional boundaries, creating an immersive journey through the depths of consciousness 
            and the beauty of sleepless nights.
          </p>
          
          {/* Stats Floating */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { label: "Hours of Content", value: "8+" },
              { label: "VR Environments", value: "12" },
              { label: "Interactive Elements", value: "50+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 10px rgba(139, 92, 246, 0.5)"
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="insomnia-text-invert-muted text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-xs insomnia-text-invert-muted mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </motion.div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
      />
    </div>
  );
}
