/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('isUnderFive:', isUnderFive(2));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('isEven:', isEven(3));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('startsWithJ:', startsWithJ('Julie'));

const person = {
  name: 'Julie',
  age: 27,
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrink(person):', isOldEnoughToDrink(person));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrink:', isOldEnoughToDrink(person));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(person));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('pH level is:', categorizeAcidity(11));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log('introduceWarnerBro:', introduceWarnerBro('dot'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'The Dark Knight';
    case 'comedy':
      return 'Superbad';
    case 'horror':
      return 'Get Out';
    case 'drama':
      return 'The Shawshank Redemption';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Blade Runner 2049';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log('recommendMovie:', recommendMovie('action'));
