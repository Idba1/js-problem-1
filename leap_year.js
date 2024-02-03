// Simple Logic

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLipi = isLeapYear(2052);
console.log(isLipi);





// Another way
function isLearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true
    }
    else {
        return false;
    }
}

const isLeap = isLearYear2(2052);
console.log(isLeap);