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



// 36. Functions Calling other Functions
const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


// 37. Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired!!`)
        return -1;
        
    }
}
console.log(yearsUntilRetirement(1986, 'Juan Carlos'));


// .38 Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5)); // 4

// TEST 1
const scoreDolphins =  calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if ( avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
}
checkWinner( scoreDolphins, scoreKoalas);
checkWinner(444, 222);

// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);


// 39. Introduction to Arrays
const friend1 = 'Juan Carlos'
const friend2 = 'Anna'
const friend3 = 'Leo'

const friends = ['Juan Carlos', 'Anna', 'Leo'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // number

console.log(friends[0]) // Primer elemento de Array
console.log(friends[2])

console.log(friends.length); // te dice cuantos elementos hay en el Array
console.log(friends[friends.length - 1]) // Leo
friends[2] = "Rosa" // cambia el nombre del antiguo nombre en este caso Leo
console.log(friends);

const firstName = "Juanka"
const Juanka = [firstName, 'Royano', 2037 - 1986, 'programmer', friends ];
console.log(Juanka);
console.log(Juanka.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsAgain = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(yearsAgain[0]);
const age2 = calcAge(yearsAgain[1]);
const age3 = calcAge(yearsAgain[yearsAgain.length - 1]);

console.log(age1, age2, age3)

const ages = [calcAge(yearsAgain[0]), calcAge(yearsAgain[1]), calcAge(yearsAgain[yearsAgain.length - 1])];
console.log(ages)


// 40. Basic Array Operations( Methods )
const friends = ['Juan Carlos', 'Anna', 'Leo'];

// Add elements
const newLength = friends.push('Fran'); // añade al final Fran al Array
console.log(friends)
console.log(newLength)

friends.unshift('John'); // añade al principio del array John
console.log(friends);

// Remove elements
friends.pop() // elimina el ultimo array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Anna')); // 1

console.log(friends.includes('Anna')) // true
console.log(friends.includes('Alonso')) // false

if(friends.includes('Anna')) {
    console.log('You have a friend called Anna');
}
*/

// 41. Coding challenge

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Arrow function

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);