/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `This area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}

const theShape = new Shape(10, 100);
console.log(theShape.describe());
