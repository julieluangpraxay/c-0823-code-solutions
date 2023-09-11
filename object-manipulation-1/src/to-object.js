/* exported toObject */
function toObject(keyValuePair) {
  const newObject = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  newObject[key] = value;
  return newObject;
}
