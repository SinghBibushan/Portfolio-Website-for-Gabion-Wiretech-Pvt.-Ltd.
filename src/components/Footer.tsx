import React from 'react';
import { motion } from 'framer-motion';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    name: 'Facebook',
    url: '#'
  }, {
    name: 'LinkedIn',
    url: '#'
  }, {
    name: 'Twitter',
    url: '#'
  }];
  return <footer className="bg-blue-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full opacity-30 -ml-48 -mb-48"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4">
              Gabion Wiretech Pvt. Ltd.
            </h3>
            <p className="text-blue-100 mb-2">
              Premium Wire Solutions for Infrastructure Excellence
            </p>
            <p className="text-blue-200 text-sm">
              Providing high-quality galvanized wire products for
              infrastructure, construction, and more across Nepal.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Specifications', 'Quality', 'Contact'].map((item, index) => <motion.li key={item} whileHover={{
              x: 5
            }} transition={{
              duration: 0.2
            }}>
                  <a href={`#${item.toLowerCase()}`} className="text-blue-200 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">›</span> {item}
                  </a>
                </motion.li>)}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-blue-200 mb-3">
              Hetauda Industrial Area,
              <br />
              Makwanpur, Nepal
            </p>
            <p className="text-blue-200 mb-3">+977-123-456789</p>
            <p className="text-blue-200 mb-4">info@gabionwiretech.com</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <motion.a key={link.name} href={link.url} className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors" whileHover={{
              y: -5
            }} whileTap={{
              scale: 0.95
            }}>
                  <span className="sr-only">{link.name}</span>
                  <div className="w-5 h-5 text-blue-200">{link.name[0]}</div>
                </motion.a>)}
            </div>
          </div>
        </div>
        <motion.div className="border-t border-blue-800 mt-10 pt-6 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 1
      }} viewport={{
        once: true
      }}>
          <p className="text-blue-300 text-sm">
            &copy; {currentYear} Gabion Wiretech Pvt. Ltd. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};