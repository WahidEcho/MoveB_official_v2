"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Deterministic positioning arrays - defined outside component for stability
const DATA_LEFT_POSITIONS = [41.7, 31.2, 96.6, 53.6, 36.3, 41.9, 46.4, 26.8, 35.5, 68.4, 53.3, 32.7, 77.7, 70.9, 89.8, 11.3, 28.6, 14.3, 43.3, 10.0];
const DATA_TOP_POSITIONS = [6.0, 38.2, 85.3, 36.2, 74.6, 88.6, 88.9, 26.8, 83.0, 5.4, 21.9, 2.8, 12.9, 25.4, 89.4, 46.0, 98.8, 96.2, 85.6, 65.8];

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      category: "VR Hardware",
      icon: "🥽",
      items: [
        { name: "Meta Quest Pro", feature: "Mixed Reality Capabilities" },
        { name: "HTC Vive Pro 2", feature: "Ultra-High Resolution" },
        { name: "Varjo Aero", feature: "Human-Eye Resolution" },
        { name: "Haptic Feedback Suits", feature: "Full-Body Immersion" }
      ]
    },
    {
      category: "Software Engine",
      icon: "⚙️",
      items: [
        { name: "Unity 3D", feature: "Cross-Platform Development" },
        { name: "Unreal Engine 5", feature: "Photorealistic Rendering" },
        { name: "Custom Physics Engine", feature: "Dream-State Mechanics" },
        { name: "AI Behavior System", feature: "Adaptive Narratives" }
      ]
    },
    {
      category: "Audio Technology",
      icon: "🎵",
      items: [
        { name: "Spatial Audio Engine", feature: "3D Positional Sound" },
        { name: "Procedural Music System", feature: "Dynamic Soundscapes" },
        { name: "Voice Recognition", feature: "Natural Interaction" },
        { name: "Binaural Beats", feature: "Brainwave Synchronization" }
      ]
    },
    {
      category: "AI & Analytics",
      icon: "🤖",
      items: [
        { name: "Emotion Recognition", feature: "Real-time Mood Analysis" },
        { name: "Gaze Tracking", feature: "Attention Mapping" },
        { name: "Predictive AI", feature: "Content Adaptation" },
        { name: "Performance Analytics", feature: "Experience Optimization" }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-purple-500/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 insomnia-text-invert-purple">
            Technology Stack
          </h2>
          <p className="text-xl insomnia-text-invert max-w-3xl mx-auto">
            Cutting-edge technologies working in harmony to create the most immersive virtual experience ever conceived.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            <div className="flex gap-2">
              {technologies.map((tech, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "bg-purple-600 text-white shadow-lg"
                      : "insomnia-text-invert-muted hover:text-purple-700 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl mr-2">{tech.icon}</span>
                  {tech.category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-8 text-center">
              <span className="text-4xl mr-3">{technologies[activeTab].icon}</span>
              {technologies[activeTab].category}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {technologies[activeTab].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(139, 92, 246, 0.5)",
                      boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold insomnia-text-invert-purple mb-3">{item.name}</h4>
                    <p className="insomnia-text-invert mb-4">{item.feature}</p>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                      <motion.div
                        className="absolute right-0 top-0 text-xs text-purple-400 mt-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                      >
                        Integration: 100%
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Tech Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative max-w-3xl mx-auto h-64 bg-black/50 backdrop-blur-sm rounded-3xl border border-purple-500/30 overflow-hidden">
            {/* 3D Tech Stack Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Central Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.5)",
                      "0 0 40px rgba(139, 92, 246, 1)",
                      "0 0 20px rgba(139, 92, 246, 0.5)"
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Orbiting Tech Icons */}
                {technologies.map((tech, index) => {
                  const angle = (index * 90) * (Math.PI / 180);
                  const radius = 80;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-2xl"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: x - 24,
                        marginTop: y - 24,
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    >
                      {tech.icon}
                    </motion.div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {technologies.map((_, index) => {
                    const angle = (index * 90) * (Math.PI / 180);
                    const radius = 80;
                    const x = Math.cos(angle) * radius + 96;
                    const y = Math.sin(angle) * radius + 96;

                    return (
                      <motion.line
                        key={index}
                        x1="96"
                        y1="96"
                        x2={x}
                        y2={y}
                        stroke="rgba(139, 92, 246, 0.3)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Floating Data Points */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => {
                // Safe array access with fallback
                const leftPos = DATA_LEFT_POSITIONS?.[i % DATA_LEFT_POSITIONS.length] ?? 50;
                const topPos = DATA_TOP_POSITIONS?.[i % DATA_TOP_POSITIONS.length] ?? 50;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      left: `${leftPos}%`,
                      top: `${topPos}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + (i % 2),
                      repeat: Infinity,
                      delay: (i % 20) * 0.1,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
