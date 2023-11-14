// Ensure correct import statement at the beginning of your test file
import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
  it('no even numbers', () => {
    const numbers: number[] = [1, 3, 5, 7];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('ToDollars', () => {
  it('turns the number into dollars with two decimals', () => {
    const number = 5.0;
    const result = toDollars(number);
    expect(result).toEqual('$5.00');
  });
  it('turns 0 into dollars with two decimals after', () => {
    const number = 0;
    const result = toDollars(number);
    expect(result).toEqual('$0.00');
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor.', () => {
    const numbers = [10, 20, 30, 40];
    const divisor = 1;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([10, 20, 30, 40]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number.', () => {
    const numbersObject = {
      key1: 2,
      key2: 'string',
      key3: 3.5,
      key4: null,
      key5: '5',
    };
    const multiplier = 2;
    const result = multiplyBy(numbersObject, multiplier);
    expect(result).toEqual({
      key1: 4,
      key2: 'string',
      key3: 7,
      key4: null,
      key5: '5',
    });
  });
});
