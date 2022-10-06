'use strict';
// Console.log
console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));  // ERROR
// console.log(addArrow(2, 3));

// Functions Declaration
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
const addExpression = function (a, b) {
  return a + b;
};

// Function Arrow
// var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
