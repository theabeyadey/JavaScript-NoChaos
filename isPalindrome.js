const prompt = require("prompt-sync")();

const userWord = prompt("Enter a word: ");
let reversedWord = "";

for (let letter = userWord.length - 1; letter >= 0; letter--) {
  reversedWord += userWord.charAt(letter);
}

const isPalindrome = userWord === reversedWord;

if (isPalindrome) {
  console.log(userWord + " is a palindrome.");
} else {
  console.log(userWord + " is NOT a palindrome.");
}

