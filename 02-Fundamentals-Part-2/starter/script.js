/*
// 32. Activating Strict mode
'use strict';
let hasDriveLicense = false;
const passTest = true;

if (passTest) hasDriveLicense = true; // hasDriveLicense error
if( hasDriveLicense) console.log('I can drive :D');

const interface = 'audio'; // error
const private = 534; // error


// 33. Functions
function logger() {
    console.log('My name is Juan')
}
// calling / running / invoking funktion
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);

const appleOranjeJuice = fruitProcessor(2, 4);
console.log(appleOranjeJuice);


// 34. Function Declaration vs Expression

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// 35. Arrow Functions

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1986);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1986, 'Juan Carlos'));
console.log(yearsUntilRetirement(1986, 'Anna'));

*/