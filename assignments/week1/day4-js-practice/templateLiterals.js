/* eslint-env node */

//templateLiterals
//Practice with ES6+ template literals for string formatting

const product = 'Laptop';
const price = 85000;
const discount = 0.2;

//1. Basic string interpolation
const message = `The product ${product} costs Rs.${price}.`;
console.log(message);

//2. Muilti-line Strings
const multiLine = `
Product: ${product}
Price: Rs.${price}
Discount: ${discount * 100}%
`;

console.log(multiLine);

//3. Expression evaluation inside template literals
const finalPrice = `Final Price after discount: ${price - price * discount}`;
console.log(finalPrice);
