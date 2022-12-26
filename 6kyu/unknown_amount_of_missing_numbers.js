/////////////////////////////////
// Unknown Amount of Missing Numbers in an Unordered Array. (Hardcore version)
/////////////////////////////////
// We have a big list having values fom 1 to n, occurring only once but unordered with an unknown amount of missing values. The number n will be considered the maximum value of the array.

// We have to output the missing numbers sorted by value. Example:
// [8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]  ---> [2, 4, 9, 13]

// The number 1 should be in the input array, if it's not present in the input array, should be included in the results. See the example below.
// [8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]

// function missNumsFinder(arr) {
//   const set = new Set(arr);
//   const max = Math.max(...set);
//   // console.log(set);
//   // console.log(max);
//   const result = [];
//   for (let i = 1; i <= max; i++) {
//     if (!set.has(i)) result.push(i);
//   }
//   return result;
// }

function missNumsFinder(arr) {
  const result = [];
  const tmp = new Array(arr.length + 10);
  for (let i = 0; i < arr.length; i++) tmp[arr[i]] = arr[i];
  while ('undefined' === typeof tmp[tmp.length - 1]) tmp.pop();
  for (let i = 1; i < tmp.length; i++)
    if ('undefined' === typeof tmp[i]) result.push(i);
  return result;
}

let arr1 = [2, 3, 1, 9, 4, 5, 6, 10, 7];
console.log(missNumsFinder(arr1));

let arr2 = [7, 6, 1, 4, 9, 2, 10, 3, 8];
console.log(missNumsFinder(arr2));

let arr3 = [5, 4, 2, 9, 3, 8, 10, 6, 7];
console.log(missNumsFinder(arr3));
