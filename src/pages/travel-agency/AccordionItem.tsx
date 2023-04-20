import { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Country } from './CountriesAccordion';

const AccordionItemWrapper = styled(animated.div)`
  border-bottom: 1px dotted hsla(190, 95%, 95%, 0.5);
  color: var(--light-blue-clr);
  overflow: hidden;
  cursor: pointer;
`;

const AccordionItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccordionItemHeaderTitle = styled.h4`
  padding: 0.75rem 0;
  font-size: calc(1rem + 0.5vmin);
  transition: 350ms ease-in-out;
`;

const AccordionItemHeaderIcon = styled(animated.i)`
  padding-top: 0.75rem;
  font-weight: 400;
  transition: 175ms ease-in-out;
`;

const AccordionItemContent = styled.p`
  padding: 0.75rem 1.5rem 1.5rem 0;
  color: var(--light-blue-text);
  font-size: calc(0.85rem + 0.5vmin);
  line-height: 1.625;
  text-align: left;
  transition: 500ms ease-in-out;
`;

const AccordionItem = ({ countryName, countryDescription }: Country) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandAnimationStyles = useSpring({
    from: { opacity: 0, maxHeight: '3.75rem' },
    to: { opacity: 1, maxHeight: isExpanded ? '25rem' : '3.75rem' },
    config: { duration: 300 }
  });

  const iconAnimationStyles = useSpring({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
    },
    config: { duration: 100 }
  });

  return (
    <AccordionItemWrapper
      style={expandAnimationStyles}
      className='accordion-item'
    >
      <AccordionItemHeader onClick={() => setIsExpanded(!isExpanded)}>
        <AccordionItemHeaderTitle>{countryName}</AccordionItemHeaderTitle>
        <AccordionItemHeaderIcon style={iconAnimationStyles}>
          <ExpandMoreIcon />
        </AccordionItemHeaderIcon>
      </AccordionItemHeader>
      <AccordionItemContent>{countryDescription}</AccordionItemContent>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
