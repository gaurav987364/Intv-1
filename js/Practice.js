function Practice() {
    console.log('Practice');
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
    const cleanStr = str?.replace(/[^a-z0-9A-Z]/gi,"").toLowerCase();
    const strArr = cleanStr?.split(" ");   //["hey", "gaurav"];
    const res = strArr?.reduce((curr,accm)=> Math.max(curr,accm.length),0);
    return res || "Not found!"
}; console.log(lengOfLongWord("hey my name is gaurab 9899"))