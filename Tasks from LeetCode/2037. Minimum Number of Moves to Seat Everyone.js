const minMovesToSeat = function (seats, students) {
  let moves = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  for (let i = 0; i < seats.length; i++) {
    const dif = seats[i] - students[i];
    if (dif < 0) {
      moves += -dif;
    } else moves += dif;
  }
  return moves;
};

const seats = [3, 1, 5];
const students = [2, 7, 4];

console.log(minMovesToSeat(seats, students));
