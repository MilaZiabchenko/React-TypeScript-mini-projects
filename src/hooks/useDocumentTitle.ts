import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Route = Record<'path' | 'title', string>;

const useDocumentTitle = (routes: Route[], originalTitle: Route['title']) => {
  const { pathname } = useLocation();

  const currentRoute = routes.find(route => `/${route.path}` === pathname);

  useEffect(() => {
    document.title = currentRoute?.title ?? originalTitle;

    return () => {
      document.title = originalTitle;
    };
  }, [pathname]);
};

export default useDocumentTitle;
