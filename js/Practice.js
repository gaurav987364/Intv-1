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

