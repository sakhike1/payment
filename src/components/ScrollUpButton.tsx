import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [isAtPeak, setIsAtPeak] = useState(false);

  const gradients = [
    'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-500 via-blue-400 to-teal-100',
    'bg-gradient-to-br from-violet-200 via-violet-900 to-yellow-50'
  ];

  const handleScroll = () => {
    const firstComponentHeight = document.getElementById('first-component')?.offsetHeight || 0;
    const secondComponentHeight = document.getElementById('second-component')?.offsetHeight || 0;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > firstComponentHeight + secondComponentHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setIsAtPeak(prev => !prev);
    }, 1000);

    return () => clearInterval(bounceInterval);
  }, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % gradients.length);
    }, 3000);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 mb-[100px] z-50">
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-10" />
      
      {/* Main button */}
      <button
        onClick={scrollToTop}
        className={`
          relative group
          w-16 h-16
          flex items-center justify-center
          rounded-full
          ${gradients[colorIndex]}
          text-white
          transition-all duration-300
          hover:scale-110
          active:scale-95
          animate-bounce-slow
          focus:outline-none
          focus:ring-0
        `}
        style={{
          animation: 'bounce 2s infinite',
          boxShadow: `0 ${isAtPeak ? '8px' : '16px'} 24px -6px rgba(0, 0, 0, 0.3),
                      0 ${isAtPeak ? '4px' : '8px'} 12px -2px ${gradients[colorIndex].split(' ')[1].replace('to-', 'rgba(').slice(0, -3) + ', 0.3)'}`,
          transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
          WebkitTapHighlightColor: 'transparent', // Remove tap highlight on mobile
        }}
      >
        {/* Icon */}
        <ChevronUp 
          className="w-10 h-10 transition-transform duration-300 group-hover:animate-bounce" 
          strokeWidth={2.5}
        />

        {/* Gradient overlay on hover */}
        <div className="
          absolute inset-0 
          rounded-full 
          bg-gradient-to-tr from-white/20 to-transparent 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300
          btn-no-border inset-y-0 focus:outline-none focus:ring-0
        " />
      </button>

      {/* Helper text */}
      <div className="
        absolute 
        bottom-full 
        left-1/2 
        -translate-x-1/2 
        mb-2 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        duration-300
        whitespace-nowrap
        text-white
        text-sm
        font-medium
        bg-gray-900
        px-3 
        py-1 
        rounded-full
        pointer-events-none
        btn-no-border inset-y-0 focus:outline-none focus:ring-0
      ">
        Back to top
      </div>
    </div>
  );
};

export default ScrollUpButton;