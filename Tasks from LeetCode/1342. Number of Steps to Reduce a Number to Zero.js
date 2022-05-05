const numberOfSteps = function (num) {
  let countSteps = 0;
  for (let i = 1; num > 0; i++) {
    if (num % 2) {
      num -= 1;
    } else {
      num /= 2;
    }
    countSteps = i;
  }
  return countSteps;
};

const num = 0;

console.log(numberOfSteps(num));
