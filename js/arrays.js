//** All About Arrays in Js */
//![hame time complexity ka dhayn rakha kr sab question krne hai]


// Q:Remove Duplicates from an Array
// Given an array, return a new array with duplicates removed.
//? ans=> we are solving this question by multiple ways like using Set(), for of loop, for loop, etc;
function removeDuplicates(arr){
    let result = [];
    //1st soluton of usning Set()
    // const entries = new Set(arr);
    // return Array.from(entries);

    //2nd sol;
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
};
console.log(removeDuplicates([1,2,3,3,3,5,5,6,6]));




// Q:Return the array of only duplicates;
// like [1,2,3,3,4,4,5,6,7] => [3,3,4,4] ans;
function returnOnlyDuplicates(arr){

    // 1st sol; we create a empty set() and we run filter on array by checking set has that num already, if yes return and if not add them;
    // Note: it only return the 1st instanceof duplicate value;
    const setForStoreResult = new Set();
    return arr.filter(num => {
        if(setForStoreResult.has(num)){
            return true;
        } else {
            setForStoreResult.add(num);
            return false;
        }
    });

    // 2nd sol; we store the res into one object so we use later and we simpley run forEach and then filter;
    //! but issue is time compecity which is O(n²);
    let frequency = {};
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0)+1;
    });

    return arr.filter(num => frequency[num] > 1);
};
console.log(returnOnlyDuplicates([1,2,3,3,4,4,5,5,6,6]));




// Q:Merge Two Arrays Without Duplicates
// Combine two arrays and remove duplicate entries.
function mergeTwoArrayNoDuplicates(arr1, arr2) {
    // Set() has O(n) time complexcity;
    // Use a Set to automatically handle duplicates
    const mergedSet = new Set([...arr1, ...arr2]); // Combine both arrays into a Set
    return Array.from(mergedSet); // Convert Set back to an array
}
  
console.log(mergeTwoArrayNoDuplicates([1, 2, 3, 3], [2, 3, 4, 5])); 
  // Output: [1, 2, 3, 4, 5]





// Q:Sum of Array Elements
// Calculate the sum of all numbers in an array.
function sumOfArray(arr){
    let result = 0;

    if(arr.length === 0){
        return 0;
    };

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;  

    //? for find average of array; we simpley result/arr.length;
}
console.log(sumOfArray([1,2,3,4,5]));




// Q:Filter Even Numbers
// Create a function to filter even numbers from an array
function evenNumberFromArray(arr){
    let result = [];
    for(let num of arr){
        if(num % 2 === 0){
            result.push(num);
        }
    }
    return result;
};
console.log(evenNumberFromArray([1,2,3,4,5,6]));

// Q:Find the Second Largest Number
// Given an array of numbers, return the second largest element.
function secondLargestNumber(arr) {
    //? we can do this also using sort and [arr.length-2];

    let max1 = -Infinity;  // Largest number
    let max2 = -Infinity;  // Second largest number

    for (let numb of arr) {
        if (numb > max1) {
            max2 = max1; // Update second largest
            max1 = numb; // Update largest
        } else if (numb > max2 && numb < max1) {
            max2 = numb; // Update second largest
        }
    }

    // Return second largest (if available)
    return max2 === -Infinity ? null : max2;
}
// Test the function
console.log(secondLargestNumber([10, 20, 30])); // Output: 20
console.log(secondLargestNumber([30, 30, 40])); // Output: 30
console.log(secondLargestNumber([1, 4, 6, 2, 0])); // Output: 4


//Q: Count the frequency of each charater in the array also return the sorted array of frequency count;
// ["a", "b", "b", "c", "c"] => ["a":1, "b":2, "c":2]
function countFrequencyNSort(arr){
    let frequency = {};

    for(let char of arr){
        frequency[char] = (frequency[char] || 0)+1;
    }

    const sortedFrequency = Object.entries(frequency).sort((a,b)=> b[1]-a[1]);
    return sortedFrequency.flat(Infinity);
}
console.log(countFrequencyNSort(["x","a", "s","r","r","a","x","a","s"]))

// Q:Detect Array using Array.isArray()
// Create a function that checks if a given value is an array.
function Detect(arr){
    return Array.isArray(arr) ? true : false;
};
console.log(Detect([1,2,3])) //true
console.log(Detect({name:"Gs", age:22})) //f
console.log(Detect((1,2,3)))//f
console.log(Detect("1,2,3"))//f

