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

// Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Carnes, , Postres, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Carnes, Postres, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7]; // suma y añade a X
add(...x);

restaurant.orderFood2('mushrooms', 'onion', 'olives', 'spinach');
