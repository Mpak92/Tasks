const shuffle = function (nums, n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
    arr.push(nums[i + n]);
  }
  return arr;
};

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(shuffle(nums, n));
