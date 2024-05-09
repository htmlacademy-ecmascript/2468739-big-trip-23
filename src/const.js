const DESTINATION_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
];

const EVENTS_COUNT = 4;

const DateFormat = {
  DAY_MOUNTH_YEAR_HOURS_MINUTES: 'DD/MM/YYThh:mm',
  MINUTES: 'mm',
  HOURS_MINUTES: 'hh:mm',
  MOUNTH_DAY: 'MMM D',
  YEAR_MOUNTH_DAY: 'YYYY-MM-DD',
  YEAR_MOUNTH_DAY_HOURS_MINUTES: 'YYYY-MM-DDThh:mm',
};

const EventType = {
  TAXI: 'taxi',
  TRAIN: 'train',
  BUS: 'bus',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant',
};

export {
  DESTINATION_DESCRIPTIONS,
  EVENTS_COUNT,
  DateFormat,
  EventType,
};
