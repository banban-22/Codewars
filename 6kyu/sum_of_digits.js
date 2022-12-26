/////////////////////////////////
// Sum of Digits / Digital Root
/////////////////////////////////
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
  if (n < 10) {
    return n;
  } else {
    return digitalRoot(
      n
        .toString()
        .split('')
        .reduce((acc, curr) => {
          return acc + +curr;
        }, 0)
    );
    // return ((n - 1) % 9) + 1;
  }
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
