import { ReactElement } from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const AccordionSection = styled.section`
  min-height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

const Heading = styled.h3`
  max-width: 42rem;
  font-size: calc(1rem + 2vmin);
`;

const Accordion = styled.div`
  margin: 2rem 0 3.5rem;
  width: clamp(25rem, 65vw, 580px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Country = Record<'name' | 'description', string>;

type MainProps = {
  adjective: string;
  countries: Country[];
  renderEmpty: ReactElement;
};

const Main = ({ adjective, countries, renderEmpty }: MainProps) => (
  <main>
    <AccordionSection>
      <Heading>
        We travel from the gorgeous <span>Ukraine</span> to the most {adjective}{' '}
        countries around...
      </Heading>
      {countries.length < 1 ? (
        renderEmpty
      ) : (
        <Accordion>
          {countries.map(({ name, description }) => (
            <AccordionItem key={name} name={name} description={description} />
          ))}
        </Accordion>
      )}
    </AccordionSection>
  </main>
);

export type { Country };
export default Main;
