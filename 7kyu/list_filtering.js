/////////////////////////////////
// List Filtering
/////////////////////////////////
// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  let newArr = [];

  for (let i = 0; i < l.length; i++) {
    if (l[i] >= 0 && Number.isInteger(l[i])) {
      newArr.push(l[i]);
    }
  }
  return newArr;
}
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
