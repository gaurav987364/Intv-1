//** All About Strings in Js */

// Strings are immutable in js; they cant modified;

let str = "Hello";
let x = str.at(-1);

console.log(x); // Output: o

// strings question;

function countVowels(str) {
  let vowel = str.match(/[aeiou]/gi);
  return vowel ? vowel.length : 0;
}
console.log(countVowels("gaurav sharm"));

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
function lengOfLongWord(str){
    // Keep spaces, remove other non-alphanumeric characters
    const cleanStr = str?.replace(/[^a-z0-9A-Z ]/gi, "").toLowerCase();
    const strArr = cleanStr?.split(" ").filter(Boolean); // remove empty strings
    const res = strArr?.map(item => item.length).reduce((curr, accm) => Math.max(curr, accm));
    return res || "Not found!";
}

console.log(lengOfLongWord("hey my name is gaurab 9899")); // Output: 6

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
function reverseEachWord(str) {
  //? sol-1
  // const strArr = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  // return strArr;

  //? sol-2
  let result = "";
  let word = "";
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === " ") {
      // ends of the word or string
      for (let j = word.length - 1; j >= 0; j--) {
        // back loop for that word
        result += word[j];
      }

      if (i !== str.length) {
        // add space at the end of words after pusing one word to result.
        result += " ";
      }

      word = ""; // reset the word variable so loop run on next word;
    } else {
      word += str[i]; //now we join the whole string;
    }
  }
  return result;
}
console.log(reverseEachWord("hey my name is gaurav"));


//Q: Reverse the order of the sentence?
function ReverseOrder(str){
  const array = str.split(" ");
  let res = "";
  for (let i = array.length -1; i>=0 ; i--) {
    res += array[i] + " "
  }
  return res.trim();
}
console.log(ReverseOrder("hello world"));


// Q:Find the First Recurring Character in a String
// Determine the first character in a string that appears more than once
function firstReOcurringCharter(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;

    //check which comes more
    if (frequency[char] > 1) {
      return char;
    }
  }
  return null;
}
console.log(firstReOcurringCharter("chandu ki chachii"));

// Q:Generate All Permutations of a Given String;;
// Write a function that returns all possible permutations of a string’s characters.
//? permutation means 3! => 3x2x1 => 6 permutation,
//? like if input is ABC then has 6 perumtattion ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

//? formula => n x (n-1) x (n-2) x ... x 1;
//? also used recursion here;
function getPermutations(string) {
  if (string.length === 1) {
    return [string]; // base string have only 1 permutation
  }

  const allCombos = [];

  for (let i = 0; i < string.length; i++) {
    //get all characters one-by-one
    const char = string[i];

    //get remaining characters also
    const remainingChars = string.slice(0, i) + string.slice(i + 1);
    // console.log(remainingChars);

    //remainning permutations using recursion;
    const remainingPerms = getPermutations(remainingChars);

    //prepend current charater to each permutation of the remaining str;
    for (const perm of remainingPerms) {
      allCombos.push(perm + char);
    }
  }
  return allCombos;
}
console.log(getPermutations("GAURAV")); //720 permutations;

//Q:Merge two sorted string into single str
// "ACE","BDF" => "ABCDEF";
function MergeTwoSortedStrings(str1, str2) {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  let result = "";
  let i = 0;
  let j = 0;

  while (i < str1Arr.length && j < str2Arr.length) {
    if (str1[i] < str2[j]) {
      result += str1[i];
      i++;
    } else {
      result += str2[j];
      j++;
    }
  };

  while (i < str1Arr.length) {
    result += str1[i];
    i++;
  };
  while (j < str2Arr.length) {
    result += str2[j];
    j++;
  };
  return result;
}
console.log(MergeTwoSortedStrings("ACE", "BDF"));

// Q:Group Anagrams from an Array of Strings
// Build a function that groups anagrams together from a supplied array of strings.
Input: ["eat", "tea", "tan", "ate", "nat", "bat"];
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
function groupAnagrams(arr) {
  let anagramsGroup = {};

  for (const word of arr) {
    //take each word from array
    const sortedWord = word.split("").sort().join("");

    //if already nahi hai to;
    if (!anagramsGroup[sortedWord]) {
      anagramsGroup[sortedWord] = []; //create array space for values
    }
    //or agar hai to simpley push krdo;word ko
    anagramsGroup[sortedWord].push(word);
  };

  //return array of values
  return Object.values(anagramsGroup);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Q:Convert camelCase to kebab-case
// Write a function to convert strings from camelCase to kebab-case format.
function camelTokebab(str) {
  let kebabStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // check if character is upperCase
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      // adding hyphen before uppercase and skip firt charcter
      kebabStr += (i > 0 ? "-" : "") + char.toLowerCase();
    } else {
      kebabStr += str[i];
    }
  }

  return kebabStr;
};
console.log(camelTokebab("userInfo"));
console.log(camelTokebab("ReactRouterDom"));
console.log(camelTokebab("hello"));

