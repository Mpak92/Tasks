const unique = (arr) => {
  const result = [];
  for (const key of arr) {
    if (!result.includes(key)) { result.push(key); }
  }
  return result;
};

const strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
