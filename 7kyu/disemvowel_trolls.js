/////////////////////////////////
// Disemvowel Trolls
/////////////////////////////////
// DESCRIPTION:
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
  //   const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

  //   const arr = str.split('').map((s) => s);

  //   const res = arr.filter((v) => !vowels.includes(v));
  //   return res.join('');
  return str.replace(/[aeuio]/gi, '');
}
console.log(disemvowel('This website is for losers LOL!'));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
