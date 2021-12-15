import '../styles/Arena.css';
import { fighters } from '../fighters';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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

  const firstRender = useRef(true);
  // BATTLE LOGIC

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
    const amount = Math.ceil(Math.random() * 5);
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
        player1.points += 1;
        return 0;
      } else {
        return currBar2 - attack1;
      }
    });
  };

  //player2 attack logic
  console.log(healthBar1, healthBar2);

  const player2Attack = () => {
    const attack2 = player2Stats.attackDamage * randomFactor();

    console.log(attack2, 'attack');

    setHealthBar1((currBar1) => {
      if (currBar1 <= attack2) {
        console.log(`${player1.fighter} is dead!! Player 2 has won.`);
        console.log('Battle over, Player 2 has won!');
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
  };

  //PAGE CONTENT
  return (
    <section data-testid='background' className={`${arena} arena-page`}>
      <button
        disabled={healthBar1 === 0 || healthBar2 === 0}
        onClick={() => {
          player2Attack();
        }}
        // className='arena-page__title'
      >
        {' '}
        FIGHT!
      </button>
      <div>
        {' '}
        <p> Health = {healthBar1} </p>{' '}
      </div>
      {fighters.map((singleFighter) => {
        return (
          <div key={singleFighter.name} className='fighter1-imagebox__arena'>
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
      <button
        disabled={healthBar1 === 0 || healthBar2 === 0}
        onClick={() => {
          player1Attack();
        }}
      >
        {' '}
        Attack{' '}
      </button>
      <div>
        {' '}
        <p> Health = {healthBar2} </p>
      </div>

      {fighters.map((singleFighter) => {
        return (
          <div key={singleFighter.name} className='fighter2-imagebox__arena'>
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
      <Link to='/home'>
        <button className='arena-page__btn' onClick={resetFighters}>
          {' '}
          End Fight{' '}
        </button>
      </Link>
    </section>
  );
};

export default Arena;
