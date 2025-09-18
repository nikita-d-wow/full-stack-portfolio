/* eslint-env node */

//destructuring
//Practice with ES6+ object and array destructuring

//Object destructuring
const person = { firstName: 'Daniel', lastName: 'Doe', age: 28 };

//Extract specific properties
const { firstName, age } = person;
console.log(`Name: ${firstName}, Age: ${age}`);

//Array destructuring
const colors = ['red', 'bule', 'yellow', 'pink', 'magenta'];

// Extract specific elements
const [primary, tertiary] = colors;
console.log(`Primary: ${primary}, Tertiary ${tertiary}`);

//Nested destructuring
const user = {
  id: 101,
  profile: {
    username: 'ava',
    email: 'ava@gmail.com',
  },
};

const {
  profile: { username, email },
} = user;
console.log(`Username: ${username}, Email: ${email}`);
