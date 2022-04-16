const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  let topEmp = null;
  let topSal = 0;
  for (const [key, value] of Object.entries(salaries)) {
    if (value >= topSal) {
      topSal = value;
      topEmp = key;
    }
  }
  return topEmp;
};

console.log(topSalary(salaries));
