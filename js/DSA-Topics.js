// All about DSA Topics used in Web Dev. For Now!

// *Merge two sorted Array,strings & lists;
// *Valid Parenthesis :- There are two common ways to solve this in O(n) time and O(n) space:

//     1.parenthesis checker;

//     2.score of parenthesis
//     Write a function scoreOfParentheses(s) that, given a balanced     parentheses string s, returns its “score” defined by:
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
    }
    return stack.pop();
};
console.log(scoreOfParenthesis("()")); //1
console.log(scoreOfParenthesis("(())")); //2
console.log(scoreOfParenthesis("(()())")); //4
console.log(scoreOfParenthesis("(()(()))")); //6
console.log(scoreOfParenthesis("((())(()))")); //8
console.log(scoreOfParenthesis("(((((())))))")); //32
console.log(scoreOfParenthesis("((())(())(())(()))")); //16