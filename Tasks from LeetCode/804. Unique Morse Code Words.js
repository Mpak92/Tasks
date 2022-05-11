const uniqueMorseRepresentations = function (words) {
  const morz = (str) => {
    const arr = str.split('');
    const alf = 'abcdefghijklmnopqrstuvwxyz';
    const morzeArr = ['.-', '-...', '-.-.', '-..', '.', '..-.',
      '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---',
      '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    for (let i = 0; i < arr.length; i++) {
      const k = alf.indexOf(arr[i]);
      arr[i] = morzeArr[k];
    }
    const morzeStr = arr.join('');
    return morzeStr;
  };
  const mappedArr = words.map(morz);
  const unique = new Set(mappedArr);
  return unique.size;
};

const words = ['gin', 'zen', 'gig', 'msg'];

console.log(uniqueMorseRepresentations(words));
