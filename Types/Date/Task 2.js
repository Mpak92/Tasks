const date = new Date(2012, 0, 8); // 3 января 2012 года

const getLocalDay = (date) => {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day;
};

console.log(date);
console.log(getLocalDay(date)); // вторник, нужно показать 2
