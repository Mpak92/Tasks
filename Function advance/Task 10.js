const printNumbers = (from, to) => {
  setTimeout(function func() {
    console.log(from);
    from++;
    if (from <= to) {
      setTimeout(func, 1000);
    }
  }, 1000);
};

printNumbers(5, 10);
