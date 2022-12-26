/////////////////////////////////
// Replace With Alphabet Position
/////////////////////////////////

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
function alphabetPosition(text) {
  const arr = text
    .toUpperCase()
    .split('')
    .map((x) => x.charCodeAt());
  console.log(arr);

  const newArr = arr.filter((num) => {
    if (num > 64 && num < 91) {
      return num;
    }
  });
  console.log(newArr);
  const updatedNumArr = newArr.map((num) => num - 64);

  return updatedNumArr.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
