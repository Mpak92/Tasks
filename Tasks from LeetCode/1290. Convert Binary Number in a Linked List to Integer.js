const getDecimalValue = function (head) {
  const arr = [];
  const func = () => {
    arr.push(head.val);
    if (head.next) {
      head = head.next;
      return func();
    }
  };
  func();
  const str = arr.join('');
  const num = parseInt(str, 2);
  return num;
};

const head = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 1,
      next: null,
    },
  },
};

console.log(getDecimalValue(head));
