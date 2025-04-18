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
function countCharcterFrequency(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(countCharcterFrequency("Hey kese ho tum bhai"));

// Q:First Non-Repeating Character
// Identify the first character in a string that does not repeat
function firstNonRepeatingCharcs(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of str) {
    // means appaer only first/once time
    if (frequency[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingCharcs("swiss")); //w
console.log(firstNonRepeatingCharcs("hello")); //h
console.log(firstNonRepeatingCharcs("george")); //o

// Q:Title Case Conversion
// Write a function that converts any string to title case (capitalizing the first letter of each word).
function capitalizationOfStr(str) {
  const strArr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return strArr;
}
console.log(capitalizationOfStr("hey my name is panda op"));




//Q:Reverse Each Word in a Sentence
// Rather than reversing the whole string, reverse each word individually while keeping word order intact.
function reverseEachWord(str){
  //? sol-1
  // const strArr = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  // return strArr;
  
  //? sol-2
  let result = "";
  let word = ""
  for (let i = 0; i <= str.length; i++) {
    if(i === str.length || str[i] === " "){ // ends of the word or string
      for (let j=word.length -1; j>=0; j--) { // back loop for that word
        result += word[j];
      }

      if(i !== str.length){ // add space at the end of words after pusing one word to result.
        result += " ";
      }

      word = "" // reset the word variable so loop run on next word;
    } else {
      word += str[i] //now we join the whole string;
    }
  }
  return result;
}
console.log(reverseEachWord("hey my name is gaurav"));

// Q:Find the First Recurring Character in a String
// Determine the first character in a string that appears more than once
function firstReOcurringCharter(str){
  let frequency = {};
  for(let char of str){
    frequency[char] = (frequency[char] || 0) + 1;

    //check which comes more
    if(frequency[char] > 1){
      return char;
    }
  }
  return null;
};
console.log(firstReOcurringCharter("chandu ki chachi"));


// Q:Generate All Permutations of a Given String;;
// Write a function that returns all possible permutations of a string’s characters.
//? permutation means 3! => 3x2x1 => 6 permutation,
//? like if input is ABC then has 6 perumtattion ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

//? formula => n x (n-1) x (n-2) x ... x 1;
//? also used recursion here;
function getPermutations(string){
  if(string.length === 1){
    return [string]; // base string have only 1 permutation
  }

  const allCombos = [];

  for (let i = 0; i < string.length; i++) {
    //get all characters one-by-one
    const char = string[i];

    //get remaining characters also
    const remainingChars = string.slice(0,i)+string.slice(i+1);
    // console.log(remainingChars);

    //remainning permutations using recursion;
    const remainingPerms = getPermutations(remainingChars);
    
    //prepend current charater to each permutation of the remaining str;
    for(const perm of remainingPerms){
      allCombos.push(perm+char);
    }
  }
  return allCombos;
}
console.log(getPermutations("GAURAV"));

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
