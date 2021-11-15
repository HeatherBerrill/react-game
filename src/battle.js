import fighters from './fighters';

// random number generator to make each fight random and fair
const randomFactor = () => {
  return Math.floor(Math.random() * 10);
};

const fighterStats = (player) => {
  const filteredFighter = fighters.filter((fighter) => {
    return fighter.name === player.fighter;
  });
  return filteredFighter[0];
};

export const battle = (player1, player2) => {
  const player1Stats = fighterStats(player1);
  const player2Stats = fighterStats(player2);

  const fight = () => {
    player1Stats.health -= player2Stats.attackDamage * randomFactor;
    if (player1Stats.health <= 0) {
      console.log(`${player1.fighter} is dead!! Player 2 has won.`);
      console.log('Battle over, Player 2 has won!');
      player2.points += 1;
    } else {
      console.log(`Player 1 health is now ${player1Stats.health}`);
    }

    player2Stats.health -= player1Stats.attackDamage * randomFactor;
    if (player2Stats.health <= 0) {
      console.log(`${player2.fighter} is dead!! Player 1 has won.`);
      console.log('Battle over, Player 1 has won!');
      player1.points += 1;
    } else {
      console.log(`Player 2 health is now ${player1Stats.health}`);
    }

    if (player1Stats.health > 0 && player2Stats.health > 0) {
      fight();
    }
  };
};

// if the health of both is above 0 the fight method is called again

//
// }
