const replaceElements = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === (arr.length - 1)) {
      result.push(-1);
    } else {
      const sliced = arr.slice(i + 1, arr.length);
      result.push(Math.max(...sliced));
    }
  }
  return result;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));
