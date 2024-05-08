const getRandomElement = (elements) => elements.toSorted(() => 0.5 - Math.random())[0];

const getRandomSomeElements = (elements, count) => {
  const newElements = [];
  while (newElements.length < count) {
    const randomElement = getRandomElement(elements);
    if (!newElements.includes(randomElement)) {
      newElements.push(randomElement);
    }
  }

  return newElements;
};

export {
  getRandomElement,
  getRandomSomeElements,
};
