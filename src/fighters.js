import worm from './images/worm.jpg';
import spider from './images/spider.jpg';
import bee from './images/bee.jpg';
import ladybird from './images/ladybird.jpg';
import wasp from './images/wasp.jpg';

const fighters = [
  {
    name: 'Pete',
    health: 100,
    attackDamage: 5,
    warCry: 'war cry 1',
    move: 'constrict',
    type: 'normal',
    image: worm
  },
  {
    name: 'Hunter',
    health: 100,
    attackDamage: 4,
    warCry: 'war cry 2',
    move: 'web attack',
    type: 'normal',
    image: spider
  },
  {
    name: 'Bumbledoor',
    health: 100,
    attackDamage: 6,
    warCry: 'war cry 3',
    move: 'stinger',
    type: 'normal',
    image: bee
  },
  {
    name: 'Lady Loo',
    health: 100,
    attackDamage: 5,
    warCry: 'war cry 4',
    move: 'bite',
    type: 'normal',
    image: ladybird
  },
  {
    name: 'Stingy McSting',
    health: 100,
    attackDamage: 6,
    warCry: 'war cry 5',
    move: 'sting',
    type: 'normal',
    image: wasp
  }
];

export default fighters;
