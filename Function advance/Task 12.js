function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  const someFunction = (a, b) => {
    someFunction.calls.push([a, b]);
    return func(a, b);
  };
  someFunction.calls = [];

  return someFunction;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work.calls);

for (const args of work.calls) {
  console.log(`call:${args.join()}`); // "call:1,2", "call:4,5"
}
