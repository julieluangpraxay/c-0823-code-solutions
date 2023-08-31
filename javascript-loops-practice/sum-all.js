/* exported sumAll */
function sumAll(numbers) {
  let currentCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    currentCount += numbers[i];
  }
  return currentCount;
}
