import { useState, useEffect } from 'react';

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    const changeDimensions = () => {
      setScreenDimensions([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', changeDimensions);

    return () => window.removeEventListener('resize', changeDimensions);
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
