const replaceDigits = function (s) {
  const alf = 'abcdefghijklmnopqrstuvwxyz';
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      const k = alf.indexOf(arr[i - 1]);
      arr[i] = alf[k + +arr[i]];
    }
  }
  return arr.join('');
};

const s = 'a1c1e1';

console.log(replaceDigits(s));
