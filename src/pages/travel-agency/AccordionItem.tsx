import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Country } from './Main';

const AccordionContainer = styled(animated.div)`
  border-bottom: 1px dotted hsla(190, 95%, 95%, 0.5);
  color: var(--light-blue-clr);
  overflow: hidden;
  cursor: pointer;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const AccordionHeaderTitle = styled.h4`
  padding: 0.75rem;
  font-size: 1.3rem;
  transition: 350ms ease-in-out;
`;

const AccordionHeaderIcon = styled(animated.i)`
  padding: 0.75rem;
  font-weight: 400;
  transition: 175ms ease-in-out;
`;

const AccordionContent = styled.p`
  padding: 0.75rem 3rem 1.5rem 0.75rem;
  color: var(--light-blue-text);
  font-size: 1.075rem;
  line-height: 1.6;
  text-align: left;
  transition: 500ms ease-in-out;
`;

const AccordionItem = ({ name, description }: Country) => {
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
    <AccordionContainer style={expandAnimationStyles} className='accordion'>
      <AccordionHeader onClick={() => setIsExpanded(!isExpanded)}>
        <AccordionHeaderTitle>{name}</AccordionHeaderTitle>
        <AccordionHeaderIcon style={iconAnimationStyles}>
          <ExpandMoreIcon />
        </AccordionHeaderIcon>
      </AccordionHeader>
      <AccordionContent>{description}</AccordionContent>
    </AccordionContainer>
  );
};

export default AccordionItem;
