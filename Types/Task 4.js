const checkSpam = (str) => {
  str = str.toLowerCase();
  return str.includes('viagra'.toLowerCase()) || str.includes('XXX'.toLowerCase());
};

console.log(checkSpam('buy ViAgRA now')); //= = true;
console.log(checkSpam('free xxxx')); //= = true;
console.log(checkSpam('innocent rabbit')); //= = false;
