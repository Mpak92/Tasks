const filterRange = (arr, a, b) => {
  const newarr = arr.filter((item) => (a <= item && item <= b));
  return newarr;
};

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 2, 7);

console.log(filtered); // 5,3 (совпадающие значения)
console.log(arr); // 5,3,8,1 (без изменений)
