/////////////////////////////////
// Mumbling
/////////////////////////////////
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  s = s.split('');
  return s
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join('-');
}

console.log(accum('ZpglnRxqenU'));
console.log(accum('NyffsGeyylB'));
console.log(accum('MjtkuBovqrU'));
console.log(accum('EvidjUnokmM'));
console.log(accum('HbideVbxncC'));
