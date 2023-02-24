const answerQueries = (nums, queries) => {
  const answer = [];
  const numsSort = nums.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    let preventNum = 0;
    let sum = 0;
    for (const num of numsSort) {
      sum += num;
      if (sum <= queries[i]) {
        preventNum += 1;
      } else {
        sum = 0;
        break;
      }
    }
    answer.push(preventNum);
  }
  return answer;
};

const nums = [4, 5, 2, 1];
const queries = [3, 10, 21];

console.log(answerQueries(nums, queries));
