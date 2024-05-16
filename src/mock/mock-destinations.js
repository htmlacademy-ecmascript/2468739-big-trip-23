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
        description: 'Lima-1 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Lima-2 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Lima-3 parliament building',
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
        description: 'Tokyo-1 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Tokyo-2 parliament building',
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
        description: 'Canberra-1 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Canberra-4 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Canberra-2 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Canberra-3 parliament building',
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
        description: 'Paris-1 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Paris-2 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Paris-3 parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random() * 100 + 1}`,
        description: 'Paris-4 parliament building',
      },
    ],
  },
];

const loadDestinations = () => mockDestinations;

export {
  loadDestinations,
};
