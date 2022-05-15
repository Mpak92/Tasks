const findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 1;
  for (let i = 2; i <= nums[0]; i++) {
    if (!(nums[0] % i) && !(nums.at(-1) % i)) {
      max = i;
    }
  }
  return max;
};

const nums = [2, 5, 6, 9, 10];

console.log(findGCD(nums));
