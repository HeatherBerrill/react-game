// import { fighters } from './fighters';

// export const randomFactor = () => {
//   const amount = Math.ceil(Math.random() * 10);
//   return amount;
// };
// export const fighterStats = (player) => {
//   let chosenFighter = {};
//   fighters.forEach((fighter) => {
//     if (fighter.name === player.fighter) {
//       chosenFighter = { ...fighter };
//     }
//   });
//   return chosenFighter;
// };

// const fight = () => {

// export const player1Attack = (player1, player2, player1Stats, player2Stats) => {
//   const attack1 = player1Stats.attackDamage * randomFactor();
//   player2Stats.health -= attack1;
//   if (player2Stats.health <= 0) {
//     clearInterval(attackLoop);
//     console.log(`${player2.fighter} is dead!! Player 1 has won.`);
//     console.log('Battle over, Player 1 has won!');
//     player1.points += 1;
//   } else {
//     console.log(`Player 2 health is now ${player2Stats.health}`);
//   }
// };

// export const player2Attack = (player1, player2, player1Stats, player2Stats) => {
//   const attack2 = player2Stats.attackDamage * randomFactor();
//   player1Stats.health -= attack2;
//   if (player1Stats.health <= 0) {
//     clearInterval(attackLoop);
//     console.log(`${player1.fighter} is dead!! Player 2 has won.`);
//     console.log('Battle over, Player 2 has won!');
//     player2.points += 1;
//   } else {
//     console.log(`Player 1 health is now ${player1Stats.health}`);
//   }
// };

// setTimeout(() => {
//   player1Attack();
// }, 1000).then((res) => {
//   setTimeout(() => {
//     player2Attack();
//   }, 1000);
// });

// if (player1Stats.health > 0 && player2Stats.health > 0) {
//   fight();
// }
// };

// fight();
// };
