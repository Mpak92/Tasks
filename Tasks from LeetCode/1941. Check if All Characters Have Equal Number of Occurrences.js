const areOccurrencesEqual = function (s) {
  const mapCount = new Map();
  for (const char of s) {
    if (mapCount.has(char)) {
      mapCount.set(char, mapCount.get(char) + 1);
    } else {
      mapCount.set(char, 1);
    }
  }
  if (s.length % mapCount.size) {
    return false;
  }
  const multiple = s.length / mapCount.size;
  for (const val of mapCount.values()) {
    if (val !== multiple) {
      return false;
    }
  }
  return true;
};

const s = 'abacbc';

console.log(areOccurrencesEqual(s));
