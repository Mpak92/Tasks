// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
const runningSum = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[i] = 0;
    for (let j = 0; j < arr.length; j++) {
      arr[i] += nums[j];
    }
  }
  return arr;
};

const nums = [3, 1, 2, 10, 1];

console.log(runningSum(nums)); // [3,4,6,16,17]
