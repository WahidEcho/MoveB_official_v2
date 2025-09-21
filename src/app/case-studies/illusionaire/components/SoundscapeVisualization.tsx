"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Deterministic positioning arrays - defined outside component for stability
const SOUND_LEFT_POSITIONS = [69.6, 82.0, 69.5, 46.6, 80.8, 50.3, 41.4, 83.7, 11.7, 33.6, 34.8, 35.7, 69.4, 56.0, 33.8, 76.5, 45.8, 63.1, 92.1, 59.0];
const SOUND_TOP_POSITIONS = [45.1, 47.1, 63.4, 58.9, 27.7, 11.5, 79.2, 40.4, 22.3, 86.3, 60.5, 38.5, 68.4, 36.9, 39.1, 88.1, 48.6, 22.6, 61.7, 95.7];
const RIPPLE_LEFT_POSITIONS = [30, 70, 25, 75, 40, 60, 35, 65];
const RIPPLE_TOP_POSITIONS = [25, 75, 60, 40, 30, 70, 50, 45];

export default function SoundscapeVisualization() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setAudioFrequencies] = useState<number[]>(Array(64).fill(0));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  // Audio visualization simulation
  useEffect(() => {
    if (!isPlaying) return;
    
    const animate = () => {
      try {
        // Simulate audio frequency data with deterministic noise
        const now = Date.now();
        const newFrequencies = Array.from({ length: 64 }, (_, i) => {
          const baseFreq = Math.sin(now * 0.001 + i * 0.1) * 50;
          const noise = Math.sin(now * 0.0037 + i * 0.17) * 30; // Deterministic "noise"
          const harmonic = Math.sin(now * 0.002 + i * 0.2) * 20;
          const result = Math.max(0, baseFreq + noise + harmonic + 20);
          
          // Ensure valid number
          return isFinite(result) ? result : 0;
        });
        
        setAudioFrequencies(newFrequencies);
        drawWaveform(newFrequencies);
        
        // Only request next frame if still playing
        if (isPlaying) {
          animationRef.current = requestAnimationFrame(animate);
        }
      } catch (error) {
        console.warn('Animation error:', error);
        // Stop animation on error
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = undefined;
        }
      }
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, [isPlaying]);

  const drawWaveform = (frequencies: number[]) => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Validate dimensions
      if (width <= 0 || height <= 0) return;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Draw frequency bars
      const barWidth = width / frequencies.length;
      frequencies.forEach((freq, i) => {
        // Validate frequency value
        if (!isFinite(freq) || freq < 0) return;
        
        const barHeight = (freq / 100) * height * 0.8;
        const x = i * barWidth;
        const y = height - barHeight;
        
        // Validate positions
        if (!isFinite(x) || !isFinite(y) || !isFinite(barHeight)) return;
        
        // Create gradient safely
        try {
          const gradient = ctx.createLinearGradient(x, y, x, height);
          gradient.addColorStop(0, `hsl(${240 + i * 2}, 70%, 60%)`);
          gradient.addColorStop(1, `hsl(${280 + i * 2}, 70%, 30%)`);
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, barWidth - 1, barHeight);
          
          // Add glow effect
          ctx.shadowColor = `hsl(${240 + i * 2}, 70%, 60%)`;
          ctx.shadowBlur = 10;
          ctx.fillRect(x, y, barWidth - 1, barHeight);
          ctx.shadowBlur = 0;
        } catch {
          // Fallback to simple fill
          ctx.fillStyle = `hsl(${240 + i * 2}, 70%, 50%)`;
          ctx.fillRect(x, y, barWidth - 1, barHeight);
        }
      });
    } catch (error) {
      console.warn('Canvas drawing error:', error);
      // Fail silently to prevent crashes
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          // Safe array access with fallback
          const leftPos = SOUND_LEFT_POSITIONS?.[i % SOUND_LEFT_POSITIONS.length] ?? 50;
          const topPos = SOUND_TOP_POSITIONS?.[i % SOUND_TOP_POSITIONS.length] ?? 50;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: (i % 30) * 0.1,
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
            Soundscape of Dreams
          </h2>
          <p className="text-xl insomnia-text-invert max-w-3xl mx-auto">
            Experience the audio-visual symphony that guides users through their virtual insomnia journey.
          </p>
        </motion.div>

        {/* Main Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Waveform Canvas */}
          <div className="relative h-96 bg-black/50 backdrop-blur-sm rounded-3xl border border-purple-500/30 overflow-hidden mb-12">
            <canvas
              ref={canvasRef}
              width={1200}
              height={384}
              className="w-full h-full"
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"
                animate={{
                  opacity: isPlaying ? [0.3, 0.7, 0.3] : 0.1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>

          {/* Floating Audio Elements */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Ambient Layers",
                description: "Deep atmospheric tones that create immersive environments",
                frequency: "20-200 Hz",
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "Melodic Sequences",
                description: "Evolving musical patterns that respond to user interaction",
                frequency: "200-2000 Hz",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Spatial Audio",
                description: "3D positional sound that enhances virtual presence",
                frequency: "2000-20000 Hz",
                color: "from-cyan-500 to-purple-500"
              }
            ].map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(139, 92, 246, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Frequency Visualizer */}
                  <div className="flex justify-center mb-4">
                    <div className="flex items-end gap-1 h-16">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 bg-gradient-to-t ${element.color} rounded-full`}
                          animate={{
                            height: isPlaying 
                              ? [10 + (i % 5) * 8, 20 + (i % 6) * 10, 10 + (i % 4) * 8]
                              : 10,
                          }}
                          transition={{
                            duration: 0.5 + (i % 5) * 0.1,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold insomnia-text-invert-purple mb-3">{element.title}</h3>
                  <p className="insomnia-text-invert text-sm mb-4">{element.description}</p>
                  <div className="text-purple-400 text-xs font-mono">{element.frequency}</div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Controls */}
          <div className="text-center">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: isPlaying 
                  ? ["0 0 20px rgba(139, 92, 246, 0.5)", "0 0 40px rgba(139, 92, 246, 1)", "0 0 20px rgba(139, 92, 246, 0.5)"]
                  : "0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isPlaying ? "PAUSE EXPERIENCE" : "PLAY SOUNDSCAPE"}
              
              {/* Ripple Effect */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 border-2 border-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.8, 0.3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>
            
            <motion.p
              className="insomnia-text-invert-muted mt-4"
              animate={{ opacity: isPlaying ? [0.5, 1, 0.5] : 0.7 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isPlaying ? "Audio visualization active" : "Click to experience the soundscape"}
            </motion.p>
          </div>

          {/* Floating Sound Waves */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => {
                // Safe array access with fallback
                const leftPos = RIPPLE_LEFT_POSITIONS?.[i % RIPPLE_LEFT_POSITIONS.length] ?? 50;
                const topPos = RIPPLE_TOP_POSITIONS?.[i % RIPPLE_TOP_POSITIONS.length] ?? 50;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 border border-purple-400/30 rounded-full"
                    style={{
                      left: `${leftPos}%`,
                      top: `${topPos}%`,
                    }}
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 0.5, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + (i % 2),
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
