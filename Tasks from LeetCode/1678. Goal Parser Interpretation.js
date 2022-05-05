const interpret = function (command) {
  const arr = [];
  for (let i = 0; i < command.length;) {
    const pos = command.indexOf('G', i);
    if (pos >= 0) {
      arr[pos] = 'G';
      i = pos + 1;
    } else { break; }
  }
  for (let i = 0; i < command.length;) {
    const pos = command.indexOf('()', i);
    if (pos >= 0) {
      arr[pos] = 'o';
      i = pos + 1;
    } else { break; }
  }
  for (let i = 0; i < command.length;) {
    const pos = command.indexOf('(al)', i);
    if (pos >= 0) {
      arr[pos] = 'al';
      i = pos + 1;
    } else { break; }
  }
  const result = arr.join('');
  return result;
};

const command = 'G()(al)';

console.log(interpret(command));
