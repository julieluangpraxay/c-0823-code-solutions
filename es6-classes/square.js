/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width);
    this.width = width;
    this.area = this.width * this.width;
    this.perimeter = this.width * 4;
  }

  describe() {
    return `This area is ${this.area} and the perimeter is ${this.perimeter} and the width is ${this.width}.`;
  }
}

const mySquare = new Square(95);
console.log(mySquare.describe());
