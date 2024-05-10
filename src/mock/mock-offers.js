const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Choose the radio station-1',
        price: 60,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa30',
        title: 'Choose the radio station-2',
        price: 80,
      },
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Upgrade express',
        price: 33,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
        title: 'Upgrade super express',
        price: 43,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa34',
        title: 'Upgrade',
        price: 23,
      },
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281114baa90',
        title: 'Upgrade bus-1',
        price: 11,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281214baa91',
        title: 'Upgrade bus-2',
        price: 21,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e2811414baa92',
        title: 'Upgrade bus-3',
        price: 31,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281514baa93',
        title: 'Upgrade bus-4',
        price: 41,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281614baa94',
        title: 'Upgrade bus-5',
        price: 51,
      },
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa11',
        title: 'Upgrade ship-1',
        price: 77,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa12',
        title: 'Upgrade ship-2',
        price: 87,
      },
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa13',
        title: 'Upgrade drive-1',
        price: 17,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa14',
        title: 'Upgrade drive-2',
        price: 18,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa15',
        title: 'Upgrade drive-3',
        price: 19,
      },
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa71',
        title: 'Upgrade to a business class',
        price: 120,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa72',
        title: 'Upgrade to First class',
        price: 150,
      },
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa02',
        title: 'Upgrade-1',
        price: 10,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa48',
        title: 'Upgrade-2',
        price: 20,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa49',
        title: 'Upgrade-2',
        price: 30,
      },
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa03',
        title: 'Upgrade',
        price: 40,
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa04',
        title: 'Upgrade',
        price: 50,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa61',
        title: 'Upgrade',
        price: 60,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa62',
        title: 'Upgrade',
        price: 70,
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa63',
        title: 'Upgrade',
        price: 80,
      },
    ]
  },
];

const loadOffers = () => mockOffers;

export {
  loadOffers,
};
