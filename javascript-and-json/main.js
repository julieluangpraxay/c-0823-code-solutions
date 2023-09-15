const book = [
  {
    isbn: '978-0984782857',
    title:
      'Cracking the Coding Interview: 189 Programming Questions and Solutions ',
    author: ' Gayle Laakmann McDowell',
  },
  {
    isbn2: '978-1951204006',
    title2:
      'A Programmers Guide to Computer Science: A virtual degree for the self-taught developer',
    author2: ' Dr. William M Springer II',
  },
  {
    isbn3: '978-1465482211',
    title3:
      'Beginners Step-by-Step Coding Course: Learn Computer Programming the Easy Way',
    author3: 'DK',
  },
];

console.log('book:', book);
console.log('typeof book:', typeof book);

const bookToStringify = JSON.stringify(book);
console.log('bookToStringify:', bookToStringify);
console.log('typeof bookToStringify:', typeof bookToStringify);

const string = '{"id": 12345, "name": "julie"}';
const stringParsed = JSON.parse(string);
console.log('stringParsed', stringParsed);
console.log('typeof stringParsed:', typeof stringParsed);
