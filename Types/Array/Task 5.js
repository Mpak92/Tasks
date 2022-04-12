const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) continue;
    arr.splice(i, 1);
    i--;
  }
};

const arr = [5, 3, 8, 1, 4, 11, 14, 3, 4];

filterRangeInPlace(arr, 3, 8);

console.log(arr); // 5, 3, 8, 4, 3, 4
