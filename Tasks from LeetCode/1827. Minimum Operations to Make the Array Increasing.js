const minOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i + 1] - nums[i]) <= 0) {
      count += (nums[i] - nums[i + 1] + 1);
      nums[i + 1] += (nums[i] - nums[i + 1] + 1);
    }
  }
  return count;
};

const nums = [1, 1, 1];

console.log(minOperations(nums));
