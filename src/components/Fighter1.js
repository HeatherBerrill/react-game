import { useEffect, useState } from 'react';
import { fighters } from '../fighters';
import '../styles/Fighter.css';
import pikMeBtn from '../images/btn_test1.png';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
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
    return <h2> Ready to Fight! </h2>;
  } else {
    return (
      <section className='fighter-box'>
        <AiOutlineCaretLeft
          className='fighters__left-arrow'
          onClick={prevImage}
        >
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
                  value={index}
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
        ></AiOutlineCaretRight>
        <img
          src={pikMeBtn}
          alt='select character button'
          onClick={handlePickMe}
          className='fighter-btn btn'
        ></img>
      </section>
    );
  }
};

export default Fighter1;
