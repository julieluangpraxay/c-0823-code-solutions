const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};

const { title, author, libraryID } = book1;

console.log(
  `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`
);

const book2 = {
  title2: 'Les Fleurs du mal',
  author2: 'Charles Baudelaire',
  libraryID2: 2345,
};

const { title2, author2, libraryID2 } = book2;
console.log(
  `The title of the book is ${title2}, the author is ${author2}, and the library id is ${libraryID2}`
);

const library = [
  {
    title3: 'The Road Ahead',
    author3: 'Bill Gates',
    libraryID3: 1254,
  },
  {
    title4: 'Walter Isaacson',
    author4: 'Steve Jobs',
    libraryID4: 4264,
  },
  {
    title5: 'Mockingjay: The Final Book of The Hunger Games',
    author5: 'Suzanne Collins',
    libraryID5: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];

const [book3, book4, book5] = library;

console.log('book3:', book3, 'book4:', book4, 'book5:', book5);

const [, , , book6] = library;

console.log('book6:', book6);
