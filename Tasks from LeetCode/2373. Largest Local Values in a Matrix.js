const largestLocal = (grid) => {
  const result = [];
  for (let i = 0; i < grid.length - 2; i++) {
    const arrFin = [];
    for (let j = 0; j < grid[i].length - 2; j++) {
      const arr = [];
      arr.push(grid[i][j]);
      arr.push(grid[i][j + 1]);
      arr.push(grid[i][j + 2]);
      arr.push(grid[i + 1][j]);
      arr.push(grid[i + 1][j + 1]);
      arr.push(grid[i + 1][j + 2]);
      arr.push(grid[i + 2][j]);
      arr.push(grid[i + 2][j + 1]);
      arr.push(grid[i + 2][j + 2]);
      arrFin.push(Math.max.apply(null, arr));
    }
    result.push(arrFin);
  }
  return result;
};

// const grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];
const grid = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

console.log(largestLocal(grid));
