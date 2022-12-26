/////////////////////////////////
// Divide and Conquer
/////////////////////////////////
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x) {
  let result = 0;
  x.forEach((item, i) => {
    if (typeof item === 'number') {
      result += item;
    } else {
      result -= Number(item);
    }
  });

  return result;
}

console.log(divCon([9, 3, '7', '3']));
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));
