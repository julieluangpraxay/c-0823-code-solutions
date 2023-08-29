const student = {
  firstName: 'Julie',
  lastName: 'Luangpraxay',
  age: 27,
};

const fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Social Media Specialist';
console.log('student.livesInIrvine:', student.livesInIrvine);

console.log('student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'McLaren',
  model: '720S',
  year: 2022,
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = true;
console.log('vehical["color"]', vehicle['color']);
console.log('vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Ahri',
  type: 'Pomerainian',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
