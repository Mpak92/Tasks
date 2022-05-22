const divideArray = function (nums) {
  const storage = new Map();
  for (const val of nums) {
    if (storage.has(val)) {
      storage.set(val, storage.get(val) + 1);
    } else {
      storage.set(val, 1);
    }
  }
  for (const val of storage.values()) {
    if (val % 2) {
      return false;
    }
  }
  return true;
};

const nums = [3, 2, 3, 2, 2, 2];

console.log(divideArray(nums));
