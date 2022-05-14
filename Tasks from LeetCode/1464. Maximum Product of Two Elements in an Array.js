const maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const max = (nums.at(-1) - 1) * (nums.at(-2) - 1);
  return max;
};

const nums = [3, 4, 5, 2];

console.log(maxProduct(nums));
