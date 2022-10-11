'use strict';

const restaurant = {
  name: 'Restaurante Español',
  location: 'Calle Lora 60, La Campana, España',
  categories: ['Español', 'Tapas', 'Vegetarian', 'Organic'],
  starterMenu: [
    'Jamon Serrano',
    'Aceitunas',
    'Pan con alioli',
    'Ensalada Mixta',
  ],
  mainMenu: ['Carnes', 'Pescados', 'Postres'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderFood: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicius food with ${ingredient1}, ${ingredient2} and ${ingredient3}.`
    );
  },
  orderFood2: function (mainngredient, ...otherIngredients) {
    console.log(mainngredient);
    console.log(otherIngredients);
  },
};

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Juan Carlos Royano Gonzalez'); // 3 y nombre =  3 // true
console.log('' || 'Juan'); // Juan
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello because is the first true value in this chain of OR operation.

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Condition on test = ?
// then : true or false value

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Juanka'); // false
console.log(7 && 'Juanka'); // if is true, the last part log
console.log('Hello' && 23 && null && 'Anna'); //true && true && false then no need continue.

// Practical example
if (restaurant.orderFood) {
  restaurant.orderFood('mushrooms', 'spinach', 'eggs');
}

restaurant.orderFood && restaurant.orderFood('mushrooms', 'spinach', 'eggs');

// The Nullish Coalescing operator (??)
restaurant.numVisitantes = 0;
const visitantes = restaurant.numVisitantes || 10;
console.log(visitantes); // = 10

// Nullish: null and undefined (NOT 0 or empty string "")
const visitantesCorrect = restaurant.numVisitantes ?? 10;
console.log(visitantesCorrect); // = 0

// Logical Assigment Operator
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assigment operator
// rest1.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assgnment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<Anonumous>';
// rest2.owner = rest2.owner && '<Anonumous>';
rest1.owner &&= '<Anonumous>';
rest2.owner &&= '<Anonumous>';

console.log(rest1);
console.log(rest2);
