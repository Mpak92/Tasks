const squareIsWhite = function (coordinates) {
  const arr = coordinates.split('');
  const blackChar = 'bdfh';
  if (arr[1] % 2) {
    return blackChar.includes(arr[0]);
  }
  return !blackChar.includes(arr[0]);
};

const coordinates = 'a1';

console.log(squareIsWhite(coordinates));
