import worm from './images/worm_2.png';
import spider from './images/spider1.png';
import bee from './images/bee1.png';
import ladybird from './images/lady1.png';
import wasp from './images/wasp1.png';

export const fighters = [
  {
    name: 'Pete',
    health: 100,
    attackDamage: 2,
    warCry: 'war cry 1',
    move: 'constrict',
    type: 'normal',
    insect: 'worm',
    image: worm
  },
  {
    name: 'Hunter',
    health: 100,
    attackDamage: 5,
    warCry: 'war cry 2',
    move: 'web attack',
    type: 'normal',
    insect: 'spider',
    image: spider
  },
  {
    name: 'Bumbledoor',
    health: 100,
    attackDamage: 4,
    warCry: 'war cry 3',
    move: 'stinger',
    type: 'normal',
    insect: 'bee',
    image: bee
  },
  {
    name: 'Lady Loo',
    health: 100,
    attackDamage: 4,
    warCry: 'war cry 4',
    move: 'bite',
    type: 'normal',
    insect: 'ladybird',
    image: ladybird
  },
  {
    name: 'Stingy McSting',
    health: 100,
    attackDamage: 3,
    warCry: 'war cry 5',
    move: 'sting',
    type: 'normal',
    insect: 'wasp',
    image: wasp
  }
];

// export default fighters;
