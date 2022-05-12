const minTimeToVisitAllPoints = function (points) {
  let step = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const x = Math.abs(points[i][0] - points[i + 1][0]);
    const y = Math.abs(points[i][1] - points[i + 1][1]);
    if (x >= y) {
      step += x;
    } else {
      step += y;
    }
  }
  return step;
};

const points = [[1, 1], [3, 4], [-1, 0]];

console.log(minTimeToVisitAllPoints(points));
