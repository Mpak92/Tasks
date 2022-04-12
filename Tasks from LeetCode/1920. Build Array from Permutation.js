/* Given a zero-based permutation nums (0-indexed),
build an array ans of the same length where
ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
A zero-based permutation nums is an array of distinct integers
from 0 to nums.length - 1 (inclusive). */
const buildArray = (nums) => {
  const ans = [];
  for (let i = 0; i >= 0 && i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

const nums = [0, 2, 1, 3, 5, 4];
console.log(buildArray(nums)); // 0, 1, 2, 3, 4, 5
// ans[i] = nums[nums[i]];
// i >= 0 && i < nums.length;
// nums[i] >= 0 && nums[i] < nums.length;
