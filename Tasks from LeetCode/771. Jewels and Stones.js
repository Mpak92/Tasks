const numJewelsInStones = function (jewels, stones) {
  const weWant = jewels.split('');
  const weHave = stones.split('');
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) result += 1;
  }
  return result;
};

const jewels = 'aA';
const stones = 'aAAbbbb';

console.log(numJewelsInStones(jewels, stones));
