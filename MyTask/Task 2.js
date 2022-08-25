function foo(callback) {
  setTimeout(() => {
    callback('A');
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(() => {
    callback('B');
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(() => {
    callback('C');
  }, Math.random() * 100);
}

// const callback = (str) => {
//   const a = new Promise ((resolve) => {
//     console.log(str);
//     resolve('Done');
//   });
//   return a;
// };

// const next = new Promise(() => {});

// const callback2 = async (str) => {
//   let promise = await new Promise((resolve) => {
//     callback2(str); resolve();
//   });
//   return promise;
// };
const callback = (str) => {
  console.log(str);
};

const func = () => {
  return new Promise((resolve) => {
    foo(resolve);
  });
};
const func1 = () => {
  return new Promise((resolve) => {
    resolve(bar);
  });
};
const func2 = () => {
  return new Promise((resolve) => {
    resolve(baz);
  });
};

const prom = new Promise((resolve) => {
  resolve(foo(resolve));
})

// async function func1(func, cb) {
//   func(cb);
//   console.log(cb);
// }

async function asyncFoo() {
  await func();
  await func1();
  await func2();
}

// asyncFoo();
console.log(prom);