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

export {
  getRandomArrayElement,
  getRandomArraySomeElements,
};
