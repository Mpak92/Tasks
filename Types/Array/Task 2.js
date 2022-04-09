const sumInput = () => {
  const mass = [];
  for (;;) {
    const numInput = prompt('Input number', '');
    if (isNaN(numInput)
    || numInput === ''
    || numInput === null
    ) break;
    mass.push(+numInput);
  }
  let sum = 0;
  for (const key of mass) {
    sum += key;
  }
  return sum;
};

console.log(sumInput());
