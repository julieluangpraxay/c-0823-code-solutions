const num1 = 1;
const num2 = 2;
const num3 = 3;

const maximumValue = num1 + num2 + num3;
console.log('Maximum Value:', Math.max(maximumValue));

const heros = ['thor', 'black widow', 'spider man', 'wanda'];

let randomNumber = Math.random();
randomNumber = heros.length * randomNumber;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);
const randomHero = heros[randomIndex];
console.log('Random Hero:', randomHero);

const library = [
  {
    title: 'Book Title 1',
    author: 'Author 1',
  },
  {
    title2: 'Book Title 2',
    author2: 'Author 2',
  },
  {
    title3: 'Book Title 3',
    author3: 'Author 3',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Julie Luangpraxay';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
