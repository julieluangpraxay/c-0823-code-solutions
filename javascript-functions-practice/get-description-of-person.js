/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const description =
    person.name +
    ' ' +
    'is a' +
    ' ' +
    person.occupation +
    ' ' +
    'from' +
    ' ' +
    person.birthPlace +
    '.';
  console.log(description);
  return description;
}
