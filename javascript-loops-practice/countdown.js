/* exported countdown */
function countdown(number) {
  const newArray = [];
  for (let i = number; i >= 0; i--) {
    newArray.push(i);
  }
  return newArray;
}
