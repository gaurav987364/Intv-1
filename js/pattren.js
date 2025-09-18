//Some Basic Pattern printing Questions;

//1.Right-Angled Triangle Pattern

// Problem Statement:
// Write a function that takes an integer n and prints a right‐angled triangle composed of stars (*).
// Example (n = 5):
// *  
// **  
// ***  
// ****  
// *****  
function printTraiangle(n){
    for (let i = 0; i <= n; i++) {
        console.log("*".repeat(i))
        // "*".repeat(5) ***** ok
    }
};
console.log(printTraiangle(10));






//2.Floyd’s Triangle
//Problem Statement:
// Write a function that prints Floyd’s triangle of numbers. The triangle will start at 1, and the subsequent rows should contain one more number than the previous row.
// Example (n = 5 rows):
// 1  
// 2 3  
// 4 5 6  
// 7 8 9 10  
// 11 12 13 14 15  
function printFloyd(rows){
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num++;
        }
        console.log(row.trim());
    }
};
console.log(printFloyd(5))



//3.Pyramid Pattern
//Problem Statement:
// Write a JavaScript function that takes an integer n and prints a centered pyramid (or triangle) using stars (*).
// Example (n = 4):
//    *  
//   ***  
//  *****  
// *******  
function printPyramid(n){
    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);  // 5-1 => 4 spaces in left for 1st time loop
        const stars = "*".repeat(2 * i - 1);
        console.log(spaces+stars)
    }
};
console.log(printPyramid(5));

// Inverted Pyramid (Reverse Triangle) Pattern
// Problem Statement:
// Create a function that prints an inverted pyramid pattern. Given n rows, the first row should have the most stars and each subsequent row one less star until a single star is printed.
// Example (n = 5):
// *****  
// ****  
// ***  
// **  
// *  
function printReverseTriangle(n){
    for (let i=n; i >= 1; i--) {
        console.log("*".repeat(i))
    }
};
console.log(printReverseTriangle(5));


//reverse pyramid
function reversePyramid(n){
    for (let i = n; i>=1; i--) {
        const spaces = " ".repeat(n-i);
        const stars = "*".repeat(2 * i - 1)
        console.log(spaces+stars)
    }
}
console.log(reversePyramid(5))




// Diamond Pattern
// Problem Statement:
// Write a function that prints a diamond shape made up of stars. The function should handle the upper (pyramid) and lower (inverted pyramid) parts of the diamond with a given odd number of rows.
// Example (n = 5):
//   *  
//  ***  
// *****  
//  ***  
//   *  
function printDiamond(n){
    for (let i = 1; i <= n; i++) {
        const space = " ".repeat(n-i);
        const stars = "*".repeat(2*i-1)
        console.log(space+stars)
    }
    for(let i=n-1; i>=1;i--){
        const space = " ".repeat(n-i);
        const stars = "*".repeat(2*i-1)
        console.log(space+stars)
    }
};
console.log(printDiamond(5))


// Spiral Matrix Pattern
// Problem Statement:
// Write a function that prints an n x n matrix with numbers arranged in a spiral pattern (starting from 1).
// Example (n = 4):
// 1   2   3   4  ⭐⭐⭐
// 12  13  14  5  
// 11  16  15  6  
// 10  9   8   7 
function spiralMatrix(n) {
    const matrix = Array(n).fill(null).map(() => Array(n).fill(0));
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;
    let value = 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Top row
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = value++;
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = value++;
        }
        endCol--;

        // Bottom row
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = value++;
            }
            endRow--;
        }

        // Left column
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = value++;
            }
            startCol++;
        }
    }

    matrix.forEach(row => console.log(row.join(" ")));
}

// Example:
spiralMatrix(4);
/*
Output:-
1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7
*/


// Pascal's Triangle,
// Problem Statement:
// Write a JavaScript function that prints Pascal’s Triangle for a given number of rows.
// Example (n = 5):
//     1  
//    1 1  
//   1 2 1  
//  1 3 3 1  
// 1 4 6 4 1  
function pascalsTriangle(rows) {
    const triangle = [];
    for (let i = 0; i < rows; i++) {
        triangle[i] = Array(i + 1).fill(1); // Initialize row with 1s
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        console.log(triangle[i].join(" "));
    }
};

// Example:-
pascalsTriangle(5);
/*
Output:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/
