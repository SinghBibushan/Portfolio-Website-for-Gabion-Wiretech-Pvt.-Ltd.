import React from 'react';
import { motion } from 'framer-motion';
export const HeroSection = () => {
  return <section id="home" className="relative h-[90vh] max-h-[800px] min-h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594328082970-cf6a92166826?q=80&w=2000')] bg-cover bg-center"></div>
        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50" animate={{
        background: ['linear-gradient(to right, rgba(30,64,175,0.5), rgba(79,70,229,0.5))', 'linear-gradient(to right, rgba(79,70,229,0.5), rgba(30,64,175,0.5))', 'linear-gradient(to right, rgba(30,64,175,0.5), rgba(79,70,229,0.5))']
      }} transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse'
      }}></motion.div>
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <motion.div className="max-w-3xl" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Gabion Wiretech <span className="text-blue-300">Pvt. Ltd.</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl font-medium text-blue-100 mb-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            Premium Wire Solutions for Infrastructure Excellence
          </motion.p>
          <motion.p className="text-blue-200 mb-8 max-w-lg" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            Manufacturing high-quality galvanized wires, gabion boxes, chain
            link fences, and more from our state-of-the-art facilities across
            Nepal.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }}>
            <motion.a href="#products" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium" whileHover={{
            scale: 1.05,
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
          }} whileTap={{
            scale: 0.95
          }}>
              Our Products
            </motion.a>
            <motion.a href="#contact" className="px-6 py-3 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-colors font-medium" whileHover={{
            scale: 1.05,
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)'
          }} whileTap={{
            scale: 0.95
          }}>
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      {/* Factory Image with animation */}
      <motion.div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-4/5" initial={{
      opacity: 0,
      x: 100
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 1,
      delay: 0.5
    }}>
        <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000" alt="Factory production line" className="w-full h-full object-cover object-center rounded-tl-3xl shadow-2xl" />
      </motion.div>
    </section>;
};