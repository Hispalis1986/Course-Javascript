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


// 41. Coding challenge

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Arrow function

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);


// 42. Objects

const juanArray = [
    'Juan Carlos',
    'Royano',
    2037 - 1986,
    'Programmer',
    ['Michael', 'Benedikt', 'Andy']
];

const juanObject = {
    firstName: 'Juan Carlos',
    lastName: 'Royano',
    age: 2037 - 1986,
    job: 'Programmer',
    friends: ['Michael', 'Benedikt', 'Andy'],
};
console.log(juanObject);

console.log(juanObject.lastName);
console.log(juanObject['lastName']);

const nameKey = 'Name';
console.log(juanObject['first' + nameKey]) // Juan Carlos   
console.log(juanObject['last' + nameKey]) // Royano

// const interestedIn = prompt('What do you want to know about JuanObject? Choose between firstName, lastName, age, job and friends');
// console.log(juanObject[interestedIn]);

// if (juanObject[interestedIn]) {
//     console.log(juanObject[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

juanObject.location = "Spain";
juanObject['twitter'] = '@Hispalis1986';
console.log(juanObject)

// Challenge
// juanObject has 3 friends, and his best friend is called Michael.
console.log(`${juanObject.firstName} has ${juanObject.friends.length} friends, and his best friend is called ${juanObject.friends[0]}.`)


// 44. Object Methods
const juanObject = {
    firstName: 'Juan Carlos',
    lastName: 'Royano',
    age: 2037 - 1986,
    job: 'Programmer',
    friends: ['Michael', 'Benedikt', 'Andy'],
    hasDrivesLicense: true,

    calcAge: function(birthYear) {
        return 2040 - birthYear
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}`
    }
};

console.log(juanObject.calcAge(1986));
console.log(juanObject['calcAge'] (1991));


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}



///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Lee del jonas Array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i]
    types.push(typeof jonas[i]);
}
console.log(types);

// 
const years = ['1991', '2002', '1986', '1961'];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages)

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);

}

console.log('--- BREAK WITH NUMBERS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') continue;

    console.log(jonas[i], typeof jonas[i]);

}


///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  
  // 0, 1, ..., 4  de principio a final
  // 4, 3, ..., 0  de final a principio
  
  for (let i = jonas.length - 1; i >= 0; i--) { // del final al principio
    console.log(i, jonas[i]);
  }
  
  for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
  
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
  }
  

  ///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
  
  let rep = 1;
  while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
  }
  
  let dice = Math.trunc(Math.random() * 6) + 1; // Trunc remove fractional part
  
  while (dice !== 6) { // dice is diferent from 6, when the value is 6, stop.
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
  }
  

  ///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { // bellow
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length; // suma dividida entre el array.length
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/