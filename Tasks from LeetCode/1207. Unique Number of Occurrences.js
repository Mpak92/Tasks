const uniqueOccurrences = (arr) => {
  const occurrencesArr = [];
  const arrSort = arr.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < arrSort.length; i++) {
    for (let n = i + 1; n <= arrSort.length; n++) {
      if (arrSort[i] === arrSort[n]) {
        count += 1;
      } else {
        occurrencesArr.push(count);
        count = 1;
        i = n - 1;
        break;
      }
    }
  }
  const occurrencesSet = new Set(occurrencesArr);
  return occurrencesArr.length === occurrencesSet.size;
};

const arr = [1, 2, 2, 1, 1, 3];

console.log(uniqueOccurrences(arr));
