/////////////////////////////////
// Next Prime
/////////////////////////////////
// Get the next prime number!

// You will get a numbern (>= 0) and your task is to find the next prime number.

// Make sure to optimize your code: there will numbers tested up to about 10^12.

function nextPrime(n) {
  let count = 0;
  for (let i = n + 1; i > 0; i++) {
    if (isPrime(i)) {
      count = i;
      break;
    }
  }
  return count;
}

function isPrime(n) {
  let root = Math.sqrt(n);
  for (let i = 2; i <= root; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n !== 1;
}

console.log(nextPrime(0));
console.log(nextPrime(1));
console.log(nextPrime(2));
console.log(nextPrime(3));
console.log(nextPrime(5));
console.log(nextPrime(11));
console.log(nextPrime(17));
console.log(nextPrime(2971));
