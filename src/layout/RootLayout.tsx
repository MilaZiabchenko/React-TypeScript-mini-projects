import { Outlet } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { routes_data } from '../data/routes-data';
import ThemeWrapper from '../components/ThemeWrapper';
import ScrollToTopWrapper from './../components/ScrollToTopWrapper';

const RootLayout = () => {
  useDocumentTitle(routes_data, 'React & Typescript Apps');

  return (
    <ThemeWrapper>
      <ScrollToTopWrapper>
        <Outlet />
      </ScrollToTopWrapper>
    </ThemeWrapper>
  );
};

export default RootLayout;