// Q:Convert String to Array
// Write a function that splits a string into an array of words.
function splitArray(str){
    return Array.from(str); //["a", "b", "c"]  or .of("str")=["str"]
};
console.log(splitArray("abcdefgh"))





// Q:Simple CSV to Object Converter
// Convert a comma-separated values=>string into an array of objects assuming the first row is the header. 

// eg:- csv NOTE:- jo string ayi hai vo ek backtic ke andar hi aygi
//`name,age,city => these are keys
//Raju,25,Haryana
//Amit,30,Delhi`

///?Steps :- first we have two think like quotes me ham input nhi le skte kyuki vo wrong hai to ham sirf `` me input lenge special type string; then first we know string input hai output array hai split/join action me ayge; But hme split \n ke basis p krna hai line breaks ok;

function CSV(str){
    //split based on line
    const lines = str.trim().split("\n");
    //extract headers bcoz first item are keys
    const keys = lines[0].split(","); // we get keys array;

    const result = lines.slice(1).map(line =>{
        const values = line.split(",");
        return keys.reduce((obj,key,index)=>{
            obj[key] = values[index]
            return obj; //important to return from here
        },{})
    });
    return result;
};
const myCsv = `name,age,sex
Gaurav,24,Male
Amit,22,Male`
console.log(CSV(myCsv));
//OUTPUT:-
[
  { name: "Raju", age: "25", city: "Haryana" },
  { name: "Amit", age: "30", city: "Delhi" }
]







// Q:Rotate an Array by N Positions
// Write a function that rotates an array by a given number (positive or negative shifts).
//? positive rotation:-
array1 = [1,2,3,4,5];  // rotate it by n=2; means last se 2 elements ko first pe shift krna;
// array1 becomes [4,5,1,2,3]

//? negative rotation [1,2,3,4,5] //n=-2 becomes => [3,4,5,1,2];
function rotateArrayByN(arr,n){
    const length = arr.length;
    //if n is greater than array length eg: n=7 len=5 so=> 7%5=>2;
    n = n % length;

    //if n is negative convert it to positive roattaion
    if(n<0){
        n = length + n
    }

    const rotatedPart = arr.slice(-n);
    const remainingPart = arr.slice(0,length-n);

    return rotatedPart.concat(remainingPart);
};
console.log(rotateArrayByN([1, 2, 3, 4, 5], 2));
console.log(rotateArrayByN([1, 2, 3, 4, 5], -2));





// Q:Check for Duplicates Using ES6 Set
// Determine if an array contains duplicates using the Set data structure.
function checkDuplicates(arr){
    const set = new Set(arr);
    return set.size !== arr.length;
};
console.log(checkDuplicates([1,2,3,4,5]))
console.log(checkDuplicates([1,1,2,2,3,4,5]))



// Q:Merge Two Sorted Arrays
// Implement a function that merges two sorted arrays into a single sorted array.
// we have two array;[1,3,5], [2,4,6];
function mergeTwoSortedArray(arr1,arr2){
    let result = [];
    //solve using best time complexity;
    let i=0;
    let j=0;
    // we dont know the exact length of array;
    while (i<arr1.length && j<arr2.length) {
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]) //push only first
            i++ // to next element
        } else {
            result.push(arr2[j])
            j++
        }
    };

    //now pushing all other elements also
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result;
}
console.log(mergeTwoSortedArray([1,3,5],[2,4,6]));




// Q; Shuffle one array, and 2 arrays aand return shuffled array;
function shuffled(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      // Correctly call Math.random() and compute a valid random index
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap the element at i with the element at randomIndex
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}
//   console.log(shuffled([1, 2, 3, 4, 5, 6, 7, 8]));



// Q:Flatten a Nested Array (Arbitrary Depth) //?Flat polyfill
// Write a function to recursively flatten an array that contains nested arrays at any depth.

//using recursion
function flatArray(arr){
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flatArray(item))
        } else {
            result.push(item);
        }
    }
    return result;
};
console.log(flatArray([1,2,[3,4],[5,[6,7,[8,9]]]]));

// Q:Recursive Sum of Numbers in a Nested Array
// Implement a function that sums all numbers from a nested array structure using recursion.
function sumOfNestedArray(arr){
    let total = 0;

    for(let item of arr){
        if(Array.isArray(item)){
            total += sumOfNestedArray(item);
        } else if(typeof item === "number"){
            total += item
        }
    }
    return total;
};
console.log(sumOfNestedArray([1,2,[3,4,5],[2,[3,4]]]))



// Q:Symmetric Difference of Two Arrays
// Write a function that finds the symmetric difference (elements only in one array but not both) between two arrays.

