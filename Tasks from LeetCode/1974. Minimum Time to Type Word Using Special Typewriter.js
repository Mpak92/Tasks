const minTimeToType = (word) => {
  let count = 0;
  let typeWriter = 'abcdefghijklmnopqrstuvwxyz';
  let typeWriterBack = 'azyxwvutsrqponmlkjihgfedcb';
  for (const char of word) {
    const stepsClockkwise = typeWriter.indexOf(char);
    const stepsCounterClockwise = typeWriterBack.indexOf(char);
    const stepsMin = Math.min(stepsClockkwise, stepsCounterClockwise);
    count += stepsMin + 1;
    typeWriter = typeWriter.slice(stepsClockkwise) + typeWriter.slice(0, stepsClockkwise);
    typeWriterBack = typeWriterBack.slice(stepsCounterClockwise)
        + typeWriterBack.slice(0, stepsCounterClockwise);
  }
  return count;
};

const word = 'bza';

console.log(minTimeToType(word));
