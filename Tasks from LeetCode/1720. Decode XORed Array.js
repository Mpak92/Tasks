const decode = function (encoded, first) {
  const arr = [];
  arr.push(first);
  for (let i = 0; i < encoded.length; i++) {
    const next = encoded[i] ^ arr[i];
    arr.push(next);
  }
  return arr;
};

const encoded = [1, 2, 3];
const first = 1;

console.log(decode(encoded, first));
