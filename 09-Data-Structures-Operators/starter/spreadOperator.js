const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(1, 2, ...arr); // = (1, 2, 7, 8, 9);

// New Restaurant
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

const newMenu = [...restaurant.mainMenu, 'Serranito']; // Añade a la nueva variable
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings , maps, sets. NOT objects
const str = 'Juan';
const letters = [...str, ' ', '`S.', 'the best.'];
console.log(letters);
console.log(...str);
console.log('j', 'o');
// console.log(`${...str} Royano`) // ERROR doesnt work

// Real World example
const ingredients = [
  //   prompt('Lets make food!! Ingredient 1?'),
  //   prompt('Ingredient 2??'),
  //   prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderFood(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderFood(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 2020,
  ...restaurant,
  founder: 'Herr Royano',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurante Hispalis';
console.log(restaurantCopy.name);
console.log(restaurant.name);
