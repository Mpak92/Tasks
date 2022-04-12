const sortByAge = (users) => {
  users.sort((a, b) => a.age - b.age);
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
  age: 28,
};

const arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
