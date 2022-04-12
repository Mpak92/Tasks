// const getAverageAge = (users) => {
//   let sumAge = 0;
//   for (i = 0; i < users.length; i++) {
//     sumAge += users[i].age;
//   }
//   return sumAge / users.length;
// };

const getAverageAge = (users) => {
  return users.reduce((sum, current) => sum += current.age, 0) / users.length;
};

const vasya = {
  name: 'Вася',
  age: 25,
};
const petya = {
  name: 'Петя',
  age: 30,
};
const masha = {
  name: 'Маша',
  age: 29,
};

const arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
