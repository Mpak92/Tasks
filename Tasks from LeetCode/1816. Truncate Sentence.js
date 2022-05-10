const truncateSentence = function (s, k) {
  const arr = s.split(' ');
  const finalArr = [];
  for (let i = 0; i < k; i++) {
    finalArr.push(arr[i]);
  }
  const result = finalArr.join(' ');
  return result;
};

const s = 'Hello how are you Contestant';
const k = 4;

console.log(truncateSentence(s, k));
