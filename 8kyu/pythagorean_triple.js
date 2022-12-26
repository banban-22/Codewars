/////////////////////////////////
// Pythagorean Triple
/////////////////////////////////
// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  // console.log(integers);
  const [a, b, c] = integers;
  return Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2);
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 5, 9]));
