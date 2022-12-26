/////////////////////////////////
// Love vs friendship
/////////////////////////////////
// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string) {
  return [...string].reduce((res, c) => (res += c.charCodeAt() - 96), 0);
  // let num = 0;
  // for (let i = 1; i < string.length; i++) {
  //   num = string.charCodeAt(i) - 96;
  // }
  // return num;
}
console.log(wordsToMarks('attitude'));
