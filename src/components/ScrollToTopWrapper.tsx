import { type ReactNode, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopWrapper = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return children;
};

export default ScrollToTopWrapper;
