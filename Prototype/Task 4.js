const dictionary = Object.create(null);

dictionary.toString = () => {
  return `${Object.keys(dictionary)}`;
};

Object.defineProperty(dictionary, 'toString', {
  enumerable: false,
});

// добавляем немного данных
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (const key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary.toString()); // "apple,__proto__"
