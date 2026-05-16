console.log('Hello World');

// Data Types

// Primitive Types
// String
const name = 'John';
console.log(name);
console.log(typeof name);

// Number
const age = 30;
console.log(age);
console.log(typeof age);

// Boolean
const isMarried = true;
console.log(isMarried);
console.log(typeof isMarried);

// Null
const car = null;
console.log(car);
console.log(typeof car); // bug

// Let vs const
// const has to be initialized when declared and cannot be changed
const vehicleName = 'Car';
console.log(vehicleName);

// let can be initialized later and can be changed
let restaurantName;
console.log(restaurantName); // undefined

restaurantName = 'McDonalds';
console.log(restaurantName);

// Undefined
let test;
console.log(test);
console.log(typeof test);

const test2 = undefined;
console.log(test2);

// // Reference Types
// Object
const person = {
  name: 'John',
  age: 30,
  isMarried: true,
  car: null,
  test: undefined,
};

console.log(person);
console.log(typeof person);

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person.car);
console.log(person.test);

// Array
const numbers = [1, 'John', 3, 4, 5];
numbers[5] = 6;
console.log(numbers);
console.log(typeof numbers);

console.log(numbers[0]);

// Primitive Types vs Reference Types
const person1 = {
  name: 'John',
  age: 30,
};

person1.isMarried = true;

console.log('person1', person1);

// // Not allowed
// person1 = {};

const person2 = person1;

console.log('person2', person2);

person2.name = 'Jane';

console.log('person1', person1);
console.log('person2', person2);

alert('Hello World');
const name = prompt('Enter your name:');
console.log(name);

Operators

// Arithmetic Operators
// +, -, *, /, %

console.log(1 + 1);
console.log((1 + 1) * 2);

console.log(5 / 2);

console.log(12 % 10);

console.log('Hello' + ' ' + 'World');

// Not allowed
console.log('Hello World' / 'World');

console.log(1 === 1);
console.log(1 === 2);

console.log(1 > 2);
console.log(1 < 2);

console.log(1 >= 1);

function logHello() {
  console.log('Hello World');
}

logHello();

function doubleNumber(num) {
  const result = num * 2;
  return result;
}

const result = doubleNumber(10);
console.log(result);
