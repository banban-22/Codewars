/////////////////////////////////
// Unscrambled eggs
/////////////////////////////////
// Unscramble the eggs.
// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
function unscrambleEggs(word) {
  const result = word.replace(/egg/g, '');
  return result;
}
console.log(unscrambleEggs('ceggodegge heggeregge'));
console.log(unscrambleEggs('FeggUNegg KeggATeggA'));
