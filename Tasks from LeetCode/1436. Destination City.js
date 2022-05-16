const destCity = function (paths) {
  let result = '';
  label: for (let i = 0; i < paths.length; i++) {
    for (let j = 0; j < paths.length; j++) {
      if (paths[i][1] === paths[j][0]) {
        continue label;
      }
    }
    result += paths[i][1];
  }
  return result;
};

const paths = [['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']];

console.log(destCity(paths));
