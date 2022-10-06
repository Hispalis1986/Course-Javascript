// Primitive vs Objects in Practice

// Primitive types
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis'; // mutated
console.log(lastName, oldLastName); // Davis Willians

// Reference types
const Jessica = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
};
const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', Jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {}

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 29,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Leo');
jessicaCopy.family.push('Anna');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
