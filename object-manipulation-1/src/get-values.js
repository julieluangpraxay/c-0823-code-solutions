/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}
