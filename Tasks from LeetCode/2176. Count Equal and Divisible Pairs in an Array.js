const countPairs = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && !((i * j) % k)) {
        result += 1;
      }
    }
  }
  return result;
};

const nums = [3, 1, 2, 2, 2, 1, 3];
const k = 2;

console.log(countPairs(nums, k));
