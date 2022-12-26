/////////////////////////////////
// Exes and Ohs
/////////////////////////////////
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  str = str.toLowerCase();
  str = str.split('');
  let array = {};
  str.forEach((e) => {
    array[e] = (array[e] || 0) + 1;
    // console.log(e);
    // console.log(array[e]);
  });

  if (array.x === array.o) {
    return true;
  } else {
    return false;
  }

  // return array;
}
console.log(XO('ooxx'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));
