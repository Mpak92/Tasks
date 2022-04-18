const fib = (n) => {
  return (n <= 2)
    ? 1
    : fib(n - 1) + fib(n - 2);
};

console.log(fib(3)); // 2
console.log(fib(7)); // 13
// console.log(fib(77)); // слишком долго, не использовать рекурсию
