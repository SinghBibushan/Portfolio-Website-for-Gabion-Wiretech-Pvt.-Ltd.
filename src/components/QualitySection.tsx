import React, { Children } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
export const QualitySection = () => {
  const qualityTests = ['Tensile Strength Testing', 'Zinc Coating Measurement', 'Adhesion Testing', 'Dimensional Accuracy', 'Wrap Testing', 'Visual Inspection', 'Elongation Testing', 'Corrosion Resistance Testing'];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 10
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="quality" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 -ml-48 -mb-48"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Quality Control</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our rigorous quality control processes ensure that every product
            meets the highest standards
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="relative" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1581092160607-ee22731d4be2?q=80&w=2000" alt="Quality Control Process" className="rounded-lg shadow-xl w-full h-auto relative z-10" />
          </motion.div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Quality Assurance Process
            </h3>
            <p className="text-gray-600 mb-8">
              At Gabion Wiretech, quality is our top priority. Every product
              undergoes comprehensive testing before it leaves our facility to
              ensure it meets our stringent quality standards.
            </p>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={container} initial="hidden" whileInView="show" viewport={{
            once: false,
            margin: '-50px'
          }}>
              {qualityTests.map((test, index) => <motion.div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-100 transform transition-all duration-300" variants={item} whileHover={{
              scale: 1.03,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{test}</span>
                </motion.div>)}
            </motion.div>
            <motion.div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-200" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} viewport={{
            once: true
          }}>
              <p className="text-blue-800 font-medium">
                Our products are tested according to international standards to
                ensure consistent quality and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};