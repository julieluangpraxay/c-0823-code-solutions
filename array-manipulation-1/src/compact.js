/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (
      item !== false &&
      item !== null &&
      !Number.isNaN(item) &&
      item !== 0 &&
      item !== undefined &&
      item !== ''
    ) {
      newArray.push(item);
    }
  }
  return newArray;
}
