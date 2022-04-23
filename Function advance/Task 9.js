function makeCounter() {
  let count = 0;
  const counter = () => {
    return count++;
  };

  counter.set = (a) => {
    count = a;
  };

  counter.decrease = () => {
    count--;
  };

  return counter;
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)
