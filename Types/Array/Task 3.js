const camelize = (str) => {
  str = str.split('-');
  for (let i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  str = str.join('');
  return str;
};

console.log(camelize('background-color')); //= = 'backgroundColor';
console.log(camelize('list-style-image')); //= = 'listStyleImage';
console.log(camelize('-webkit-transition')); //= = 'WebkitTransition';
