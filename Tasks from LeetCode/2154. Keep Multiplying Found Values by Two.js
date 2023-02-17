const findFinalValue = (nums, original) => {
  let result = original;
  while (nums.includes(result)) {
    result *= 2;
  }
  return result;
};

const nums = [5, 3, 6, 1, 12];
const original = 3;

console.log(findFinalValue(nums, original));
