import { countries } from './countries';
import Header from './Header';
import Main from './Main';
import Footer from '../../components/Footer';

const TravelAgency = () => {
  return (
    <>
      <Header />
      <Main
        adjective='beautiful'
        countries={countries}
        renderEmpty={<p>This list is empty</p>}
      />
      <Footer />
    </>
  );
};

export default TravelAgency;
