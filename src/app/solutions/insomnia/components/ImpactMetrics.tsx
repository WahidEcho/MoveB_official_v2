"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ImpactMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const [counters, setCounters] = useState({
    users: 0,
    sessions: 0,
    satisfaction: 0,
    awards: 0
  });

  useEffect(() => {
    if (!isInView) return;

    const finalValues = {
      users: 50000,
      sessions: 250000,
      satisfaction: 98,
      awards: 12
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 fps
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;

      const intervalId = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervalId);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);

      return intervalId;
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isInView]);

  const metrics = [
    {
      key: 'users',
      label: 'Active Users',
      value: counters.users,
      suffix: '+',
      description: 'Monthly active users experiencing Illusionaire',
      icon: '👥',
      color: 'from-purple-500 to-blue-500'
    },
    {
      key: 'sessions',
      label: 'VR Sessions',
      value: counters.sessions,
      suffix: '+',
      description: 'Total immersive sessions completed',
      icon: '🎮',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'satisfaction',
      label: 'User Satisfaction',
      value: counters.satisfaction,
      suffix: '%',
      description: 'Users rating the experience as "life-changing"',
      icon: '⭐',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      key: 'awards',
      label: 'Industry Awards',
      value: counters.awards,
      suffix: '',
      description: 'Recognition from VR and tech communities',
      icon: '🏆',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      quote: "Illusionaire redefined my understanding of virtual reality. It's not just a game; it's a profound journey into consciousness.",
      author: "Dr. Sarah Chen",
      role: "VR Researcher, Stanford University",
      avatar: "🧑‍🔬"
    },
    {
      quote: "The most innovative use of VR technology I've experienced. Illusionaire pushes boundaries in ways I never thought possible.",
      author: "Marcus Rodriguez",
      role: "Tech Journalist, VR Today",
      avatar: "📰"
    },
    {
      quote: "As someone who struggles with sleep, this virtual experience gave me a new perspective on my relationship with insomnia.",
      author: "Emily Watson",
      role: "User, Beta Tester",
      avatar: "😴"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
            ],
          }}
          transition={{ duration: 12, repeat: Infinity }}
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
            Impact & Recognition
          </h2>
          <p className="text-xl insomnia-text-invert max-w-3xl mx-auto">
            Measuring the profound effect of Illusionaire on users, industry, and the future of virtual reality experiences.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full text-center relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(139, 92, 246, 0.5)",
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.5 }}
                />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {metric.icon}
                </motion.div>

                {/* Counter */}
                <motion.div
                  className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.3)",
                      "0 0 20px rgba(139, 92, 246, 0.6)",
                      "0 0 10px rgba(139, 92, 246, 0.3)"
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {metric.value.toLocaleString()}{metric.suffix}
                </motion.div>

                <h3 className="text-xl font-bold insomnia-text-invert-purple mb-3">{metric.label}</h3>
                <p className="insomnia-text-invert-muted text-sm">{metric.description}</p>

                {/* Animated Progress Ring */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="insomnia-text-invert"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-purple-500"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.8 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center insomnia-text-invert-purple mb-12">User Testimonials</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <blockquote className="insomnia-text-invert italic mb-4 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-bold insomnia-text-invert-purple">{testimonial.author}</div>
                    <div className="insomnia-text-invert-muted text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold insomnia-text-invert-purple mb-8">Industry Recognition</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { award: "VR Innovation Award", year: "2024", organization: "VR Society" },
                { award: "Best Immersive Experience", year: "2024", organization: "Tech Innovation Awards" },
                { award: "Excellence in Digital Arts", year: "2024", organization: "Digital Arts Foundation" },
                { award: "Users' Choice Award", year: "2024", organization: "VR Community" }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-3xl mb-2"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    🏆
                  </motion.div>
                  <div className="insomnia-text-invert-purple font-bold text-sm mb-1">{award.award}</div>
                  <div className="insomnia-text-invert-muted text-xs">{award.organization}</div>
                  <div className="text-purple-400 text-xs">{award.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
