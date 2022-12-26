/////////////////////////////////
// Bit Counting
/////////////////////////////////
// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = function (n) {
  let bit = n.toString(2);
  bit = bit
    .split('')
    .map((i) => Number(i))
    .filter((num) => num === 1).length;

  return bit;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
