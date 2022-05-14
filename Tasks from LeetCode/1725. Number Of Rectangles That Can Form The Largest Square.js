const countGoodRectangles = function (rectangles) {
  let maxLength = 0;
  let count = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const arr = rectangles[i].sort((a, b) => a - b);
    if (arr[0] === maxLength) {
      count += 1;
    }
    if (arr[0] > maxLength) {
      maxLength = arr[0];
      count = 1;
    }
  }
  return count;
};

const rectangles = [[5, 8], [3, 9], [5, 12], [16, 5]];

console.log(countGoodRectangles(rectangles));
