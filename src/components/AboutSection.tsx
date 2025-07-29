import React from 'react';
import { Factory, Leaf, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A leading manufacturer of high-quality galvanized wire products in
            Nepal
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div data-aos="fade-right" whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.3
        }}>
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000" alt="Gabion Wiretech Factory" className="rounded-lg shadow-xl w-full h-auto" />
          </motion.div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Gabion Wiretech Pvt. Ltd.
            </h3>
            <p className="text-gray-600 mb-8">
              Established as a premier manufacturer of hot-dip heavy galvanized
              (GI) wires and wire products, Gabion Wiretech is committed to
              delivering unmatched quality while maintaining eco-friendly
              manufacturing practices.
            </p>
            <div className="space-y-6">
              <motion.div className="flex items-start" whileHover={{
              x: 5
            }} transition={{
              duration: 0.2
            }}>
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Strategic Locations
                  </h4>
                  <p className="text-gray-600">
                    Manufacturing hub in Hetauda with nationwide presence
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" whileHover={{
              x: 5
            }} transition={{
              duration: 0.2
            }}>
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Factory className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    State-of-the-art Facility
                  </h4>
                  <p className="text-gray-600">
                    Modern manufacturing equipment for consistent quality
                    production
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" whileHover={{
              x: 5
            }} transition={{
              duration: 0.2
            }}>
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Leaf className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Eco-Friendly Practices
                  </h4>
                  <p className="text-gray-600">
                    Committed to sustainable manufacturing and minimal
                    environmental impact
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};