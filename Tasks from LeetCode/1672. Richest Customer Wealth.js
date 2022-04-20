// You are given an m x n integer grid accounts where accounts[i][j]
// is the amount of money the i​​​​​​​​​​​-th​​​​ customer has in the j​​​​​​​​​​​-th​​​​ bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.
const maximumWealth = (accounts) => {
  let maxSum = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
//   let maxWealth = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     const wealth = accounts[i].reduce((sum, current) => sum + current, 0);
//     if (wealth > maxWealth) {
//       maxWealth = wealth;
//     }
//   }
//   return maxWealth;
};

const accounts = [[1, 5], [7, 3], [3, 5]];
console.log(maximumWealth(accounts));
