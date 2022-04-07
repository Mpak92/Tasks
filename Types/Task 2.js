const randomInteger = (min, max) => {
  const num = Math.random() * (max - min + 1) + min - 0.5;
  return Math.round(num);
};

console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
