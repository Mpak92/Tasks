const kthDistinct = (arr, k) => {
  const distinctArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      distinctArr.push(arr[i]);
    }
    count = 0;
  }
  if (k > distinctArr.length) {
    return '';
  }
  return distinctArr[k - 1];
};

const arr = ['d', 'b', 'c', 'b', 'c', 'a'];
const k = 2;

console.log(kthDistinct(arr, k));
