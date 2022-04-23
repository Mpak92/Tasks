const finalValueAfterOperations = function (operations) {
  let x = 0;
  for (const key of operations) {
    if (key === '--X' || key === 'X--') x -= 1;
    if (key === '++X' || key === 'X++') x += 1;
  }
  return x;
};

const operations = ['--X', 'X++', 'X++'];
console.log(finalValueAfterOperations(operations));
