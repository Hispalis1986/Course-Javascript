'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B
console.log(airline.length); // 16
console.log('B737'.length); // 4
console.log(airline.indexOf('r')); // position 6
console.log(airline.lastIndexOf('r')); // position 10
console.log(airline.indexOf('Portugal')); // position 8
console.log(airline.slice(4)); // Air Portugal -- Porque empieza la primera en la cuarta posición.
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // Counting from the end // al
console.log(airline.slice(1, -1)); // Delete the first and the last lyric, letter

const checkMiddleSeat = function (seat) {
  // B and E are in the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s == 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Juan Carlos')); // [String: 'Juan Carlos']
console.log(typeof new String('Juan Carlos')); // object
console.log(typeof new String('Juan Carlos').slice(1)); // string

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalizacion in name
const passenger = 'jUaN'; // Juan
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Juan

// Comparing emails
const email = 'hello@juan.com';
const loginEmail = '   Hello@Juan.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@juan.com
console.log(email === normalizedEmail); // true

// replacing
const priceGB = '288,97£';
const priceEU = priceGB.replace('£', '€').replace(',', '.');
console.log(priceEU);

const announcement = 'All passengers come to boarding 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

// Booleans
const plane1 = 'Airbus A230neo';
console.log(plane1.includes('A230')); // true
console.log(plane1.includes('Boeing')); // false
console.log(plane.startsWith('Airb')); // true

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are Not allowed on board');
  } else {
    console.log('welcome a board');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for a protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Juan Carlos'.split(' '));

const [firstName, lastName] = 'Juanka Royano'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica and smith davis');
capitalizeName('juan carlos royano gonzalez');

// Split: The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// Slice: The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Juan'.padStart(20, '+').padEnd(30, '+'));

// repeat
const message2 = 'Bad waether... All Departues Delayed...';
console.log(message2.repeat(2));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)}`);
};
planesInLine(5);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
