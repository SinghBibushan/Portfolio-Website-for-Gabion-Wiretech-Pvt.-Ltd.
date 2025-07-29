import React, { useState } from 'react';
import { motion } from 'framer-motion';
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      ...formStatus,
      submitting: true
    });
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({
        submitted: true,
        submitting: false,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Reset form status after showing success message
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          submitting: false,
          error: null
        });
      }, 3000);
    }, 1000);
  };
  return <div className="bg-white p-7 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-3">
        Send Us a Message
      </h3>
      {formStatus.submitted ? <motion.div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-md mb-6" initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.3
    }}>
          <p className="font-medium">Thank you for your message!</p>
          <p>We will get back to you soon.</p>
        </motion.div> : <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <motion.div whileHover={{
          y: -2
        }} whileTap={{
          y: 0
        }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" required />
            </motion.div>
            <motion.div whileHover={{
          y: -2
        }} whileTap={{
          y: 0
        }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" required />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <motion.div whileHover={{
          y: -2
        }} whileTap={{
          y: 0
        }}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
            </motion.div>
            <motion.div whileHover={{
          y: -2
        }} whileTap={{
          y: 0
        }}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" required>
                <option value="">Select a subject</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Price Quote">Price Quote</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
          </div>
          <motion.div className="mb-5" whileHover={{
        y: -2
      }} whileTap={{
        y: 0
      }}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" required></textarea>
          </motion.div>
          <motion.button type="submit" className={`w-full py-3 px-4 rounded-md font-medium text-white ${formStatus.submitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors shadow-md`} disabled={formStatus.submitting} whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }}>
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>}
    </div>;
};