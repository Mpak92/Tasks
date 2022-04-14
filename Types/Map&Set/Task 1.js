const values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
];

const unique = (arr) => {
  const result = new Set(values);
  return Array.from(result);
};

console.log(unique(values)); // Hare,Krishna,:-O
