import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const Accordion = styled.ul`
  width: clamp(30rem, 80vw, 45rem);
  margin: 1.5rem auto;

  li {
    margin: 0;
    padding: 0;
  }
`;

type Country = Record<'countryName' | 'countryDescription', string>;

const CountriesAccordion = ({ destinations }: { destinations: Country[] }) => (
  <Accordion>
    {destinations.map(({ countryName, countryDescription }) => (
      <li key={countryName}>
        <AccordionItem
          countryName={countryName}
          countryDescription={countryDescription}
        />
      </li>
    ))}
  </Accordion>
);

export type { Country };
export default CountriesAccordion;
