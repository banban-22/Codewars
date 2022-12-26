/////////////////////////////////
// Scrolling Text
/////////////////////////////////
// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text) {
  text = text.toUpperCase();
  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}
console.log(scrollingText('codewars'));
console.log(scrollingText('abc'));
