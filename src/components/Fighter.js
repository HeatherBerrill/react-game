import { useState } from 'react';
import fighters from '../fighters';
import '../styles/Fighter.css';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
const Fighter = () => {
  const [image, setImage] = useState(0);
  const [chosenFighter, setChosenFighter] = useState(0);
  const [fighter, setFighter] = useState('');
  const length = fighters.length;

  const nextImage = () => {
    setImage(image === length - 1 ? 0 : image + 1);
    setChosenFighter(image);
    console.log(chosenFighter, 'chosenfighter');
  };

  const prevImage = () => {
    setImage(image === 0 ? length - 1 : image - 1);
    setChosenFighter(image);
    console.log(chosenFighter, 'chosenfighter');
  };
  const handlePickMe = () => {
    const name = fighters[chosenFighter].name;
    console.log(name);
    setFighter(name);
  };

  return (
    <section className='fighter-box'>
      <AiOutlineCaretLeft className='fighters__left-arrow' onClick={prevImage}>
        {' '}
      </AiOutlineCaretLeft>

      {fighters.map((singleFighter, index) => {
        return (
          <div
            className={index === image ? 'fighter active' : 'fighter'}
            key={index}
          >
            <h4 className='fighter-name'> {singleFighter.name} </h4>
            {index === image && (
              <img
                value={singleFighter.name}
                alt={singleFighter.name}
                className='fighter-image'
                src={singleFighter.image}
              ></img>
            )}
          </div>
        );
      })}
      <AiOutlineCaretRight
        className='fighters__right-arrow'
        onClick={nextImage}
      >
        {' '}
      </AiOutlineCaretRight>
      <button className='fighter-btn btn' onClick={handlePickMe}>
        {' '}
        Pick me!{' '}
      </button>
    </section>
  );
};

export default Fighter;
