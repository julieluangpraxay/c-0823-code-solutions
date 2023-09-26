/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    this.area = Math.PI * this.radius * this.radius;
    this.perimeter = Math.PI + 2 * this.radius * this.radius;
  }

  describe() {
    return `This circle has a radius of ${this.radius} and this area is ${this.area} and this perimeter is ${this.perimeter}.`;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.describe());
