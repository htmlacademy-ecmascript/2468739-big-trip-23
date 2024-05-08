import { DESTINATION_DESCRIPTIONS } from '../const.js';
import { getRandomSomeElements } from '../utils.js';

const getRandomDestinationDescriptions = () => getRandomSomeElements(
  DESTINATION_DESCRIPTIONS,
  Math.floor(Math.random() * DESTINATION_DESCRIPTIONS.length + 1)
);

export const DESTINATIONS = [
  {
    name:'lima',
    description: getRandomDestinationDescriptions(),
    photo: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
  {
    name: 'tokyo',
    description: getRandomDestinationDescriptions(),
    photo:`https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
  {
    name: 'milan',
    description: getRandomDestinationDescriptions(),
    photo:`https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
  {
    name: 'canberra',
    description: getRandomDestinationDescriptions(),
    photo:`https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
  {
    name: 'rome',
    description: getRandomDestinationDescriptions(),
    photo:`https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
  {
    name: 'moscow',
    description: getRandomDestinationDescriptions(),
    photo:`https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
  {
    name: 'paris',
    description: getRandomDestinationDescriptions(),
    photo:`https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
  },
];
