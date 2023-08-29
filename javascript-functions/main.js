function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

console.log('Result of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  const greeting = 'Hey,' + ' ' + name;
  return greeting;
}
console.log('Result of greet:', greet('Julie'));

function getArea(width, height) {
  const rectangle = width * height;
  return rectangle;
}
console.log('Result of getArea:', getArea(17, 42));

const person = {
  firstName: 'Julie',
  lastName: 'Luangpraxay',
};

function getFirstName(person) {
  return person.firstName;
}
console.log('Result of getFirstName(person):', getFirstName(person));

const array = ['propane', 'and', 'propane', 'accessories'];

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
console.log('Result of getLastElement(array):', getLastElement(array));
