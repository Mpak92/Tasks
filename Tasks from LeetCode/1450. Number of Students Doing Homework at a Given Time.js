const busyStudent = function (startTime, endTime, queryTime) {
  let result = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      result += 1;
    }
  }
  return result;
};

const startTime = [1, 2, 3];
const endTime = [3, 2, 7];
const queryTime = 4;

console.log(busyStudent(startTime, endTime, queryTime));
