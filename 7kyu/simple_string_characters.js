/////////////////////////////////
// Simple string characters
/////////////////////////////////
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

function solve(str) {
  // return [/[A-Z]/, /[a-z]/, /\d/, /[\W_]/g].map(
  //   (rgx) => str.split(rgx).length - 1
  // );
  let u = str.match(/[A-Z]/g) || [];
  let d = str.match(/[a-z]/g) || [];
  let n = str.match(/[0-9]/g) || [];
  let s = str.match(/[\W_]/g) || [];
  return [u.length, d.length, n.length, s.length];
}
console.log(solve("*'&ABCDabcde12345"));
console.log(solve('W8CH8X7_5;]&9H^603$C34|0C5D(|6O57|5V)9!='));
