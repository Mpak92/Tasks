const findCenter = function (edges) {
  if (edges[1].includes(edges[0][0])) {
    return edges[0][0];
  } return edges[0][1];
};

const edges = [[1, 2], [2, 3], [4, 2]];

console.log(findCenter(edges));
