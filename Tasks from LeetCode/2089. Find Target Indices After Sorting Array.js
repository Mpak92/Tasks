const targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  return result;
};

const nums = [1, 2, 5, 2, 3];
const target = 2;

console.log(targetIndices(nums, target));
