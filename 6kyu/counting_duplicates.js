/////////////////////////////////
// Counting Duplicates
/////////////////////////////////
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let newText = text.toLowerCase().split('');
  let result = 0;
  const count = {};
  newText.map((str) => {
    if (!count.hasOwnProperty(str)) {
      count[str] = 0;
    } else {
      if (count[str] === 0) {
        result += 1;
      }
      count[str] = count[str] + 1;
    }
  });

  return result;
}

console.log(duplicateCount(''));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));
