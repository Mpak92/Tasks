let user = {
  name: 'Василий Иванович',
  age: 35,
};

console.log(user);

user = JSON.stringify(user);

console.log(user);

const currentUser = JSON.parse(user);

console.log(currentUser);
