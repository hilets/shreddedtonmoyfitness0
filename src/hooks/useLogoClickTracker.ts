
import { useState, useCallback } from 'react';

export const useLogoClickTracker = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoClick = useCallback(() => {
    setClickCount(prev => {
      const newCount = prev + 1;
      
      // Show popup on third click
      if (newCount === 3) {
        setShowPopup(true);
        return 0; // Reset count
      }
      
      return newCount;
    });
  }, []);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    setClickCount(0);
  }, []);

  return {
    showPopup,
    handleLogoClick,
    closePopup
  };
};
