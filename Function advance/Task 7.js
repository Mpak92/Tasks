const users = [
  {
    name: 'John',
    age: 20,
    surname: 'Johnson',
  },
  {
    name: 'Pete',
    age: 18,
    surname: 'Peterson',
  },
  {
    name: 'Ann',
    age: 19,
    surname: 'Hathaway',
  },
];

const byField = (key) => {
  return (a, b) => (a[key] > b[key]
    ? 1
    : -1);
};

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);
