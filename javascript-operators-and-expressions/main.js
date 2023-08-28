const width = 100;
const height = 53;
const area = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill = 50;
const payment = 75;

const change = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes = 90;
const midterm = 99;
const final = 100;

const grade = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Julie';
const lastName = 'Luangpraxay';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullname:', typeof fullName);

const pH = 5;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount = 300;
const isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);

let motto = fullName;
motto += ' ' + 'is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
