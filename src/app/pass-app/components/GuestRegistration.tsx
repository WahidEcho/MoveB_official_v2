"use client";
import { motion } from "framer-motion";

export default function GuestRegistration() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Guest Registration
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Laptop Mockup */}
          <div className="relative">
            {/* Laptop Base */}
            <div className="bg-gray-300 rounded-b-3xl h-8 w-full relative">
              <div className="absolute inset-x-0 top-0 h-2 bg-gray-400 rounded-t-lg mx-auto w-1/3"></div>
            </div>
            
            {/* Laptop Screen */}
            <div className="bg-gray-800 rounded-t-2xl border-8 border-gray-800 relative">
              <div className="bg-black rounded-lg overflow-hidden aspect-[16/10] relative">
                {/* Browser Chrome */}
                <div className="bg-gray-700 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-600 rounded-md px-3 py-1 ml-4">
                    <span className="text-gray-300 text-sm">https://registry.movebeyond.com/checkout/virtual-event</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                  </div>
                </div>
                
                {/* Web Content */}
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 h-full relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
                  </div>
                  
                  <div className="relative z-10 p-8 h-full flex">
                    {/* Checkout Form */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 mr-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-2">CheckOut</h3>
                        <p className="text-gray-600 text-sm">Virtual Event</p>
                      </div>
                      
                      {/* Event Image */}
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Form Fields */}
                      <div className="space-y-3 mb-6">
                        <div>
                          <label className="text-xs text-gray-500">Full Name</label>
                          <div className="text-sm text-gray-800">Zeyad Mansour</div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Email</label>
                          <div className="text-sm text-gray-800">zeyadmansour23@gmail.com</div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Phone Number</label>
                          <div className="text-sm text-gray-800">01234567890</div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Ticket Type</label>
                          <div className="text-sm text-gray-800">Regular ▼</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-xs text-gray-500">Number of Tickets</label>
                            <div className="text-sm text-gray-800">1</div>
                          </div>
                          <div>
                            <label className="text-xs text-gray-500">Promo Code</label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold">
                        Submit
                      </button>
                    </div>
                    
                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-64 ml-auto">
                      <h4 className="text-lg font-bold text-purple-600 mb-4">Order Summary</h4>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ticket Price:</span>
                          <span className="font-semibold">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span className="font-semibold">1</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="text-gray-600">Total Price:</span>
                          <span className="font-bold text-lg">100</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold">
                        get your ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flow Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-6 text-lg">
            <span>Enter details</span>
            <div className="w-8 h-0.5 bg-[var(--mb-primary)]"></div>
            <span>Receive ticket on email</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