// arr1 = [1,2,3,4];
// arr2 = [3,4,5,6];
// so symmetricDifference is [1,2,5,6]

function symmetricDifference(arr1,arr2){
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let unique = true;
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]){
                unique = false;
                break;
            } 
        }
        if(unique){
            result.push(arr1[i])
        }
    };

    for (let i = 0; i < arr2.length; i++) {
        let isUnique = true;
        for (let j = 0; j < arr1.length; j++) {
          if (arr2[i] === arr1[j]) {
            // If the element is found in arr1, it should not be added.
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          result.push(arr2[i]);
        }
      }
    return result;
}
console.log(symmetricDifference([1,2,3,4],[3,4,5,6]));



// What is Binary Search? {sorted array me search krna}
// Binary search is a searching algorithm that finds the position of a target value within a sorted array.
//? Hame simpley sabse phle ek sorted array me mid find krna hai; or array ko mid se divdie krna hai; and then target ko left half or right half ke elements se compare kaerege. Time compexcity O(log n)

//? Soution:- for sorted array only ok;
function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        
        //first compare mid with target
        if(arr[mid] === target) return mid;
        //agar array me target bda hai to left me jao ek element
        else if(arr[mid] < target) left = mid+1;
        //agar array me target chota hai to right me jao ek element
        else right = mid-1;
    }
    return -1; //Not found;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9],7)); //6
//output 6 why ?
//?The function returns 6 because in the sorted array, the number 7 is located at index 6 (remember that array indices start at 0).
// 1. Standard Binary Search on a Sorted Array
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Target: 7
// - Initial Setup:
// - left = 0
// - right = 8
// - The mid index is calculated as mid = Math.floor((0 + 8) / 2) = 4.
// - The element at index 4 is 5.
// - First Iteration:
// - Since 5 (at index 4) is less than 7, the algorithm discards the left side by updating left = mid + 1, which makes left = 5.
// - Second Iteration:
// - Now with left = 5 and right = 8, the new mid index is mid = Math.floor((5 + 8) / 2) = 6.
// - The element at index 6 is 7, which matches the target. Thus, the function returns 6.






// Q:Binary Search on a Rotated Sorted Array
// Given a rotated sorted array, write a function that performs a binary search for a target element.
//? Solution :- Understand an Sorted array is an array that has been rotated at some point;

// eg:- [15,18,20,2,8,10,12];
// sorted array => [2,8,10,12,15,18,20];

//! Q: How to search in a rotated sorted array?
//* ans:- 1. identify which half is sorted;
//* 2. check if target is in that sorted half;
//* 3. if not in sorted half then check in other half;

//! Although our array is not sorted, we solve this solution for sorted array is avobe;
[15,18,20,2,8,10,12]; //=> target = 10;
function binarySearchInRotatedArray(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target) return mid;

        //check which half is sorted; i.e left?
        if(arr[left] <= arr[mid]){
            //left half is sorted; 
            // so hmara target left or mid me hai;
            if(arr[left] <= target && target <= arr[mid]){
                right = mid-1; 
            } else {
                left = mid+1;
            }
        } else {
            //right half is sorted;
            if(target >= arr[mid] && target <= arr[right]){
                left = mid+1; //target is in right half; 
            } else {
                right = mid-1;
            }
        }
    }

    return -1 // Not found anything;
}
console.log(binarySearchInRotatedArray([15,18,20,2,8,10,12],10));//5
// - Initial Setup:
// - left = 0
// - right = 6
// - The mid index is calculated as mid = Math.floor((0 + 6) / 2) = 3.
// - The element at index 3 is 2.
// - First Iteration:
// - Since 2 is not equal to 10, the algorithm determines which half is sorted.
// - It checks if (arr[left] <= arr[mid]) → here, arr[0] is 15 and arr[3] is 2. Since 15 > 2, the left portion isn’t sorted; therefore, the right half must be sorted.
// - Now, check if the target lies in the right sorted portion by verifying if (arr[mid] <= target && target <= arr[right]) → here, 2 <= 10 <= 12 is true.
// - The algorithm then updates left = mid + 1, so left = 4.
// - Second Iteration:
// - With left = 4 and right = 6, the new mid index is mid = Math.floor((4 + 6) / 2) = 5.
// - The element at index 5 is 10, which matches the target, so the function returns 5.



// Q:Find the Missing Number in an Array
//  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.

