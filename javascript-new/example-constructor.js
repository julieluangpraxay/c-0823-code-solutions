function ExampleConstructor() {}
console.log('value of protoype of ExampleConstuctor:', ExampleConstructor);
console.log(
  'typeof prototype of ExampleConstuctor:',
  typeof ExampleConstructor
);

const aExampleConstructor = new ExampleConstructor();
console.log('value of aExampleConstructor:', aExampleConstructor);
console.log(
  'instanceof aExampleConstructor:',
  aExampleConstructor instanceof ExampleConstructor
);
