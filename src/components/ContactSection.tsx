import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './UI/ContactForm';
import { motion } from 'framer-motion';
export const ContactSection = () => {
  const offices = [{
    name: 'Factory & Head Office',
    location: 'Hetauda Industrial Area, Makwanpur, Nepal',
    phone: '+977-123-456789',
    email: 'factory@gabionwiretech.com'
  }, {
    name: 'Kathmandu Sales Office',
    location: 'Baluwatar, Kathmandu, Nepal',
    phone: '+977-987-654321',
    email: 'sales@gabionwiretech.com'
  }, {
    name: 'Branch Office',
    location: 'Janaki 6, Nepalgunj, Nepal',
    phone: '+977-456-789123',
    email: 'nepalgunj@gabionwiretech.com'
  }];
  return <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      {/* Animated background */}
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
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for inquiries, orders, or any information
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            {offices.map((office, index) => <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100} whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
                <h4 className="font-semibold text-lg text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">
                  {office.name}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <p className="text-gray-600">{office.location}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>
              </motion.div>)}
            <motion.div className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="300" whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
              <div className="flex items-start">
                <Clock className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-medium text-gray-800">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div initial={{
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
              <ContactForm />
            </motion.div>
            <motion.div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-200" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.02
          }}>
              {/* Map embed would go here - using a placeholder for now */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2000')] bg-cover bg-center flex items-center justify-center">
                <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
                  <p className="text-gray-800 font-medium">
                    Our Locations Across Nepal
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};