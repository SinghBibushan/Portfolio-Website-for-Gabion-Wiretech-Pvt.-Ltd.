import React from 'react';
import { motion } from 'framer-motion';
export const SpecsSection = () => {
  const specData = [{
    size: '1.25 mm',
    tolerance: '±0.03 mm',
    tensileStrength: '550-700 N/mm²',
    gsmCoating: '80-90 gsm'
  }, {
    size: '1.60 mm',
    tolerance: '±0.03 mm',
    tensileStrength: '550-700 N/mm²',
    gsmCoating: '90-100 gsm'
  }, {
    size: '2.00 mm',
    tolerance: '±0.04 mm',
    tensileStrength: '550-700 N/mm²',
    gsmCoating: '100-120 gsm'
  }, {
    size: '2.50 mm',
    tolerance: '±0.04 mm',
    tensileStrength: '550-700 N/mm²',
    gsmCoating: '120-140 gsm'
  }, {
    size: '3.15 mm',
    tolerance: '±0.05 mm',
    tensileStrength: '550-700 N/mm²',
    gsmCoating: '140-160 gsm'
  }, {
    size: '4.00 mm',
    tolerance: '±0.05 mm',
    tensileStrength: '550-700 N/mm²',
    gsmCoating: '160-180 gsm'
  }];
  return <section id="specifications" className="py-20 bg-gray-50 relative">
      {/* Animated mesh pattern background */}
      <motion.div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=1000')] bg-repeat" animate={{
      backgroundPosition: ['0px 0px', '100px 100px']
    }} transition={{
      duration: 30,
      repeat: Infinity,
      repeatType: 'reverse'
    }}></motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">
            Technical Specifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            GI Wire specifications that meet industry standards
          </p>
        </div>
        <motion.div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-700">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Tolerance
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Tensile Strength
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  GSM Coating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {specData.map((spec, index) => <motion.tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              backgroundColor: 'rgba(219, 234, 254, 0.3)'
            }}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {spec.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {spec.tolerance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {spec.tensileStrength}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {spec.gsmCoating}
                  </td>
                </motion.tr>)}
            </tbody>
          </table>
        </motion.div>
        <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-sm text-gray-600 bg-blue-50 inline-block px-4 py-2 rounded-full">
            All specifications are in accordance with industry standards. Custom
            specifications are available upon request.
          </p>
        </div>
      </div>
    </section>;
};