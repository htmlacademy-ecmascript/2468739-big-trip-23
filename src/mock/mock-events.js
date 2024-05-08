import { getRandomArrayElement } from '../utils.js';

const mockEvents = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': 1100,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa30',
    ],
    'type': 'taxi'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2807c',
    'basePrice': 1000,
    'dateFrom': '2019-07-09T22:55:56.845Z',
    'dateTo': '2019-07-10T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa33',
      'b4c3e4e6-9053-42ce-b747-e281314baa34',
    ],
    'type': 'train'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2806c',
    'basePrice': 900,
    'dateFrom': '2019-07-08T22:55:56.845Z',
    'dateTo': '2019-07-09T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    'isFavorite': false,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2805c',
    'basePrice': 1200,
    'dateFrom': '2019-07-06T22:55:56.845Z',
    'dateTo': '2019-07-07T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa11',
      'b4c3e4e6-9053-42ce-b747-e281314baa12',
    ],
    'type': 'ship'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2804c',
    'basePrice': 1300,
    'dateFrom': '2019-07-04T22:55:56.845Z',
    'dateTo': '2019-07-05T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e00',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa13',
      'b4c3e4e6-9053-42ce-b747-e281314baa14',
      'b4c3e4e6-9053-42ce-b747-e281314baa15',
    ],
    'type': 'drive'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2803c',
    'basePrice': 1400,
    'dateFrom': '2019-07-02T22:55:56.845Z',
    'dateTo': '2019-07-03T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e07',
    'isFavorite': true,
    'offers': [],
    'type': 'flight'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2802c',
    'basePrice': 1500,
    'dateFrom': '2019-07-01T22:55:56.845Z',
    'dateTo': '2019-07-02T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa02'
    ],
    'type': 'check-in'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2801c',
    'basePrice': 1600,
    'dateFrom': '2019-07-14T22:55:56.845Z',
    'dateTo': '2019-07-15T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa03'
    ],
    'type': 'sightseeing'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2800c',
    'basePrice': 1700,
    'dateFrom': '2019-07-16T22:55:56.845Z',
    'dateTo': '2019-07-17T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa04'
    ],
    'type': 'restaurant'
  },
];

const getEvent = () => getRandomArrayElement(mockEvents);

export {
  getEvent,
};
