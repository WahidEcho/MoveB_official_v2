"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PassAppPictures() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Vouchers & perks",
      content: (
        <div className="w-full h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-white rounded rotate-45"></div>
          </div>
          
          {/* Voucher Cards */}
          <div className="relative z-10 flex items-center justify-center gap-6">
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg transform -rotate-6"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-purple-600 font-bold text-2xl">20% OFF</div>
              <div className="text-gray-600 text-lg">Drinks</div>
              <div className="w-20 h-2 bg-purple-600 rounded mt-3"></div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg transform rotate-3"
              whileHover={{ scale: 1.05, rotate: 6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-pink-600 font-bold text-2xl">FREE</div>
              <div className="text-gray-600 text-lg">Entry</div>
              <div className="w-20 h-2 bg-pink-600 rounded mt-3"></div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg transform -rotate-3"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-purple-600 font-bold text-2xl">$5</div>
              <div className="text-gray-600 text-lg">Credit</div>
              <div className="w-20 h-2 bg-purple-600 rounded mt-3"></div>
            </motion.div>
          </div>
          
          {/* Gift Icon */}
          <div className="absolute top-6 right-6 text-white text-4xl">🎁</div>
        </div>
      )
    },
    {
      title: "Finance & P&L snapshots",
      content: (
        <div className="w-full h-80 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-white"></div>
              ))}
            </div>
          </div>
          
          {/* Chart Elements */}
          <div className="relative z-10 w-full h-full p-10">
            {/* Revenue Chart */}
            <div className="mb-6">
              <div className="text-white font-bold text-2xl mb-4">Revenue Overview</div>
              <div className="flex items-end gap-3 h-32">
                {[60, 80, 100, 70, 90, 110].map((height, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-t w-10 opacity-90"
                    style={{ height: `${height}px` }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                  />
                ))}
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="bg-white/20 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white text-3xl font-bold">$12,500</div>
                <div className="text-white/80 text-lg">Total Revenue</div>
              </motion.div>
              <motion.div 
                className="bg-white/20 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white text-3xl font-bold">+15%</div>
                <div className="text-white/80 text-lg">Growth</div>
              </motion.div>
            </div>
          </div>
          
          {/* Money Icon */}
          <div className="absolute top-6 right-6 text-white text-4xl">💰</div>
        </div>
      )
    },
    {
      title: "Analytics dashboards",
      content: (
        <div className="w-full h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden">
          {/* Background Circles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white rounded-full"></div>
          </div>
          
          {/* Dashboard Elements */}
          <div className="relative z-10 w-full h-full p-8">
            {/* Header */}
            <div className="text-white font-bold text-2xl mb-6">Live Analytics</div>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: "247", label: "Visitors" },
                { value: "89%", label: "Check-in" },
                { value: "156", label: "Active" }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/20 rounded-lg p-4 text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-xl font-bold">{metric.value}</div>
                  <div className="text-white/80 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Activity Graph */}
            <motion.div 
              className="bg-white/20 rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white text-lg mb-3">Activity Timeline</div>
              <div className="flex items-end gap-1 h-20">
                {Array.from({ length: 12 }).map((_, i) => {
                  // Deterministic heights based on index for consistent SSR
                  const heights = [45, 65, 80, 55, 75, 90, 60, 70, 85, 50, 65, 75];
                  const opacities = [0.7, 0.8, 0.9, 0.75, 0.85, 0.95, 0.8, 0.9, 1.0, 0.75, 0.85, 0.9];
                  return (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-t flex-1" 
                      style={{ opacity: opacities[i] }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heights[i]}%` }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                      whileHover={{ opacity: 1 }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
          
          {/* Analytics Icon */}
          <div className="absolute top-6 right-6 text-white text-4xl">📊</div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-[var(--mb-bg-1)]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
            Pass App in Pictures
          </h2>
          <p className="text-xl text-[var(--mb-muted)] max-w-2xl mx-auto text-center">
            Visual showcase of our comprehensive ticketing and analytics platform
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Carousel Container */}
          <div className="relative bg-gray-800 rounded-3xl p-10 min-h-[500px]">
            {/* Navigation Arrows */}
            <motion.button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white z-10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            <motion.button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white z-10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>

            {/* Slide Content */}
            <div className="text-center">
              <motion.h3 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl font-bold mb-10"
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.div 
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                {slides[currentSlide].content}
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-10 gap-3">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[var(--mb-primary)]' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Labels */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {slides.map((slide, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[var(--mb-primary)] text-white shadow-lg' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-semibold">{slide.title}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
