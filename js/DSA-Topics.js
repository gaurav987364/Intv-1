// All about DSA Topics used in Web Dev. For Now!

// *Merge two sorted Array,strings & lists;
// *Valid Parenthesis :-> There are two common ways to solve this in O(n) time and O(n) space:

//     1.parenthesis checker;
function isValid(s){
    const stack = [];
    const pairs={
        ")":"(",
        "}":"{",
        "]":"["
    };

    for(let c of s){
        if(c === "(" || c === "{" || c === "["){
            stack.push(c); // push 0 for same string;
        } else if(c === ")" || c === "}" || c === "]"){
            // console.log('stack each item in loop',stack[c])
            // console.log('pop item' ,stack.pop())
            if(stack.length === 0 || stack.pop() !== pairs[c]){
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("({()})"));
console.log(isValid("({]})"));
console.log(isValid("(({]))"));
console.log(isValid("(((())))"));
console.log(isValid("(((()))())"));
console.log(isValid("(((()))())()"));
console.log(isValid("(((()))())()(()))"));
console.log(isValid("(((()))())()(()())"));

//  2.score of parenthesis
//  Write a function scoreOfParentheses(s) that, given a balanced parentheses string s, returns its “score” defined by:
// () has score 1.
// AB (concatenation) has score A + B.
// (A) has score 2 × A.
//?Sol:-  "(" par naya frame push hota hai, ")" par pop karke calculate karke add karte hain. () ke andar kuch nahi, to score = 1. (A) me A ka score agar non-zero hai, to double kar do (2×A).
function scoreOfParenthesis(s) {
    let stack = [0];

    for(let char of s){
        if(char === "("){
            stack.push(0);  // pushing one frame
        } else {
            const score = stack.pop();  //end one
            const currentscore = Math.max(2*score, 1);
            stack[stack.length - 1] += currentscore;
        }
    };
    return stack.pop();
};
console.log(scoreOfParenthesis("()")); //1
console.log(scoreOfParenthesis("(())")); //2
console.log(scoreOfParenthesis("(()())")); //4
console.log(scoreOfParenthesis("(()(()))")); //6
console.log(scoreOfParenthesis("((())(()))")); //8
console.log(scoreOfParenthesis("(((((())))))")); //32
console.log(scoreOfParenthesis("((())(())(())(()))")); //16


//Q:  given a string s of '(' , ')' and lowercase English characters. Your task is to remove the minimun number of paranthesis ( '{' or '}' , in any positions ) so that the resulting paranthesis string is valid and return any valid string. Formally, a parenthesis string is a valid if and only if: it is the empty string, contains only lowercase characters, or it can be written as AB (A concatenated with B), where A and B are valid strings, it can be written as (A),where A is a valid string.
// explain the problem in depth, what are requirements and how we think of to do it, first explain problem with some senairios and eg. questions as well, then provide with 2-3 best of best way solutions with best time and space complexity , Note use language javascript+typescript,

// 🔍 Problem Understanding
// You’re given a string s containing:
// - '(' (opening parenthesis)
// - ')' (closing parenthesis)
// - lowercase English letters
// Your task: remove the minimum number of parentheses so that the resulting string is valid.

// What does "valid" mean?
// A string is valid if:
// - It’s empty.
// - It contains only lowercase letters.
// - It can be written as AB (concatenation of two valid strings).
// - It can be written as (A) where A is valid.

// 🧠 Example Scenarios
// 1. Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Explanation: The string is already valid.

// 2. Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Explanation: The string is already valid.

// 3. Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: Remove the minimum number of parentheses to make the string valid.

// 4. Input: s = "))(("
// Output: ""
// Explanation: Remove all parentheses to make the string valid.

function minRemoveToMakeValid(s) {
  let openCount = 0;
  let balance = 0;
  let result= [];

  // First pass: remove invalid ')'
  for (let char of s) {
    if (char === '(') {
      openCount++;
      balance++;
      result.push(char);
    } else if (char === ')') {
      if (balance > 0) {
        balance--;
        result.push(char);
      }
    } else {
      result.push(char);
    }
  }

  // Second pass: remove extra '('
  let finalResult= [];
  let openToKeep = openCount - balance;
  for (let char of result) {
    if (char === '(') {
      if (openToKeep > 0) {
        finalResult.push(char);
        openToKeep--;
      }
    } else {
      finalResult.push(char);
    }
  }

  return finalResult.join('');
}

// DSA (Data Structures & Algorithms) –> 15 Must-Know;

//* Reverse a linked list (iterative & recursive)?


//* Detect cycle in a linked list?

//* Two sum, Three sum?

//* Merge two sorted arrays / lists?

//* Longest Substring Without Repeating Characters?

//* Valid Parentheses?

//* Sliding Window Maximum

//* Top K Frequent Elements

//* Binary Search (with edge case patterns)

//* Kth largest/smallest in array

//* Implement stack using queue or vice versa

//* Find peak element in a mountain array

//* Level-order traversal of a binary tree

//* Clone a graph

//* LRU Cache implementation