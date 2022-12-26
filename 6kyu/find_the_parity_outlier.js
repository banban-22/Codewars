/////////////////////////////////
// Find The Parity Outlier
/////////////////////////////////
// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers) {
  //   for (let i = 0; i < integers.length; i++) {
  //     if (integers[i] % 2 === 0) {
  //       let even = integers.filter((item) => item % 2 !== 0);
  //       return even[0];
  //     } else if (integers[i] % 2 !== 0) {
  //       let odd = integers.filter((item) => item % 2 === 0);
  //       return odd[0];
  //     }
  //   }
  let even = integers.filter((a) => a % 2 === 0);
  let odd = integers.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
