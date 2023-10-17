import takeAChance from './take-a-chance.js';

const promise = takeAChance('Julie');

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
