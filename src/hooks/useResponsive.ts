import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener(`resize`, handleResize);

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  return windowSize;
};

export const useResponsive = (breakpoint: number) => {
  const { width } = useWindowSize();

  return width <= breakpoint;
};

export const useMediaQury = () => {
  const { width } = useWindowSize();

  const MOBILE_WIDTH = 460;
  const TABLET_WIDTH = 1024;

  const isMobile = width <= MOBILE_WIDTH ? true : false;
  const isTablet = width <= TABLET_WIDTH ? true : false;

  return { isMobile, isTablet };
};
