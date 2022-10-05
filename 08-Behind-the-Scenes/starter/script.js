'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}. born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1986 && birthYear <= 2000) {
      var millenial = true;
      //   Creating NEW variable with same name as outer scopes is variable.
      const firstName = 'Anna';
      const string = `Oh, and you are a millenial, ${firstName}.`;
      console.log(string);

      //   Reassigning outer scope is variable
      output = 'NEW OUTPUT';
    }
    // Si pintas fuera de la function no carga
    console.log(millenial);
    // console.log(string);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Juan Carlos';
calcAge(1986);

// bellow
