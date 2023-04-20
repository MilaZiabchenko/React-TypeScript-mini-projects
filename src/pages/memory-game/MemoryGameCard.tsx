import type { Card } from './MemoryGame';
import house from './../../assets/house.png';

type MemoryGameCardProps = {
  card: Card;
  flipped: boolean;
  disabled: boolean;
  handleChoice: (card: Card) => void;
};

const MemoryGameCard = ({
  card,
  flipped,
  disabled,
  handleChoice
}: MemoryGameCardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <article className={flipped ? 'card flipped' : 'card'}>
      <img className='front' src={card.src} alt='card front' />
      <img className='back' src={house} alt='card back' onClick={handleClick} />
    </article>
  );
};

export default MemoryGameCard;
