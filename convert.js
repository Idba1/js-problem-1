function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const shuvoHeight = inchToFeet(65);
console.log(shuvoHeight);





// Another way
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}
const shuvoHeight2 = inchToFeet2(65);
console.log(shuvoHeight2)







function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const kilometer = mileToKilometer(65);
console.log(kilometer)



function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const miles = kiloMeterToMiles(65);
console.log(miles)