// Дана страка (возможно, пустая) состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида A4B3C2XYZD4E3F3A6B28
// Пояснения: если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется кол-во повторений

// const input = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'

const input = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';

const RLE = (string) => {
  const arr = input.split('');

  let count = 1;
  let char = '';
  let result = '';

  for (let i = 0; i <= input.length; i++) {
    if (char === input[i]) {
      count += 1;
    } else {
      result += char;
      char = input[i];
      if (count > 1) result += count;
      count = 1;
    }
  }
  return result;
};

console.log(RLE(input));
