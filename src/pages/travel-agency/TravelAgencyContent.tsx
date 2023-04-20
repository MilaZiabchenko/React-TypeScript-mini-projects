import styled from 'styled-components';
import { countries_data } from './countries-data';
import CountriesAccordion from './CountriesAccordion';

const DestinationsInfo = styled.section`
  min-height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h3`
  max-width: 42rem;
  font-size: calc(1rem + 2.125vmin);
`;

const EmptyListMessage = styled.h4`
  font-size: calc(1rem + 1.5vmin);
`;

const countriesList = countries_data.map(({ name, description }) =>
  Object.freeze({
    countryName: name,
    countryDescription: description
  })
);

const TravelAgencyContent = () => (
  <DestinationsInfo>
    <Heading>
      We travel from the gorgeous <span>Ukraine</span> to the most beautiful
      countries around:
    </Heading>
    {countriesList.length > 0 ? (
      <CountriesAccordion destinations={countriesList} />
    ) : (
      <EmptyListMessage>
        <span>Destinations list is currently unavailable :(</span>
      </EmptyListMessage>
    )}
  </DestinationsInfo>
);

export default TravelAgencyContent;
