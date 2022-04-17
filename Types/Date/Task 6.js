const formatDate = (date) => {
  const delta = Date.now() - date;
  if (delta < 1000) {
    return console.log('Прямо сейчас');
  }
  if (delta < 60000) {
    return console.log(`${delta / 1000} сек. назад`);
  }
  if (delta < 3600000) {
    return console.log(`${delta / (1000 * 60)} мин. назад`);
  }
  const time = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}.${date.getMinutes()}`;
  return console.log(time);
};

formatDate(new Date(new Date() - 1)); // "прямо сейчас"
formatDate(new Date(new Date() - 30 * 1000)); // "30 сек. назад"
formatDate(new Date(new Date() - 5 * 60 * 1000)); // "5 мин. назад"
formatDate(new Date(new Date - 86400 * 1000));
