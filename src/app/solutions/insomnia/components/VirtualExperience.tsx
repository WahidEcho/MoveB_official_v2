"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VirtualExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      title: "Immersive Environments",
      description: "Navigate through 12 unique virtual worlds, each with its own physics, atmosphere, and interactive elements.",
      icon: "🌌",
      details: ["Physics-based interactions", "Dynamic lighting systems", "Procedural generation", "Multi-sensory feedback"]
    },
    {
      title: "Adaptive Narratives",
      description: "Experience stories that change based on your choices, emotions, and interaction patterns.",
      icon: "📖",
      details: ["Emotion recognition", "Branching storylines", "Personalized content", "Real-time adaptation"]
    },
    {
      title: "Social Presence",
      description: "Connect with others in shared virtual spaces, experiencing collective insomnia journeys.",
      icon: "👥",
      details: ["Multi-user environments", "Voice spatial audio", "Gesture recognition", "Shared experiences"]
    }
  ];

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 opacity-20"
        >
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-purple-500/10"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  backgroundColor: [
                    "rgba(139, 92, 246, 0.05)",
                    "rgba(59, 130, 246, 0.05)",
                    "rgba(139, 92, 246, 0.05)"
                  ]
                }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                delay: i * 0.1,
              }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 insomnia-text-invert-purple">
            Virtual Reality Redefined
          </h2>
          <p className="text-xl insomnia-text-invert max-w-4xl mx-auto">
            Illusionaire pushes the boundaries of virtual reality, creating experiences that blur the line 
            between dreams and digital worlds. Every element is crafted to transport users beyond reality.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full relative overflow-hidden"
                whileHover={{
                  borderColor: "rgba(139, 92, 246, 0.5)",
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Floating Icon */}
                <motion.div
                  className="text-6xl mb-6 inline-block"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {experience.icon}
                </motion.div>

                <h3 className="text-2xl font-bold insomnia-text-invert-purple mb-4">{experience.title}</h3>
                <p className="insomnia-text-invert mb-6 leading-relaxed">{experience.description}</p>

                {/* Feature List */}
                <div className="space-y-3">
                  {experience.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: detailIndex * 0.3,
                        }}
                      />
                      <span className="insomnia-text-invert-muted text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.2), transparent)",
                    backgroundSize: "400% 400%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tech Specs Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30"
        >
          <h3 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-8">Technical Specifications</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Resolution", value: "4K per eye", unit: "pixels" },
              { label: "Frame Rate", value: "120", unit: "FPS" },
              { label: "Field of View", value: "110°", unit: "degrees" },
              { label: "Latency", value: "<20", unit: "ms" }
            ].map((spec, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {spec.value}
                </motion.div>
                <div className="insomnia-text-invert-muted text-sm">{spec.unit}</div>
                <div className="insomnia-text-invert font-medium mt-1">{spec.label}</div>
                
                {/* Animated Progress Bar */}
                <motion.div
                  className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
