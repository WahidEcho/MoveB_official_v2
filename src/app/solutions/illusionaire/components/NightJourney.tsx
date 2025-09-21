"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// Deterministic positioning arrays - defined outside component for stability
const STAR_LEFT_POSITIONS = [74.0, 64.8, 89.7, 58.5, 90.7, 55.4, 78.4, 49.0, 78.6, 55.6, 48.3, 97.4, 13.6, 77.8, 99.5, 82.9, 19.5, 68.2, 57.7, 29.7, 91.4, 5.6, 7.8, 6.3, 63.7, 28.0, 51.1, 75.5, 8.7, 25.6, 47.4, 30.9, 91.3, 4.7, 45.1, 16.6, 19.7, 19.4, 35.9, 92.2, 19.6, 92.3, 73.9, 16.8, 60.8, 99.2, 8.7, 25.3, 25.0, 1.2, 34.7, 34.2, 42.3, 77.5, 63.6, 55.6, 80.6, 27.6, 74.8, 92.3, 47.1, 16.8, 90.4, 21.2, 86.3, 4.7, 29.9, 88.3, 98.9, 11.5, 99.6, 65.9, 6.9, 90.3, 64.6, 33.0, 35.3, 90.1, 45.9, 15.8, 72.2, 18.8, 76.9, 66.8, 75.2, 20.5, 78.0, 28.0, 70.9, 84.6, 65.4, 58.5, 35.9, 88.2, 48.5, 23.4, 36.3, 36.4, 68.0, 35.7];

const STAR_TOP_POSITIONS = [18.1, 72.0, 30.0, 86.3, 10.7, 62.5, 88.0, 12.5, 54.1, 67.5, 28.8, 83.1, 36.7, 2.4, 45.7, 42.2, 61.4, 92.9, 26.5, 73.9, 85.6, 40.5, 77.7, 37.2, 5.4, 30.5, 63.7, 3.7, 32.2, 32.5, 2.2, 34.9, 23.4, 75.0, 71.9, 54.7, 82.3, 51.8, 21.7, 24.1, 42.8, 89.7, 78.8, 54.1, 2.5, 0.1, 72.6, 36.0, 61.6, 18.5, 43.6, 16.7, 39.4, 29.0, 69.2, 39.2, 51.9, 18.4, 54.4, 64.4, 99.1, 61.5, 56.1, 43.0, 75.1, 57.6, 25.0, 94.5, 18.9, 26.5, 23.6, 58.4, 76.1, 44.0, 80.0, 56.1, 8.1, 24.4, 64.4, 66.3, 61.5, 41.8, 62.1, 73.8, 42.1, 35.3, 39.2, 62.6, 62.4, 41.9, 73.2, 87.9, 1.6, 12.2, 43.1, 8.6, 38.2, 27.7, 87.6, 81.8];

const PARTICLE_LEFT_POS = [25, 75, 15, 85, 40, 60, 10, 90];
const PARTICLE_TOP_POS = [20, 80, 50, 30, 70, 40, 60, 15];

