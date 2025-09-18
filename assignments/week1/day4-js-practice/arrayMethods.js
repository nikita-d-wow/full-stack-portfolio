/* eslint-env node */
//arraymethods

//Practrice with ES6+ array methods: map, filter, reduce, find, findIndex

//Sample user data

const users = [
  { id: 1, namee: 'Cooper', age: 25 },
  { id: 1, namee: 'Bette', age: 27 },
  { id: 1, namee: 'Uncle Bob', age: 35 },
  { id: 1, namee: 'Billie', age: 20 },
];

//1. map() -> creates a new array of namees
const userNames = users.map((user) => user.namee);
console.log('user Names:', userNames);

//2. filter() -> get users older than 25
const adults = users.filter((user) => user.age > 25);
console.log('Adults (age > 25):', adults);

//3. reduce() -> calculate total age of all users
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log('Total Age:', totalAge);
