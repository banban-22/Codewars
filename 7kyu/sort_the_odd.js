/////////////////////////////////
// Sort the odd
/////////////////////////////////
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(array) {
  // let temp = [];

  // array
  //   .filter((element, index) => element % 2 === 1 && temp.push(index))
  //   .sort((a, b) => a - b)
  //   .forEach((v, i) => (array[temp[i]] = v));

  // return array;
  const oddArr = [];
  const evenArr = [];
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }
  return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(
  sortArray([-31, 14, 16, 15, 21, -46, -21, 23, -45, -9, -19, 33, 37, -18])
);
console.log((sortArray([]), []));
