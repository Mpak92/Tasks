const largestAltitude = function (gain) {
  let maxHight = 0;
  let hight = 0;
  for (const key of gain) {
    hight += key;
    if (hight > maxHight) {
      maxHight = hight;
    }
  }
  return maxHight;
};

const gain = [-5, 1, 5, 0, -7];

console.log(largestAltitude(gain));
