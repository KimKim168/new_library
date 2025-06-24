import React, { useEffect, useState } from 'react';
import { ArrowBigUpDash, ChevronUp } from 'lucide-react'; // You can use any icon or text

const MyScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-primary/30 backdrop-blur-md text-white p-3 shadow-lg transition "
          aria-label="Scroll to top"
        >
          <ArrowBigUpDash className="h-7 w-7" />
          
        </button>
      )}
    </>
  );
};

export default MyScrollTop;
