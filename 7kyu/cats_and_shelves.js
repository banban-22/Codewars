/////////////////////////////////
// Cats and Shelves
/////////////////////////////////

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

function solution(start, finish, diff = finish - start) {
  console.log(diff / 3);
  console.log(diff % 3);
  return Math.floor(diff / 3) + (diff % 3);
}

// function solution(start, finish) {
//   let stepsToClimb = finish - start;

//   let numBigJumps = Math.floor(stepsToClimb / 3);

//   let numSmallJumps = stepsToClimb % 3;

//   return numBigJumps + numSmallJumps;
// }

console.log(solution(1, 5));
