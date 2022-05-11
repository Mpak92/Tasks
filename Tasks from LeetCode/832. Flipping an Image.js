const flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i] = image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }
  }
  return image;
};

const image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];

console.log(flipAndInvertImage(image));
