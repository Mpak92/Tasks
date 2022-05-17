const findNumbers = function (nums) {
  let count = 0;
  for (const val of nums) {
    if (!(val.toString().length % 2)) {
      count += 1;
    }
  }
  return count;
};

const nums = [12, 345, 2, 6, 7896];

console.log(findNumbers(nums));
