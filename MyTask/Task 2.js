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

const callback = (str) => {
  console.log(str);
};

const promise1 = new Promise((resolve) => {
  foo(callback);
});

const promise2 = new Promise((resolve) => {
  bar(callback);
});

const promise3 = new Promise((resolve) => {
  baz(callback);
});

async function asyncFoo() {
  await promise1;
  await promise2;
  await promise3;
}

asyncFoo();
