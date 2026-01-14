//** All About dates and international number format */

// write function based on dates?

// Q:- write a function that input date and count the age?
// solution:-
function calculateAge(birthDate) {  
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
console.log(calculateAge('2000-12-02')); // Example usage
// Q:- write a function that input date and return day name?
// solution:-
function getDayName(dateString) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return days[dayIndex];
}
console.log(getDayName('2000-12-02')); // Example usage