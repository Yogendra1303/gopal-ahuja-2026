'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#C8102E] rounded-full pointer-events-none z-[99999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Outer Ring / Hover State */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#C8102E] bg-[#C8102E]/10 rounded-full pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? [1.4, 1.6, 1.4] : 1,
          opacity: isHovering ? [0.6, 1, 0.6] : 0.5,
        }}
        transition={{
          x: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
          y: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
          scale: isHovering 
            ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            : { type: 'spring', stiffness: 300, damping: 20 },
          opacity: isHovering 
            ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            : { duration: 0.2 },
        }}
      />
    </>
  );
}
