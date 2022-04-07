const random = (min, max) => {
  const num = Math.random() * (max - min) + min;
  return num;
};

console.log(random(3, 5));
console.log(random(3, 5));
console.log(random(3, 5));
