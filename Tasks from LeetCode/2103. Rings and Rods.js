const countPoints = function (rings) {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    if (rings.includes(`R${i}`)
        && rings.includes(`G${i}`)
        && rings.includes(`B${i}`)) {
      count += 1;
    }
  }
  return count;
};

const rings = 'B0B6G0R6R0R6G9';

console.log(countPoints(rings));
