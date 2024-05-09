import dayjs from 'dayjs';

const getRandomArrayElement = (elements) => elements.toSorted(() => 0.5 - Math.random())[0];

const getRandomArraySomeElements = (elements, count) => {
  const newElements = [];
  while (newElements.length < count) {
    const randomElement = getRandomArrayElement(elements);
    if (!newElements.includes(randomElement)) {
      newElements.push(randomElement);
    }
  }

  return newElements;
};

const humanizeDateFormat = (date, format) => dayjs(date).format(format);
const getEventDuration = (dateFrom, dateTo) => dayjs(dateTo).diff(dayjs(dateFrom), 'minute');

export {
  getRandomArrayElement,
  getRandomArraySomeElements,
  humanizeDateFormat,
  getEventDuration,
};
