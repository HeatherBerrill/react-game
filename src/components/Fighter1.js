import { useEffect, useState } from 'react';
import { fighters } from '../fighters';
import '../styles/Fighter.css';
import pikMeBtn from '../images/add-button.png';

import left from '../images/left_arrow.png';
import right from '../images/right_arrow.png';

const Fighter1 = ({ fighter1, setFighter1 }) => {
  const [image, setImage] = useState(0);
  const [chosenFighter, setChosenFighter] = useState(0);
  const [selected1, setSelected1] = useState(false);
  const length = fighters.length;

  useEffect(() => {
    setChosenFighter(image);
  }, [image]);

  const nextImage = () => {
    setImage(image === length - 1 ? 0 : image + 1);
  };

  const prevImage = () => {
    setImage(image === 0 ? length - 1 : image - 1);
  };

  const handlePickMe = () => {
    const name = fighters[chosenFighter].name;
    setFighter1(name);
    setSelected1(true);
  };

  if (selected1 === true) {
    return <h2 className='ready-to-fight'> Ready to Fight! </h2>;
  } else {
    return (
      <section className='fighter-box'>
        <div className='left-arrow-container'>
          <img
            alt='left-arrow'
            src={left}
            className='fighters__left-arrow'
            onClick={prevImage}
          ></img>
        </div>

        {fighters.map((singleFighter, index) => {
          return (
            <div
              className={index === image ? 'fighter active' : 'fighter'}
              key={index}
            >
              <h4 className='fighter-name'> {singleFighter.name} </h4>
              {index === image && (
                <img
                  value={index}
                  alt={singleFighter.name}
                  className='fighter-image'
                  src={singleFighter.image}
                ></img>
              )}
            </div>
          );
        })}
        <div className='right-arrow-container'>
          <img
            alt='right-arrow'
            src={right}
            className='fighters__right-arrow'
            onClick={nextImage}
          ></img>
        </div>
        <div className='pik-me-container'>
          <img
            src={pikMeBtn}
            alt='select character button'
            onClick={handlePickMe}
            className='fighter-btn'
          ></img>
        </div>
      </section>
    );
  }
};

export default Fighter1;
