import { lazy, Suspense } from 'react';
import Loading from '../Loading';
const LiftsList = lazy(() => import('./LiftsList'));
import Footer from '../../components/Footer';

const Lifts = () => (
  <Suspense fallback={<Loading />}>
    <header>
      <h1 className='lifts-title text-gradient'>Snowtooth Ski Resort</h1>
      <h2 className='lifts-title'>Info about the lifts:</h2>
    </header>
    <LiftsList />
    <Footer color='var(--summer-yellow-clr)' />
  </Suspense>
);

export default Lifts;
