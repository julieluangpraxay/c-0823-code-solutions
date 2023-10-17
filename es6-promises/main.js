import takeAChance from './take-a-chance.js';

const myName = 'Julie';

takeAChance(myName).then((resolve) => {
  console.log(resolve);
});

takeAChance(myName).then((reject) => {
  console.log(reject);
});
