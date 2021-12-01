const args = process.argv;
const numberStrings = args.slice(2);
const numbers = numberStrings.map(x => parseInt(x));
const validNumbers = numbers.filter(number => {
  if (number >= 0 && !isNaN(number)) {
    return true;
  } else {
    return false;
  }
});
for (let i = 0; i < validNumbers.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, validNumbers[i] * 1000);
}
