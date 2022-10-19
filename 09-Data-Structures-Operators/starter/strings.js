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
