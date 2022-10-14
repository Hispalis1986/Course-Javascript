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