// Q:Find the longest common prefix among an array of strings
//You are given an array of strings, and you need to find the longest prefix (beginning part of the string) that is common to all the strings in the array.    //["use"]

//approach => horizontal scanning
// start by assuming first word as prefix
// compare frefix with every subsequent string
// now matches all the string until itmatches all string and becomes empty;
function longestCommonPrefix(arr) {
  // there is empty arr return ""["user", "userInfo", "usecase", "usedItem","use"]
  if (arr.length === 0) return "";

  // assume first word as prefix for now
  let prefix = arr[0];

  //now we have to compare each remaining word with prefix
  // start form 1 becaue 0 ko upar le chuke hai
  for (let i = 1; i < arr.length; i++) {
    //keep reducing the prefix until it matches
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // after first iteration rmove last charcter & then again compare
      if (prefix === "") return "";
    }
  }
  return prefix;
};
console.log(
  longestCommonPrefix(["user", "userInfo", "usecase", "usedItem", "use"])
);

// Q:Implement a custom String.prototype.reverse() function
//This question asks you to extend the functionality of JavaScript strings by adding a custom method called reverse() to the String.prototype object. The purpose of this method is to reverse a string when it is called on any string instance.
//?Polyfill of reverse() on strings;
String.prototype.reverse = function () {
  let result = "";
  for (let i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }
  return result;
};
const name = "Gaurav";
console.log(name.reverse());

// Q:String Manipulation: Remove all vowels from a given string;
// simpley define a vowels and filter out them by checking if our vowels  not includes current charcter then add it

function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  let withoutVowel = "";
  for (let c of str) {
    if (!vowels.includes(c)) {
      withoutVowel += c;
    }
  }
};
console.log(removeVowels("gaurav sharma"));

// Q:Parse Complex Query Strings into Nested Objects
// Develop a parser that converts query strings (including nested structures like ) into a proper object.
input = //  ?user[name]=Gaurav&user[age]=25&location[city]=Ballabgarh&location[country]=India
  ouput = {
    user: {
      name: "Gaurav",
      age: 25,
    },
    location: {
      city: "Ballabgarh",
      country: "India",
    },
  };

// This question asks you to build a query string parser that can take a complex URL query string and convert it into a JavaScript object representation. This involves handling nested structures, which require recursion or hierarchical parsing.

//A query string is the part of a URL that comes after the ? symbol. It often contains key-value pairs separated by = and pairs themselves separated by &. Nested structures may use characters like [] or dots (.) to represent hierarchy.

function parseQueryString(query) {
  const result = {};

  // Remove the '?' at the beginning of the query string, if present
  query = query.startsWith("?") ? query.slice(1) : query;

  // Split into key-value pairs
  const pairs = query.split("&");

  for (let pair of pairs) {
    const [key, value] = pair.split("=");
    assignValue(
      result,
      decodeURIComponent(key),
      decodeURIComponent(value || "")
    );
  }

  return result;
};

// Helper function to assign values into the result object
function assignValue(obj, key, value) {
  const keys = key.split(/[\[\]]+/).filter(Boolean); // Split nested keys, e.g., 'user[name]' -> ['user', 'name']

  let current = obj;
  for (let i = 0; i < keys?.length - 1; i++) {
    const k = keys[i];
    if (!current[k]) {
      current[k] = isNaN(keys[i + 1]) ? {} : []; // Check if the next key is numeric, suggesting an array
    }
    current = current[k];
  }

  const lastKey = keys[keys.length - 1];
  if (Array.isArray(current[lastKey])) {
    current[lastKey].push(value); // Push values into an array if it exists
  } else if (current[lastKey]) {
    current[lastKey] = [current[lastKey], value]; // Convert existing value into an array
  } else {
    current[lastKey] = value; // Otherwise, assign the value normally
  }
}

// Example usage
const queryString =
  "?user[name]=Gaurav&user[age]=25&user[hobbies][]=coding&user[hobbies][]=reading&location[country][name]=India&location[country][code]=IN";
const parsedObject = parseQueryString(queryString);
console.log(parsedObject);

//Q:Longest Substring Without Repeating Characters
// Given a string, find the length (or value) of the longest substring without duplicate characters.
//? Sliding Window; [a(b(c)d)e] // c is center and taking expand around center in odd string length case, or [a(bc)d] // taking bc as center in even case and now expand around it
//Substring vs. Subsequence:
// A substring is a contiguous block of characters within a string. For example, in "abcabcbb", "abc" is a substring, whereas "acb" (even though it has unique letters) is not a valid substring because the characters are not contiguous.
//No Repeating Characters:
// The substring you select must not contain any character more than once. For instance, in "abcabcbb", although "abcabc" is a substring, it has duplicate characters and is therefore not allowed.
//Output:The question typically asks for the length of this longest substring. Some variations might ask you to return the substring itself.
function lengthOfLongestSubString(str) {
  let hashmap = {};
  let maxLength = 0;
  let startIndex = 0; // start of the sliding winow

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    //ye condition tab chalegi jab koi repeating charcter ayga ;
    if (hashmap[char] !== undefined && hashmap[char] >= startIndex) {
      startIndex = hashmap[char] + 1; // move window to next
    }

    hashmap[char] = i; // update index of the charcter;(char)
    // console.log(hashmap);
    // console.log(startIndex);

    maxLength = Math.max(maxLength, i - startIndex + 1);
    // console.log(maxLength)
  }
  return maxLength;
}
console.log(lengthOfLongestSubString("abcdabck")); //abcd

