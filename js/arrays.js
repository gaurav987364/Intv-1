//** All About Arrays in Js */
//![hame time complexity ka dhayn rakha kr sab question krne hai]


// Q:Remove Duplicates from an Array
// Given an array, return a new array with duplicates removed.

// Q:Merge Two Arrays Without Duplicates
// Combine two arrays and remove duplicate entries.

// Q:Sum of Array Elements
// Calculate the sum of all numbers in an array.

// Q:Filter Even Numbers
// Create a function to filter even numbers from an array

// Q:Find the Second Largest Number
// Given an array of numbers, return the second largest element.

// Q:Detect Array using Array.isArray()
// Create a function that checks if a given value is an array.

// Q:Convert String to Array
// Write a function that splits a string into an array of words.

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