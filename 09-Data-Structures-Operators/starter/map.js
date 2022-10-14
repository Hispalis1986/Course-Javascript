'use strict';
const rest = new Map();
rest.set('name', 'Giovanni Pizzeria');
rest.set(1, 'Italia');
console.log(rest.set(2, 'Lisboa, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
console.log(rest.size);
// rest.clear();
rest.set([1, 2], 'Test'); // KEY, VALUE
// rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get([1, 2])); // undefined

// MAP: ITERATION
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct :D'],
  [false, 'Try again!'],
]);
console.log(question);

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
};

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quizz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// Arrays vs sets and objects vs maps
// Array
tasks = ['Code', 'Eat', 'Code'];
// => Use when you need ordered list of values
// => Use when you need to manipulate data

// Sets
tasks = new Set(['Code', 'Eat', 'Code']);
// => Use when you need to work with unique values
// => Use when high-performance is really important
// => Use to remove duplicates from arrays

// Objects
tasks = {
  task: 'Code',
  date: 'Today',
  repeat: true,
};
// => More traditional key/value store("abused objects")
// => Easier to write and access values with, and []
// => Use when you need to include functions(methods)
// => Use when working with JSON

// Maps
tasks = new Map([
  ['task', 'Code'],
  ['date', 'today'],
  [false, 'Start coding!'],
]);
console.log(tasks);
// => Better performance
// => Keys can have any data type
// => Easy to iterate and compute size
// => Use when you simply need to map key to values
// => Use when you need keys that are not strings
