const isEmpty = (obj) => {
  for (const prop in obj) {
    return false;
  }
  return true;
};

const schedule = {};

console.log(isEmpty(schedule));

schedule['9:30'] = 'get up';

console.log(isEmpty(schedule));
