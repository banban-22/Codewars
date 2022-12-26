/////////////////////////////////
// Reverse words
/////////////////////////////////
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  const array = str.split(' ');

  const result = array.map((word) => word.split('').reverse().join(''));

  return result.join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));
