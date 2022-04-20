const inBetween = (a, b) => {
  return (item) => {
    if (item >= a && item <= b) return true;
    return false;
  };
};

const inArray = (arr) => {
  return (item) => {
    for (const arg of arr) {
      if (arg === item) return true;
    }
    return false;
  };
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
