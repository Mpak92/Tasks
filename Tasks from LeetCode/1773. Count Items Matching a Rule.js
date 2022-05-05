const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let j = null;
  if (ruleKey === 'type') {
    j = 0;
  } else if (ruleKey === 'color') {
    j = 1;
  } else j = 2;
  for (let i = 0; i < items.length; i++) {
    if (items[i][j] === ruleValue) {
      count += 1;
    }
  }
  return count;
};

const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']];
const ruleKey = 'color';
const ruleValue = 'silver';

console.log(countMatches(items, ruleKey, ruleValue));
