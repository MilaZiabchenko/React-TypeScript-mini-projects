import { useEffect, useState } from 'react';
import { cards_data } from './cards-data';
import MemoryGameCard from './MemoryGameCard';
import Footer from '../../components/Footer';
import { useTrail, animated } from '@react-spring/web';
import './memory-game.css';

type Card = {
  src: string;
  matched: boolean;
  id: `${string}-${string}-${string}-${string}-${string}`;
};

type MemoryGameState = {
  cards: Card[];
  choice_1: Card | null;
  choice_2: Card | null;
};

const MemoryGame = () => {
  const shuffledCards: Card[] = [...cards_data, ...cards_data]
    .sort(() => Math.random() - 0.5)
    .map(card => ({ ...card, id: crypto.randomUUID() }));

  const [cards, setCards] = useState<MemoryGameState['cards']>(shuffledCards);
  const [choice_1, setChoice_1] = useState<MemoryGameState['choice_1']>(null);
  const [choice_2, setChoice_2] = useState<MemoryGameState['choice_2']>(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let active = true;

    const updateGameData = () => {
      setChoice_1(null);
      setChoice_2(null);
      setTurns(prevTurns => prevTurns + 1);
      setDisabled(false);
    };

    if (active && choice_1 && choice_2) {
      setDisabled(true);

      if (choice_1.src === choice_2.src) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.src === choice_1.src ? { ...card, matched: true } : card
          )
        );

        updateGameData();

        return () => {
          active = false;
        };
      } else {
        const timer = setTimeout(() => updateGameData(), 1000);

        return () => {
          active = false;
          clearTimeout(timer);
        };
      }
    }
  }, [choice_1, choice_2]);

  const resetGame = () => {
    setCards(shuffledCards);
    setChoice_1(null);
    setChoice_2(null);
    setTurns(0);
  };

  const handleChoice = (card: Card) => {
    choice_1 ? setChoice_2(card) : setChoice_1(card);
  };

  const trails = useTrail(cards.length, {
    from: { transform: 'translateY(120px)' },
    to: { transform: 'translateY(20px)' }
  });

  return (
    <>
      <div className='game'>
        <header>
          <h1>Magic Match</h1>
          <button onClick={resetGame}>New Game</button>
        </header>
        <main>
          <section>
            <h3>
              {turns} {turns === 1 ? 'turn' : 'turns'}
            </h3>
            <div className='cards-grid'>
              {trails.map((styles, i) => (
                <animated.div key={i} style={styles}>
                  <MemoryGameCard
                    card={cards[i]}
                    handleChoice={handleChoice}
                    flipped={
                      cards[i] === choice_1 ||
                      cards[i] === choice_2 ||
                      cards[i].matched
                    }
                    disabled={disabled}
                  />
                </animated.div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export type { Card };
export default MemoryGame;