// Problem statement :-You are given an array that contains n distinct numbers taken from the set {0, 1, 2, ..., n}. This means there are exactly n + 1 numbers in the complete range, but the array only holds n of them. Hence, one number is missing. Your task is to determine which number is missing.
// For example, if your array is [3, 0, 1], it's built from numbers ranging from 0 to 3. The complete set should be {0, 1, 2, 3}, and since 2 is missing, the answer is 2
//? Solution:- we have two approaches 1.Summation Formula methods 2.XOR method;
//? 1. Summation Formula methods;
// The idea here is based on the well-known formula for the sum of the first n natural numbers. The complete sum for numbers from 0 to n is given by:
// [ \text{expectedSum} = \frac{n \times (n + 1)}{2} ]
// Then, you sum the elements that are present in the array (let’s call it actualSum) and subtract this from the expected sum:
// [ \text{missingNumber} = \text{expectedSum} - \text{actualSum} ]
// Example with [3, 0, 1]:
// - The array length ( n = 3 ) because there are 3 numbers present.
// - The complete range should be 0 to 3 (which is 4 numbers).
// - Calculate expected sum:
// [ \frac{3 \times (3 + 1)}{2} = \frac{12}{2} = 6 ]
// - Calculate actual sum:
// [ 3 + 0 + 1 = 4 ]
// - The missing number is:
// [ 6 - 4 = 2 ]

function findMissingNumber(arr){
    let n = arr.length;  //3 for our eg;
    let expectedSum = n*(n+1) / 2; //12/2 = 6;
    let actualSum = arr.reduce((acc,curr)=>acc+curr,0);
    return Math.floor(expectedSum - actualSum);
};
console.log(findMissingNumber([3,0,1]));


// Q:Find the Kth Largest Number in an Array
//  Given an array of integers, find the kth largest number.
// solution:-
//? 1. Sorting Method:
function findKthLargest(arr,k){
   //sort the arr in decending order
   const sortedArray = arr.sort((a,b)=>b-a);
   return sortedArray[k-1]; //k-1 because index start from 0;
};
// Example:
// Consider arr = [3, 2, 1, 5, 6, 4] and k = 2.
// - If you sort the array in descending order, you get: [6, 5, 4, 3, 2, 1].
// - The 2nd largest element is 5.
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5





// Q:Find the Kth Smallest Number in an Array
//  Given an array of integers, find the kth smallest number.
function findKthSmallest(arr,k){
    //sort the arr in ascending order
    const sortedArray = arr.sort((a,b)=>a-b);
    return sortedArray[k-1]; //k-1 because index start from 0; 
}
// Example:
// Consider arr = [3, 2, 1, 5, 6, 4] and k = 2.
// - If you sort the array in ascending order, you get: [1, 2, 3, 4, 5, 6].
// - The 2nd smallest element is 2.
console.log(findKthSmallest([3, 2, 1, 5, 6, 4], 2)); // Output: 2



// Q:Check if Two Arrays are Anagrams
//  Determine if two arrays are anagrams (contain the same elements but in a different order).
//? Approach we follow is sorted arrays are equal or not; element wise

const arr1 = [1,2,4,5];
const arr2 = [4,2,1,5];
function checkAnagram(arr1,arr2){
  if(arr1.length !== arr2.length) return false;
  const sortedArr1 = arr1.sort((a,b)=>a-b);
  const sortedArr2 = arr2.sort((a,b)=>a-b);
  return sortedArr1.every((val,idx) => val === sortedArr2[idx]); 
};
console.log(checkAnagram(arr1,arr2)); //true



// Q:Find the Median of Two Sorted Arrays
//  Given two sorted arrays, find the median of the combined array.
function findMedian(arr1, arr2) {
  let mergeArray = [];
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }
  
  // Append remaining elements from arr1
  while (i < arr1.length) {
    mergeArray.push(arr1[i]);
    i++;
  }
  // Append remaining elements from arr2
  while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
  }

  const length = mergeArray.length;

  if (length % 2 === 1) {
    return mergeArray[Math.floor(length / 2)];
  } else {
    const mid1 = mergeArray[length / 2 - 1];
    const mid2 = mergeArray[length / 2];
    return (mid1 + mid2) / 2;
  }
}

console.log(findMedian([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // Correct output: 5.5



// Q:Find the Kth Smallest Number in a Sorted Matrix
//  Given a sorted matrix, find the kth smallest number.

// Q:Find the Longest Continuous Increasing Subsequence
//  Given an array of integers, find the longest continuous increasing subsequence.

// Q: Implement a Binary Search Tree (BST) in JavaScript
//  Implement a binary search tree (BST) with methods for insertion, deletion, and searching.