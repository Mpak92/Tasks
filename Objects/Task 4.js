const menu = {
  width: 100,
  height: 200,
  title: 'My menu',
};

const multiplyNumeric = (obj) => {
  for (const prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
  return 'Done';
};

const showValue = (obj) => {
  for (const prop in obj) {
    console.log(`${prop} - ${obj[prop]}`);
  }
};

showValue(menu);
multiplyNumeric(menu);
showValue(menu);

menu.price = 250;
menu.master = 'John';

showValue(menu);
multiplyNumeric(menu);
showValue(menu);
