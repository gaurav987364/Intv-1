//** All About Strings in Js */

// Strings are immutable in js; they cant modified;

let str = "Hello";
let x = str.at(-1);

console.log(x); // Output: o

// strings question;

//Q:Write a function that take string as argument and apply capitalization?✅
function capitalize(str) {
  if (str === "") {
    throw new Error("Not a Valid String.");
  }
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize("hey my name is gaurav. how are you bro."));
//Hey My Name Is Gaurav. How Are You Bro.

// Q:Reverse a String✅
// Write a function that takes a string and returns its reverse.
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("Gaurav"));

// Q:Palindrome Check
// Determine if a given string is a palindrome.
//? we have to remeber two thinsg only first make cleanStr which means no space, numbers, uppercases etc things in a string only in lowercase;, then reveser that clean str now retun by comaring them like dono me words from start and end are same;ok
function checkPalindrome(str) {
  let cleanStr = str.replace(/^a-zA-Z0-9/gi, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(cleanStr); //racecar
  console.log(reversedStr); //racecar
  return reversedStr === cleanStr;
}
console.log(checkPalindrome("racecar")); //true
console.log(checkPalindrome("boob")); //true
console.log(checkPalindrome("hello")); //false

//Q: Anagram check;
function checkAnagram(w1, w2) {
  const sortedWord1 = w1.split("").sort().join("");
  const sortedWord2 = w2.split("").sort().join("");
  if (sortedWord1 === sortedWord2) {
    return "Both word are Anagrams.";
  } else {
    return "Not a Valid Anagrams.";
  }
}
console.log(checkAnagram("slut", "lust"));
console.log(checkAnagram("ok", "okk"));

//Q: sort a string without using sort?;
function sortString(str) {
  let StrArray = str.split("");
  //bubble sort
  for (let i = 0; i < StrArray.length; i++) {
    //arr[i]=0
    for (let j = 0; j < StrArray.length - 1; j++) {
      //arr[i]=length-1; end
      if (StrArray[j] > StrArray[j + 1]) {
        const temp = StrArray[j];
        StrArray[j] = StrArray[j + 1];
        StrArray[j + 1] = temp;
      }
    }
  }
  return StrArray.join("");
}
console.log(sortString("gaurav")); //upper chracter mattrens while sorting;




// Q:Longest Word Length
// Given a sentence, find the length of its longest word;

// "hey my name is vikas and i am a react js.".split(" ").map(word => Number(word.length)).sort((a,b)=> a-b).slice(-1)
function lengthOfLonegestWord(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  const lengthOfWord = cleanStr
    .split(" ")
    .reduce((max, word) => Math.max(max, word.length), 0);
  return lengthOfWord || "Not found!";
}
console.log(
  lengthOfLonegestWord("hey my name is vikas and i am a react js developer.")
);




// Q:Count Character Frequency
// Create a function to count the frequency of each character in a string.

// Q:First Non-Repeating Character
// Identify the first character in a string that does not repeat

// Q:Title Case Conversion
// Write a function that converts any string to title case (capitalizing the first letter of each word).

//Q:Reverse Each Word in a Sentence
// Rather than reversing the whole string, reverse each word individually while keeping word order intact.

// Q:Find the First Recurring Character in a String
// Determine the first character in a string that appears more than once

// Q:Generate All Permutations of a Given String
// Write a function that returns all possible permutations of a string’s characters.

// Q:Group Anagrams from an Array of Strings
// Build a function that groups anagrams together from a supplied array of strings.

// Q:Convert camelCase to kebab-case
// Write a function to convert strings from camelCase to kebab-case format.

// Q:Find the longest common prefix among an array of strings

// Q:Implement a custom String.prototype.reverse() function

// Q:String Manipulation: Remove all vowels from a given string

// Q:String Manipulation: Reverse a string without using built-in reverse methods

// Q:Parse Complex Query Strings into Nested Objects
// Develop a parser that converts query strings (including nested structures like ) into a proper object.

//Q:Longest Substring Without Repeating Characters
// Given a string, find the length (or value) of the longest substring without duplicate characters.
