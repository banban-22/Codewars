/////////////////////////////////
// Roman Numerals Encoder
/////////////////////////////////
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

const roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function solution(number) {
  let result = '';
  for (let key in roman) {
    if (number == roman[key]) {
      return (result += key);
    }

    let check = number > roman[key];
    if (check) {
      console.log(roman[key]);
      result = result + key.repeat(parseInt(number / roman[key]));
      number = number % roman[key];
    }
  }
  return result;
}
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(19));
console.log(solution(22));
console.log(solution(15));
console.log(solution(1000));
console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2007));
console.log(solution(2008));
