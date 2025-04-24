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
// Convert a comma-separated string into an array of objects assuming the first row is the header.

// Q:Rotate an Array by N Positions
// Write a function that rotates an array by a given number (positive or negative shifts).

// Q:Check for Duplicates Using ES6 Set
// Determine if an array contains duplicates using the Set data structure.

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

// Q:Flatten a Nested Array (Arbitrary Depth)
// Write a function to recursively flatten an array that contains nested arrays at any depth.

// Q:Recursive Sum of Numbers in a Nested Array
// Implement a function that sums all numbers from a nested array structure using recursion.

// Q:Optimized Deep Flatten of Nested Arrays
// Implement a performance-optimized function that flattens arbitrarily nested arrays.

// Q:Symmetric Difference of Two Arrays
// Write a function that finds the symmetric difference (elements only in one array but not both) between two arrays.

// Q:Binary Search on a Rotated Sorted Array
// Given a rotated sorted array, write a function that performs a binary search for a target element.

// Q:Find the Kth Largest Number in an Array
//  Given an array of integers, find the kth largest number.

// Q:Check if Two Arrays are Anagrams
//  Determine if two arrays are anagrams (contain the same elements but in a different order).

// Q:Find the Median of Two Sorted Arrays
//  Given two sorted arrays, find the median of the combined array.

// Q:Find the Kth Smallest Number in a Sorted Matrix
//  Given a sorted matrix, find the kth smallest number.

// Q:Find the Longest Continuous Increasing Subsequence
//  Given an array of integers, find the longest continuous increasing subsequence.

// Q: Implement a Binary Search Tree (BST) in JavaScript
//  Implement a binary search tree (BST) with methods for insertion, deletion, and searching.