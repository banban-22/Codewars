/////////////////////////////////
// Get the Middle Character
/////////////////////////////////
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }

  if (s.length % 2 !== 0) {
    return s.slice(s.length / 2, s.length / 2 + 1);
  }
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
