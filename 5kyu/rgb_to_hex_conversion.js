/////////////////////////////////
// RGB To Hex Conversion
/////////////////////////////////
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

const decToHex = (value) => {
  if (value > 255) {
    return 'FF';
  } else if (value < 0) {
    return '00';
  } else {
    return value.toString(16).padStart(2, '0').toUpperCase();
  }
};
function rgb(r, g, b) {
  return decToHex(r) + decToHex(g) + decToHex(b);
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(148, 0, 211));
