import React, { Children } from 'react';
import { Award, CheckCircle, Shield, Truck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
export const WhyChooseUsSection = () => {
  const features = [{
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: 'Prime Raw Materials',
    description: 'We use only SAE1008 grade raw materials for superior quality products'
  }, {
    icon: <Award className="w-10 h-10 text-blue-600" />,
    title: 'Unmatched Quality',
    description: 'Rigorous quality control processes ensure consistent product excellence'
  }, {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: 'Timely Delivery',
    description: 'Reliable supply chain ensures your orders arrive on schedule'
  }, {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'Expert Team',
    description: 'Skilled professionals with years of industry experience'
  }, {
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    title: 'Certified Products',
    description: 'All products meet industry standards and certifications'
  }];
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
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative">
      {/* Animated mesh pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=1000')] bg-repeat"></div>
        <motion.div className="absolute inset-0 bg-blue-500/5" animate={{
        opacity: [0.02, 0.05, 0.02]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse'
      }}></motion.div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional quality and service
            that sets us apart
          </p>
        </div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{
        once: false,
        margin: '-50px'
      }}>
          {features.map((feature, index) => <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform" variants={item} whileHover={{
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
              <motion.div className="mb-4 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full" whileHover={{
            rotate: 5
          }}>
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};