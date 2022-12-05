const sumOfUnique = (nums) => {
  const result = nums.reduce((sum, elem, indx, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (indx === i) continue;
      if (arr[i] === elem) {
        sum -= elem;
        break;
      }
    }
    return sum + elem;
  }, 0);
  return result;
};

const nums = [1, 2, 3, 4, 5];

console.log(sumOfUnique(nums));
