import { DESTINATION_DESCRIPTIONS } from '../const.js';
import { getRandomArraySomeElements } from '../utils.js';

const getRandomDestinationDescriptions = () => getRandomArraySomeElements(
  DESTINATION_DESCRIPTIONS,
  Math.floor(Math.random() * DESTINATION_DESCRIPTIONS.length + 1)
);


const mockDestinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    name:'Lima',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Lima parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    name: 'Tokyo',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Tokyo parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    name: 'Milan',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Milan parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    name: 'Canberra',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Canberra parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e00',
    name: 'Rome',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Rome parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e07',
    name: 'Moscow',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Moscow parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    name: 'Paris',
    description: getRandomDestinationDescriptions(),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Paris parliament building',
      },
    ],
  },
];

const getDestination = (destinationId) =>
  mockDestinations.find((destination) => destinationId === destination.id);

export {
  getDestination,
};
