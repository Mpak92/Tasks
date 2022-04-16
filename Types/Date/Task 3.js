const date = new Date(2015, 0, 2);
console.log(date);

const getDateAgo = (date, days) => {
  const pastDate = new Date(date);
  pastDate.setDate(pastDate.getDate() - days);
  return pastDate;
};

console.log(getDateAgo(date, 1)); 
console.log(getDateAgo(date, 2)); 
console.log(getDateAgo(date, 365)); 
