const printList = (list) => {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
};

const printListRev = (list) => {
  if (list.next) {
    printListRev(list.next);
  }
  console.log(list.value);
};

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList(list);
printListRev(list);
