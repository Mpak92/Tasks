const minSubsequence = (nums) => {
  const result = [];
  const sumOfNums = nums.reduce((start, curr) => start + curr, 0);
  const numsSort = nums.sort((a, b) => b - a);
  for (const num of numsSort) {
    result.push(num);
    const sumOfResult = result.reduce((start, curr) => start + curr, 0);
    const sumOfNonIncluded = sumOfNums - sumOfResult;
    if (sumOfResult > sumOfNonIncluded) {
      break;
    }
  }
  return result;
};

const nums = [4, 3, 10, 9, 8];

console.log(minSubsequence(nums));