export default function NightJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const chapters = [
    {
      title: "Dusk Arrival",
      time: "00:00",
      description: "Night settles in as the first stars pierce the sky.",
      image: "/case-studies/illusionaire/nj-01.svg",
      color: "from-indigo-600 to-blue-600"
    },
    {
      title: "Starfall",
      time: "01:45",
      description: "Shooting lights trace secret paths across the darkness.",
      image: "/case-studies/illusionaire/nj-02.svg",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Lucid Crossing",
      time: "03:15",
      description: "Between sleep and waking, a quiet portal opens.",
      image: "/case-studies/illusionaire/nj-03.svg",
      color: "from-cyan-500 to-violet-600"
    },
    {
      title: "Silent Watch",
      time: "04:30",
      description: "The night observes—still, present, and aware.",
      image: "/case-studies/illusionaire/nj-04.svg",
      color: "from-violet-600 to-fuchsia-500"
    },
    {
      title: "Dawn Break",
      time: "06:00",
      description: "First light folds gently into the horizon.",
      image: "/case-studies/illusionaire/nj-05.svg",
      color: "from-fuchsia-500 to-rose-400"
    }
  ];

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => {
          // Safe array access with fallback
          const leftPos = STAR_LEFT_POSITIONS?.[i % STAR_LEFT_POSITIONS.length] ?? 50;
          const topPos = STAR_TOP_POSITIONS?.[i % STAR_TOP_POSITIONS.length] ?? 50;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: (i % 40) * 0.1,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 insomnia-text-invert-purple">
            Night Journey
          </h2>
          <p className="text-xl insomnia-text-invert max-w-3xl mx-auto">
            Follow the path through five distinct chapters of the Illusionaire experience, 
            each representing a different stage of the nocturnal odyssey.
          </p>
        </motion.div>

        {/* Journey Path */}
        <div className="relative max-w-6xl mx-auto">
          {/* Path Line */}
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6"/>
                <stop offset="25%" stopColor="#3b82f6"/>
                <stop offset="50%" stopColor="#06b6d4"/>
                <stop offset="75%" stopColor="#8b5cf6"/>
                <stop offset="100%" stopColor="#ec4899"/>
              </linearGradient>
              <filter id="pathGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <path
              d="M80 470 Q240 270 400 470 Q560 670 720 470 Q880 270 1040 470"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#pathGlow)"
              opacity="0.8"
            />
            
            {/* Hidden path for particle animation */}
            <path 
              id="journeyPath" 
              d="M80 470 Q240 270 400 470 Q560 670 720 470 Q880 270 1040 470" 
              fill="none" 
              opacity="0"
            />
            
            {/* Animated Particles */}
            <circle r="4" fill="#ffffff" opacity="0.8">
              <animateMotion dur="10s" repeatCount="indefinite">
                <mpath href="#journeyPath"/>
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="10s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Chapter Nodes */}
          <div className="relative z-10 h-[640px]">
            {chapters.map((chapter, index) => {
              const positions = [
                { x: '8%', y: '54%' },
                { x: '28%', y: '34%' },
                { x: '48%', y: '56%' },
                { x: '68%', y: '32%' },
                { x: '88%', y: '52%' }
              ];

              return (
                <motion.div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{
                    left: positions[index].x,
                    top: positions[index].y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: hoveredChapter === index ? 1000 : 1
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onHoverStart={() => setHoveredChapter(index)}
                  onHoverEnd={() => setHoveredChapter(null)}
                  whileHover={{ scale: 1.1, z: 100 }}
                >
                  {/* Chapter Image */}
                  <motion.div
                    className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-4"
                    animate={{
                      borderColor: hoveredChapter === index 
                        ? "rgba(139, 92, 246, 0.8)" 
                        : "rgba(255, 255, 255, 0.2)",
                      boxShadow: hoveredChapter === index
                        ? "0 0 30px rgba(139, 92, 246, 0.6)"
                        : "0 10px 30px rgba(0, 0, 0, 0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-30`}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Time Badge */}
                    <div className="absolute -top-2 -right-2 bg-[var(--mb-text)] dark:bg-black text-white text-xs px-2 py-1 rounded-full border border-[var(--mb-accent)]">
                      {chapter.time}
                    </div>
                  </motion.div>

                  {/* Chapter Info */}
                  <motion.div
                    className="text-center"
                    animate={{
                      y: hoveredChapter === index ? -10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2">{chapter.title}</h3>
                    
                    {/* Expanded Description */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredChapter === index ? 1 : 0,
                        height: hoveredChapter === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden relative z-[2000]"
                    >
                      <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-[var(--mb-border)] dark:border-purple-500/30 max-w-xs">
                        <p className="night-journey-tooltip-text text-sm leading-relaxed">
                          {chapter.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Chapter Number */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--mb-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm"
                    animate={{
                      scale: hoveredChapter === index ? 1.2 : 1,
                      backgroundColor: hoveredChapter === index ? "#8b5cf6" : "#7c3aed",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Floating Particles */}
                  {hoveredChapter === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => {
                        // Safe array access with fallback
                        const leftPos = PARTICLE_LEFT_POS?.[i % PARTICLE_LEFT_POS.length] ?? 50;
                        const topPos = PARTICLE_TOP_POS?.[i % PARTICLE_TOP_POS.length] ?? 50;
                        
                        return (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-purple-400 rounded-full"
                            style={{
                              left: `${leftPos}%`,
                              top: `${topPos}%`,
                            }}
                            animate={{
                              y: [0, -30, -60],
                              opacity: [1, 0.5, 0],
                              scale: [0.5, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"
              style={{ width: useTransform(pathProgress, [0, 100], ["0%", "100%"]) }}
            />
          </motion.div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold insomnia-text-invert-purple mb-4">Complete Experience Duration</h3>
            <p className="insomnia-text-invert mb-6">
              The full Illusionaire journey spans approximately 8 hours of immersive content, 
              designed to mirror the natural rhythm of a sleepless night and the gradual transition to dawn.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Average Session", value: "45 min" },
                { label: "Total Chapters", value: "5" },
                { label: "Replay Value", value: "∞" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                  <div className="insomnia-text-invert-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
