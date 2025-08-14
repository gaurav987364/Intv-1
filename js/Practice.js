function Practice() {
    console.log('Practice.........');
}
Practice();

// This function initializes the Practice module and logs a message to the console.

function capitalizeFirstLetter(str){
    const strArray = str.split(' ');
    const capitalizeArray = strArray?.map(word => word.charAt(0).toUpperCase()+word.slice(1));
    return capitalizeArray.join(' ');
};

//bubble sort (sort a string without using sort)
function bubbleSort(str){
    const stringArr = str?.split('');

    for (let i = 0; i < stringArr.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(strArray[j] > strArray[j+1]){
                let temp = stringArr[j]
                strArray[j] = strArray[j+1];
                strArray[j+1] = temp;
            }
        }
    }
    return strArray?.join("");
}

function lengOfLongWord(str){
    // Keep spaces, remove other non-alphanumeric characters
    const cleanStr = str?.replace(/[^a-z0-9A-Z ]/gi, "").toLowerCase();
    const strArr = cleanStr?.split(" ").filter(Boolean); // remove empty strings
    const res = strArr?.map(item => item.length).reduce((curr, accm) => Math.max(curr, accm));
    return res || "Not found!";
}

console.log(lengOfLongWord("hey my name is gaurav 9899")); // Output: 6