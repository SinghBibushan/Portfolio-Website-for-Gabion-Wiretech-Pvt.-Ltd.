import React, { useState } from 'react';
import { motion } from 'framer-motion';
export const ProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const products = [{
    name: 'GI Wire',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=2000',
    description: 'Hot-dip heavy galvanized iron wires with superior zinc coating for excellent corrosion resistance.'
  }, {
    name: 'Chain Link Fence',
    image: 'https://images.unsplash.com/photo-1572505431736-1821bdad6909?q=80&w=2000',
    description: 'Durable and flexible fencing solution perfect for security, residential and commercial applications.'
  }, {
    name: 'Gabion Box',
    image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2000',
    description: 'Heavy-duty wire mesh containers filled with stones for retaining walls, erosion control, and landscaping.'
  }, {
    name: 'Ribbed Wires',
    image: 'https://images.unsplash.com/photo-1565990315145-9b2f389b0927?q=80&w=2000',
    description: 'Specially designed wires with ribs for enhanced grip and superior bonding in construction applications.'
  }, {
    name: 'Geo-textiles',
    image: 'https://images.unsplash.com/photo-1574105760593-5c8be14635ef?q=80&w=2000',
    description: 'Permeable fabrics used with soil for separation, filtration, reinforcement, protection, and drainage.'
  }];
  return <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality wire products manufactured with precision and care
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => <motion.div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100} whileHover={{
          y: -10
        }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}>
              <div className="h-48 overflow-hidden relative">
                <motion.img src={product.image} alt={product.name} className="w-full h-full object-cover" animate={{
              scale: hoveredIndex === index ? 1.1 : 1
            }} transition={{
              duration: 0.4
            }} />
                <motion.div className="absolute inset-0 bg-blue-800 opacity-0" animate={{
              opacity: hoveredIndex === index ? 0.2 : 0
            }} transition={{
              duration: 0.4
            }}></motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <motion.div className="mt-4 w-0 h-0.5 bg-blue-500" animate={{
              width: hoveredIndex === index ? '100%' : '0%'
            }} transition={{
              duration: 0.3
            }}></motion.div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};