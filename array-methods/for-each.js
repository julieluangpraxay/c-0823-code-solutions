const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element) => console.log('In order:', element));

values.forEach((element, index) => {
  console.log('reverse order:', values[values.length - 1 - index]);
});
