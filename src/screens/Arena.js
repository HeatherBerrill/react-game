import '../styles/Arena.css';
import { fighters } from '../fighters';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import heart from '../images/heart.png';
import healthBar from '../images/health_bar.png';
import attack from '../images/attack_button.png';
import go from '../images/go_btn.png';
import home from '../images/home_btn.png';

const Arena = ({
  arena,
  player2,
  player1,
  setFighter1,
  setFighter2,
  fighter1,
  fighter2
}) => {
  const [healthBar1, setHealthBar1] = useState(100);
  const [healthBar2, setHealthBar2] = useState(100);
  const [seeStart, setSeeStart] = useState(true);
  const [winner, setWinner] = useState('');
  const firstRender = useRef(true);
  // BATTLE LOGIC

  console.log(arena, 'arena');
  // replays the attack on player 1 every time health bar amount changes
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (healthBar1 > 0 && healthBar2 > 0) {
        setTimeout(() => {
          player2Attack();
        }, 2000);
      } else {
        console.log('GAME OVER!');
      }
    }
  }, [healthBar1]);

  // random factor for attacks
  const randomFactor = () => {
    const amount = Math.ceil(Math.random() * 3);
    return amount;
  };

  //get stats from fighters array
  const fighterStats = (player) => {
    let chosenFighter = {};
    fighters.forEach((fighter) => {
      if (fighter.name === player.fighter) {
        chosenFighter = { ...fighter };
      }
    });
    return chosenFighter;
  };

  //player stats
  const player1Stats = fighterStats(player1);
  const player2Stats = fighterStats(player2);

  //player1 attack logic
  const player1Attack = () => {
    const attack1 = player1Stats.attackDamage * randomFactor();

    setHealthBar2((currBar2) => {
      if (currBar2 <= attack1) {
        console.log(`${player2.fighter} is dead!! Player 1 has won.`);
        console.log('Battle over, Player 1 has won!');
        setWinner('player1');
        player1.points += 1;
        return 0;
      } else {
        return currBar2 - attack1;
      }
    });
  };

  //player2 attack logic
  console.log(healthBar1, healthBar2);
  console.log(winner, 'winner');

  const player2Attack = () => {
    if (healthBar1 === 100 && healthBar2 === 100) setSeeStart(false);

    const attack2 = player2Stats.attackDamage * randomFactor();

    console.log(attack2, 'attack');

    setHealthBar1((currBar1) => {
      if (currBar1 <= attack2) {
        console.log(`${player1.fighter} is dead!! Player 2 has won.`);
        console.log('Battle over, Player 2 has won!');
        setWinner('player2');
        player2.points += 1;
        return 0;
      } else {
        return currBar1 - attack2;
      }
    });
  };

  //end fight to go back to home
  const resetFighters = () => {
    setFighter1('');
    setFighter2('');
    setWinner('');
  };

  // const visible = {
  //   opacity: 1, z-index: 40
  // }

  //PAGE CONTENT
  return (
    <div className='background-arena'>
      <section data-testid='background' className={`${arena} arena-page`}>
        <div className='player-1__container'>
          <div>
            {' '}
            <p className='fighter_name'>{fighter1}</p>
          </div>
          {fighters.map((singleFighter) => {
            return (
              <div
                key={singleFighter.name}
                className='fighter1-imagebox__arena'
              >
                {singleFighter.name === fighter1 && (
                  <img
                    className={'player-image'}
                    value={singleFighter.name}
                    alt={singleFighter.name}
                    src={singleFighter.image}
                  ></img>
                )}
              </div>
            );
          })}

          <div className='healthBar-container'>
            <img src={heart} alt='heart__1' className='heart'></img>
            <img
              src={healthBar}
              alt='health-bar__1'
              className='health-bar'
            ></img>
            <div
              className='progress-bar'
              style={{ height: `${healthBar1}%` }}
            ></div>
          </div>
        </div>
        <div className='player-2__container'>
          <div>
            {' '}
            <p className='opponent_name'> {fighter2}</p>
          </div>

          {fighters.map((singleFighter) => {
            return (
              <div
                key={singleFighter.name}
                className='fighter2-imagebox__arena'
              >
                {singleFighter.name === fighter2 && (
                  <img
                    className={'player-image'}
                    value={singleFighter.name}
                    alt={singleFighter.name}
                    src={singleFighter.image}
                  ></img>
                )}
              </div>
            );
          })}
          <div className='healthBar-container'>
            <img src={heart} alt='heart__2' className='heart'></img>
            <img
              src={healthBar}
              alt='health-bar__2'
              className='health-bar'
            ></img>
            <div
              className='progress-bar'
              style={{ height: `${healthBar2}%` }}
            ></div>
          </div>
        </div>
        <div
          className='dark'
          style={
            seeStart === true
              ? { opacity: 1, zIndex: 40 }
              : { opacity: 0, zIndex: 0 }
          }
        >
          <div
            style={
              seeStart === true
                ? { opacity: 1, zIndex: 40 }
                : { opacity: 0, zIndex: 0 }
            }
            // disabled={healthBar1 === 0 || healthBar2 === 0}
            onClick={() => {
              player2Attack();
            }}
            className='fight__button'
          >
            {' '}
            {fighter2} will attack you. Press{' '}
            <img className='attack_thumbnail' src={attack}></img> to fight back!
            <img className='go_btn' src={go}></img>
          </div>
        </div>
        <img
          src={attack}
          alt='attack button'
          className='attack_button'
          disabled={healthBar1 === 0 || healthBar2 === 0}
          onClick={() => {
            player1Attack();
          }}
        ></img>

        <div
          className='dark-2'
          style={
            winner ? { opacity: 1, zIndex: 40 } : { opacity: 0, zIndex: 0 }
          }
        >
          <div
            disabled={!winner}
            className='end-fight__screen'
            onClick={resetFighters}
            style={
              winner ? { opacity: 1, zIndex: 40 } : { opacity: 0, zIndex: 0 }
            }
          >
            <p>
              {' '}
              {winner === 'player1'
                ? 'Congratulations you won!'
                : 'Sorry you lost. Try again'}{' '}
            </p>
            <Link to='/home' disabled={!winner}>
              <img className='home_btn' src={home}></img>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arena;
