const firstPalindrome = function (words) {
  let first = '';
  for (const key of words) {
    if (key === key.split('').reverse().join('')) {
      first = key;
      break;
    }
  }
  return first;
};

const words = ['abc', 'car', 'ada', 'racecar', 'cool'];

console.log(firstPalindrome(words));
