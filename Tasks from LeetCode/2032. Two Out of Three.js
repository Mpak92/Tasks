const twoOutOfThree = (nums1, nums2, nums3) => {
  const resultArr = [];
  for (const num of nums1) {
    if ((nums2.includes(num) || nums3.includes(num)) && !resultArr.includes(num)) {
      resultArr.push(num);
    }
  }
  for (const num of nums2) {
    if (nums3.includes(num) && !resultArr.includes(num)) {
      resultArr.push(num);
    }
  }
  return resultArr;
};

const nums1 = [1, 1, 3, 2];
const nums2 = [2, 3];
const nums3 = [3];

console.log(twoOutOfThree(nums1, nums2, nums3));
