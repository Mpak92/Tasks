const getLastDayOfMonth = (year, mounth) => {
  const date = new Date(year, mounth + 1);
  date.setDate(date.getDate() - 1);
  return date.getDate();
};

console.log(getLastDayOfMonth(2012, 1));
