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
