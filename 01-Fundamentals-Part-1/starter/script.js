/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 -10 -5; // x = y = 10, x = 10
console.log(x, y); 

const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);

// Coding Callenge #1

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName = 'Juan Carlos';
const job = "Programmer Junior";
const birthYear = 1986;
const year = 2022;

const juanCarlos = "I'm " + firstName + ", a " + (year - birthYear) + ' years old and i am a ' + job + "!";
console.log(juanCarlos);

const juanCarlosNew = `I'm ${firstName}, a ${year - birthYear} year old, I'm a ${job}. `;
console.log(juanCarlosNew);

console.log(`Just a regular String...`);
console.log('String with \n multiple \n lines');
console.log(`String with 
multiple lines.`);


// Taking decisions if / else
const age = 15;

if (age >= 18) {
    console.log('Anna can start drive license');
} else {
    const yearLeft = 18 - age;
    console.log(`Anna is too young. Wait another ${yearLeft} years.`);
}

const birthYear = 1991;

let century;
if(birthYear <= 2000){
    let century = 20;
}else {
    let century = 21;
}
console.log(century);


// Coding Callenge #2
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark is BMI (${BMIMark}) is higher than John`);
} else {
    console.log(`John is BMI (${BMIJohn}) is higher than Mark`);
}
*/

// 20. Type Conversion and Coercion
