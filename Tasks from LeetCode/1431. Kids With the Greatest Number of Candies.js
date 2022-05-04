const kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  let maxCandies = 0;
  for (const elem of candies) {
    if (elem >= maxCandies) maxCandies = elem;
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else result.push(false);
  }
  return result;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
