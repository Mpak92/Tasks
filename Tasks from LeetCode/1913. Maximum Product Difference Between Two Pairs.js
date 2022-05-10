const maxProductDifference = function (nums) {
  const sortArr = nums.sort((a, b) => a - b);
  const result = (sortArr.at(-1) * sortArr.at(-2)) - (sortArr[0] * sortArr[1]);
  return result;
};

const nums = [5, 6, 2, 7, 4];

console.log(maxProductDifference(nums));
