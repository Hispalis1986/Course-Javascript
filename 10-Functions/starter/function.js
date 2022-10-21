'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey'); // al poner una segunda constante te transforma la segunda funcion
greeterHey('Juan'); // Hey Juan
greeterHey('Anna'); // Hey Anna
greet('Hello')('Juanka'); // Hello Juanka

// Challenge Arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hola')('Juan Carlos'); // Hola Juan Carlos

//////////////////
// The call and apply Methods

const iberia = {
  airline: 'Iberia',
  iataCode: 'IB',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
  },
};
iberia.book(111, 'Juan Carlos Royano Gonzalez');
console.log(iberia);

const euroWings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookins: [],
};

const book = iberia.book;
// Does NOT work
// book(23, "Sarah W");

book.call(iberia, 23, 'Sarah W');
console.log(iberia);

const swiss = {
  airline: 'American Express',
  iataCode: 'AE',
  bookins: [],
};
// Apply method
const flightData = [567, 'Mr. Royano'];
book.apply(swiss, flightData);
console.log(swiss);

// is the same method
book.call(swiss, ...flightData);

// Bind Method
const bookIberia = book.bind(iberia);
bookIberia(23, 'steven');

// With Event Listeners
iberia.planes = 300;
iberia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// document
//   .querySelector('.buy')
//   .addEventListener('click', iberia.buyPlane.bind(iberia));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); //123
console.log(addVAT(23)); // 28.29

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123
