const mas = [
  'Jazz',
  'Bluz',
];

console.log(mas);

mas.push('Rock\'n\'Roll');

const change = (arr) => {
  const num = Math.floor(arr.length / 2);
  arr[num] = 'Classic';
};

console.log(mas);

change(mas);

console.log(mas);

mas.shift();

console.log(mas);

mas.unshift('Rap', 'Reggi');

console.log(mas);
