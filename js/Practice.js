function Practice() {
    console.log('Practice...');
}
Practice();

// This function initializes the Practice module and logs a message to the console.

function capitalizeFirstLetter(str){
    const strArray = str.split(' ');
    const capitalizeArray = strArray?.map(word => word.charAt(0).toUpperCase()+word.slice(1));
    return capitalizeArray.join(' ');
};

//bubble sort (sort a string without using sort)
//! Basically we runs the loop over the array from index 0 and laster index then by compare them we swap
function bubbleSort(str){
    const strArr = str?.split('');
    for(let i=0; i<strArr.length; i++){
        for(let j=0; j<strArr.length-i-1; j++){
            if(strArr[j] > strArr[j+1]){
                let temp = strArr[j];
                strArr[j] = strArr[j+1];
                strArr[j+1] = temp;
            }
        }
    }
    return strArr?.join("");
};

// usage: 
console.log(bubbleSort("hello world")) // " dehllloorw"
function lengOfLongWord(str){
    // Keep spaces, remove other non-alphanumeric characters
    const cleanStr = str?.replace(/[^a-z0-9A-Z ]/gi, "").toLowerCase();
    const strArr = cleanStr?.split(" ").filter(Boolean); // remove empty strings
    const res = strArr?.map(item => item.length).reduce((curr, accm) => Math.max(curr, accm));
    return res || "Not found!";
};

console.log("hey my name is gaurav"?.split(" ").filter(Boolean))
console.log(lengOfLongWord("hey my name is gaurav")); // Output: 6