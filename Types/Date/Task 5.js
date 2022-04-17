const getSecondsToday = () => {
  const startDay = new Date();
  startDay.setHours(0, 0, 0, 0);
  const sec = Math.round((Date.now() - startDay) / 1000);
  return sec;
};

console.log(getSecondsToday());
