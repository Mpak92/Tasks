const user = {
  name: 'John',
  age: 30,
};

const count = (obj) => {
  let count = 0;
  for (const key of Object.keys(obj)) {
    count += 1;
  }
  return count;
};

console.log(count(user)); // 2
