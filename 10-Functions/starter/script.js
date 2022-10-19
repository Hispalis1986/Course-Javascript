'use strict';

const bookins = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES%
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookins.push(booking);
};
createBooking('LH123');
createBooking('ESP123', 2, 800);

// 2 function
const reservas = [];
const crearReserva = function (
  numVuelo,
  numPasajeros = 1,
  precio = 199 * numPasajeros
) {
  const reserva = {
    numVuelo,
    numPasajeros,
    precio,
  };
  console.log(reserva);
  reservas.push(reserva);
};
crearReserva('LH123', 2);
crearReserva('LH123', 5);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const juan = {
  name: 'Juanka Royano',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Check in');
  } else {
    console.log('Wrong passport');
  }
};

// console.log(flight);
// console.log(juan);
// checkIn(flight, juan);

// Is the same as doing...
// const flightNum = flight;
// const passenger = juan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(juan);
checkIn(flight, juan);
console.log(flight, juan);

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-oder function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('🖐');
// };
// document.body
//   .addEventListener('click', high5)
//   ['Juan', 'Anna', 'Leo'].forEach(high5);
