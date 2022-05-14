const oddCells = function (m, n, indices) {
  let count = 0;
  const arr = [];
  for (let i = 0; i < m; i++) {
    const mas = [];
    for (let j = 0; j < n; j++) {
      mas.push(0);
    }
    arr.push(mas);
  }
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < n; j++) {
      arr[indices[i][0]][j] += 1;
    }
    for (let k = 0; k < m; k++) {
      arr[k][indices[i][1]] += 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2) {
        count += 1;
      }
    }
  }
  return count;
};

const m = 2;
const n = 3;
const indices = [[0, 1], [1, 1]];

console.log(oddCells(m, n, indices));
