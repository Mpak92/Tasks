const kWeakestRows = (mat, k) => {
  const matSoldNumb = mat.map((row, index) => {
    const soldNumb = row.reduce((a, b) => a + b, 0);
    return [soldNumb, index];
  });
  const sortedMatSoldNumb = matSoldNumb.sort((a, b) => a[0] - b[0]);
  const matIndex = sortedMatSoldNumb.map((a) => a[1]);
  return matIndex.slice(0, k);
};

const mat = [[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]];
const k = 3;

console.log(kWeakestRows(mat, k));
