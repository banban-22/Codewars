/////////////////////////////////
// Stop gninnipS My sdroW!
/////////////////////////////////
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
  return string
    .split(' ')
    .map((char) => {
      if (char.length >= 5) return char.split('').reverse().join('');
      return char;
    })
    .join(' ');
}

console.log(spinWords('Hey fellow warriors')); //"Hey wollef sroirraw"
console.log(spinWords('This is a test')); //"This is a test"
console.log(spinWords('This is another test')); //"This is rehtona test"
