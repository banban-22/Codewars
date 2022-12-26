/////////////////////////////////
// Vowel Count
/////////////////////////////////
// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// function getCount(str) {
//   if (str.includes('a' || 'e' || 'i' || 'o' || 'u')) {
//     return str.match(/[aeiou]/gi).length;
//   } else {
//     return 0;
//   }
// }
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
console.log(getCount('abracadabra'));
console.log(getCount('pear tree'));
console.log(getCount('my pyz'));
console.log(getCount('uigyqycd'));
