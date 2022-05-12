const diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    sum += mat.reverse()[i][i];
    if (!(mat.length % 2)) {
      continue;
    }
    if (i === Math.trunc(mat.length / 2)) {
      sum -= mat[i][i];
    }
  }
  return sum;
};

const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(diagonalSum(mat));
