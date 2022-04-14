const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

const aclean = (arr) => {
  const map = new Map();

  for (const key of arr) {
    const sorted = key.toLowerCase().split('').sort().join('');
    map.set(sorted, key);
  }

  return Array.from(map.values());
};

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
