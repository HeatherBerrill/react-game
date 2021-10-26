import { useState } from 'react';
import fighters from '../fighters';
import '../styles/Fighter.css';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
const Fighter = () => {
  const [fighter, setFighter] = useState(0);
  const length = fighters.length;

  const nextFighter = () => {
    setFighter(fighter === length - 1 ? 0 : fighter + 1);
  };

  const prevFighter = () => {
    setFighter(fighter === 0 ? length - 1 : fighter - 1);
  };

  console.log(fighter);
  return (
    <section className='fighter-box'>
      <AiOutlineCaretLeft
        className='fighters__left-arrow'
        onClick={prevFighter}
      >
        {' '}
      </AiOutlineCaretLeft>
      <AiOutlineCaretRight
        className='fighters__right-arrow'
        onClick={nextFighter}
      >
        {' '}
      </AiOutlineCaretRight>

      {fighters.map((singleFighter, index) => {
        return (
          <div
            className={index === fighter ? 'fighter active' : 'fighter'}
            key={index}
          >
            {index === fighter && (
              <img
                alt={singleFighter.name}
                className='fighter-image'
                src={singleFighter.image}
              ></img>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Fighter;
