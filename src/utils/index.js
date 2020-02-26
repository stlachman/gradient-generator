const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};
export const generateRandom = () => {
  let number1 = Math.floor(getRandomIntInclusive(0, 255));
  let number2 = Math.floor(getRandomIntInclusive(0, 255));
  let number3 = Math.floor(getRandomIntInclusive(0, 255));
  return [number1, number2, number3];
};
