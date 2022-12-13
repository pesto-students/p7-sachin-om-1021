//! fucntion to check if a character is a vowel
function isVowel(char) {
  return "aeiou".includes(char);
}

//! function to count number vowels in a string and returns a map of frequency of vowels
function countVowel(str) {
  const vowelMap = new Map();
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let x = str.charAt(i);
    if (isVowel(x)) {
      if (vowelMap.has(x)) vowelMap.set(x, vowelMap.get(x) + 1);
      else vowelMap.set(x, 1);
    }
  }
  return vowelMap;
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(countVowel(sentence));
