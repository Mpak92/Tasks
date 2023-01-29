const calPoints = (operations) => {
  const record = [];
  for (const operate of operations) {
    switch (operate) {
      case '+':
        record.push(record.at(-1) + record.at(-2));
        break;
      case 'D':
        record.push(record.at(-1) * 2);
        break;
      case 'C':
        record.pop();
        break;
      default:
        record.push(+operate);
    }
  }
  const result = record.reduce((sum, current) => sum + current, 0);
  return result;
};

const ops = ['5', '2', 'C', 'D', '+'];

console.log(calPoints(ops));
