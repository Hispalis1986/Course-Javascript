'use strict';

// sets
const orderSet = new Set([
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
]);
console.log(orderSet);
console.log(new Set('Juan Carlos'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Gardlic Bread');
orderSet.add('Gardlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear(); This clean the const orderSet

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff); // [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Juan Carlos Royano González').size);
