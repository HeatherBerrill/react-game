import '../styles/Landing.css';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import playBtn from '../images/play_button.png';
import title from '../images/title.png';
const Landing = () => {
  return (
    <div className='background_landing'>
      <div className='landing-page'>
        <img className='game-title' alt='title creepy brawly' src={title}></img>
        <Link to='/home'>
          <div className='play-button-container'>
            <img
              className='landing-page__btn'
              alt='stat button'
              src={playBtn}
            ></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
