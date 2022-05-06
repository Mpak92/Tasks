const countKDifference = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] - nums[j] === k || nums[j] - nums[i] === k) {
        result += 1;
      }
    }
  }
  return result;
};

const nums = [1, 2, 2, 1];
const k = 1;

console.log(countKDifference(nums, k));