// Write a function to find the longest palindromic substring in a given string.
//input Input: "babad"
//output: "bab" is palindrome from first & last same reads;
//? we used expand around center approach;
// start: will hold the starting index;
// maxLength: tracks the length of palindrome;

//- Odd-length: call it with the same index for both left and right
//  Even-length: call it with i and i+1.
//Update start and maxLength if a longer palindromic substring is found.

function longestPalindromeicSubstring(str) {
  if (str.length === 0) return "";

  let start = 0;
  let maxLength = 0;

  // expand around center // suppose for babad  so b is center
  function expandAroundCenter(left, right) {
    //here we have two conditionone left wali is for odd expansion & right wali is for even exapnsion;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--; // move from just left element ro next in left
      right++; //vise versa
    }
    return [left + 1, right - 1];
  }

  //main loop
  for (let i = 0; i < str.length; i++) {
    //odd length palindrome (center is the single chracter i)
    let [left1, right1] = expandAroundCenter(i, i);
    let length1 = right1 - left1 + 1;
    //even length palindrome (center is b/w chracter i & i+1)
    let [left2, right2] = expandAroundCenter(i, i + 1);
    let length2 = right2 - left2 + 1;

    //checks which palindrome is longer
    if (length1 > maxLength) {
      maxLength = length1;
      start = left1;
    }
    if (length2 > maxLength) {
      maxLength = length2;
      start = left2;
    }
  }
  return str.substring(start, start + maxLength);
}
console.log(longestPalindromeicSubstring("babad")); //bab
console.log(longestPalindromeicSubstring("xyzracecarpqr")); //racecar



//Q: Find the length of the longest substring with have same number of vowels and consonants
// Given a string, find the length of the longest substring that contains an equal number of vowels and consonants.

// for eg:-  "kjabcioj"  => ouput string:- "jabcio" => so length is // 6




// Wildcard Pattern Matching 
// Write a function that implements wildcard pattern matching with support for '?' and '*'. The '?' matches any single character, and '*' matches any sequence of characters (including the empty sequence).

// ? matches only one chracter in the string
// * matches more than one character in the string;(includes empty space)

//!Approach => Using dp(dynamic programming) table
//dp[i][j]

//problem : Pattern: "a*b" ,string: "axxxb" //true
//problem : Pattern: "a?c" ,string: "abc" //true

//Time Complexity: O(m × n), where m is the length of the string and n is the length of the pattern.
// Space Complexity: O(m × n) for the DP table.

// check before goes to question
// const dp = Array(3+1).fill(false).map(()=>Array(3+1).fill(false));
// dp[0][0] = true
// console.log(dp)
// [
//   [ true, false, false, false ],
//   [ false, false, false, false ],
//   [ false, false, false, false ],
//   [ false, false, false, false ]
// ]

function isMatch(string, pattern) {
  const m = string.length;
  const n = pattern.length;

  //making the dp table
  const dp = Array(m + 1)
    .fill(false)
    .map(() => Array(n + 1).fill(false));

  //Base case: An empty pattren matches the empty string;//this do true first index in tabel
  dp[0][0] = true; //1st index [i][j] so loop run from 1 from now

  //handle pattern starting with *
  //start = 1
  //end pattren.length
  for (let j = 1; j <= n; j++) {
    if(pattern[j-1] === "*"){
      dp[0][j] = dp[0][j-1]; //* match exmpty string;
    }
  }

  //fill dp table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if(pattern[j-1] === string[i-1] || pattern[j-1] === "?"){
        //characters match or ? matches a single charcter
        dp[i][j] = dp[i-1][j-1]
      } else if(pattern[j-1] === "*"){
        dp[i][j] = dp[i][j-1] || dp[i-1][j]
      }
    }
  }

  return dp[m][n];
};
// Test examples
console.log(isMatch("acb", "a?b"));      // Output: true
console.log(isMatch("axxxb", "a*b"));    // Output: true
console.log(isMatch("ab", "a*b"));       // Output: true
console.log(isMatch("ab", "a*c"));       // Output: false

// Write a function to convert a given string into a zigzag pattern on a given number of rows, and then read it line by line.

// Given a 2D board and a list of words, find all the words in the board.

// convert this string to that
// this = "a.b.c.d.e"
// that = {a:{b:{c:{d:{e:{}}}}}}
function convert(str){
  const strArr = str.split(".");
  return strArr.reduce((obj,key)=>{
    return {[key]:obj}
  });
};
console.log(convert("a.b.c.d.e.f.g"));


// Q: Backtrack in case of Strings converted into arrays?
// 