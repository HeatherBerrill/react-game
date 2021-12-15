import { useEffect, useState } from 'react';
import { fighters } from '../fighters';
import '../styles/Fighter.css';
import pikMeBtn from '../images/add-button.png';
import left from '../images/left_arrow.png';
import right from '../images/right_arrow.png';

const Fighter2 = ({ fighter2, setFighter2, setPlayer2, player2 }) => {
  const [image, setImage] = useState(0);
  const [chosenFighter, setChosenFighter] = useState(0);
  const [selected2, setSelected2] = useState(false);
  const length = fighters.length;

  useEffect(() => {
    setChosenFighter(image);
    setPlayer2({ ...player2, fighter: fighter2 });
  }, [image, fighter2]);

  const nextImage = () => {
    setImage(image === length - 1 ? 0 : image + 1);
  };

  const prevImage = () => {
    setImage(image === 0 ? length - 1 : image - 1);
  };

  const handlePickMe = () => {
    const name = fighters[chosenFighter].name;
    setFighter2(name);
    setSelected2(true);
  };
  if (selected2 === true) {
    return (
      <div className='ready-to-fight-container'>
        <h2 className='ready-to-fight'> {fighter2} is Ready to Fight! </h2>
      </div>
    );
  } else {
    return (
      <section className='fighter-box'>
        <div className='left-arrow-container'>
          <img
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
              {/* <h4 className='fighter-name'> {singleFighter.name} </h4> */}
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

export default Fighter2;
