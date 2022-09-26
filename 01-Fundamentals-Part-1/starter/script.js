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


// 20. Type Conversion and Coercion
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Juanka'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n =  '1' + 1;
n = n - 1;
console.log(n)


// 21.Truthy and Falsy Values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Juanka'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("dont spend it all ;");
}else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('YaY! Height is defined!')
} else {
    console.log('Height is Undefined');
}


// 22. Equiality Operator: == vs ===
const age = 18;
if(age === 18) console.log('You just became an adult :D! (strict)');


if(age == 18) console.log('You just became an adult :D! (loose)');

const favourite = Number(prompt("What is your favourite number?"))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a good number!')
    
} else if (favourite === 9){
    console.log('9 is also Cool number!')
} else {
    console.log('Number is a not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?')


//24. Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense & hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false


// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Anna is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// Coding Chagenge #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91+ 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if ( scoreDolphins > scoreKoalas) {
//     console.log('Dolhpins win the trophy!!!')
// } else if  (scoreDolphins < scoreKoalas){
//     console.log('Koalas win the Trophy!!')
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!')
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if ( scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolhpins win the trophy!!!')
} else if  (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log('Koalas win the Trophy!!')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!')
} else {
    console.log('No one wins the trophy');
}


// 26. The Switch statement
const day = 'monday'; // Cambiar aqui el dia de la semana que prefieras para sacarlo en consola.

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break;
    default:
        console.log('Not a valid day')
}

if (day === monday) {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === tuesday) {
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples')
} else if (day === 'friday') {
    console.log('Record videos')
} else if (day === 'saturday' || day === "sunday") {
    console.log('Enjoy the weekend :D')
} else {
    console.log('Not valid Day!')
}



// 27. Statements and Expresions
3 + 4
1991
true && false && !false

if(23 > 10) {
    const str = '23 is higher';
}

const me = 'Juan'
console.log(`I am ${2037 - 1991} years old ${me}`);


// 28. Conditional Operator
const age = 23;
// age >= 18 ? console.log('I like to drink Wine') : console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if(age >= 18) {
    drink2 = 'wine';
}else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// Coding challenge #4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill *  0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/