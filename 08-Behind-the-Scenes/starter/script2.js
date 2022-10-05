'use strict';
// Console.log
console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));  // ERROR
console.log(addArrow(2, 3));

// Functions Declaration
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
const addExpression = function (a, b) {
  return a + b;
};

// Function Arrow
const addArrow = (a, b) => a + b;
