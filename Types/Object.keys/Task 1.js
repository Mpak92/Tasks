const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let sum = 0;
  for (const sal of Object.values(salaries)) {
    sum += sal;
  }
  return sum;
};

console.log(sumSalaries(salaries)); // 650
