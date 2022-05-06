const maxDepth = function (s) {
  const arr = s.split('');
  let left = 0;
  let right = 0;
  let depth = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      left += 1;
    }
    if (arr[i] === ')') {
      right += 1;
    }
    if (typeof +arr[i] === 'number') {
      const currentDepth = left - right;
      if (currentDepth > depth) {
        depth = currentDepth;
      }
    }
  }
  return depth;
};

const s = '(1+(2*3)+((8)/4))+1';

console.log(maxDepth(s));
