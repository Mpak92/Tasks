const map = new Map();

map.set('name', 'John');
console.log(map);
const keys = Array.from(map.keys());
console.log(keys);

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');
console.log(keys);