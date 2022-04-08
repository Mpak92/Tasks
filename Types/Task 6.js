const extractCurrencyValue = (str) => {
  let number = '';
  for (const char of str) {
    if (!isNaN(char)) {
      number += char;
    }
  }
  return number;
};

console.log(extractCurrencyValue('$120')); // 120
