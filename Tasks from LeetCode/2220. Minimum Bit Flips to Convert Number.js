const minBitFlips = function (start, goal) {
  let count = 0;
  let more = null;
  let less = null;
  if (start >= goal) {
    more = start.toString(2);
    less = goal.toString(2);
  } else {
    less = start.toString(2);
    more = goal.toString(2);
  }
  const k = more.length - less.length;
  for (let i = 0; i < k; i++) {
    less = `0${less}`;
  }
  const moreArr = more.split('');
  const lessArr = less.split('');
  for (let i = 0; i < more.length; i++) {
    if (moreArr[i] !== lessArr[i]) {
      count += 1;
    }
  }
  return count;
};

const start = 10;
const goal = 7;

console.log(minBitFlips(start, goal));
