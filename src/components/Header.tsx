import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div className="flex items-center" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <h1 className="text-xl font-bold text-blue-800">Gabion Wiretech</h1>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
            Pvt. Ltd.
          </span>
        </motion.div>
        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex space-x-8" initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          {['Home', 'About', 'Products', 'Specifications', 'Quality', 'Contact'].map((item, index) => <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors relative group" whileHover={{
          scale: 1.05
        }} transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10
        }}>
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </motion.a>)}
        </motion.nav>
        {/* Mobile Menu Button */}
        <motion.button className="md:hidden" onClick={toggleMenu} whileTap={{
        scale: 0.95
      }}>
          {isMenuOpen ? <XIcon size={24} className="text-blue-800" /> : <MenuIcon size={24} className="text-blue-800" />}
        </motion.button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <motion.nav className="md:hidden bg-white px-4 py-2 shadow-lg" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
          <div className="flex flex-col space-y-3 pb-3">
            {['Home', 'About', 'Products', 'Specifications', 'Quality', 'Contact'].map((item, index) => <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors py-2 border-b border-gray-100" onClick={toggleMenu} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.2,
          delay: index * 0.05
        }}>
                {item}
              </motion.a>)}
          </div>
        </motion.nav>}
    </header>;
};