/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, 4 * width);
    this.width = width;
  }

  describe() {
    return `${super.describe()} and the width is ${this.width}.`;
  }
}

const mySquare = new Square(95);
console.log(mySquare.describe());
