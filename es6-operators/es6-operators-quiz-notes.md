# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

exp1 && exp2
True only if both exp1 and exp2 are true; otherwise, false.
The && (logical AND) operator indicates whether both operands are true.

exp1 || exp2
True if either exp1 or exp2 is true; false (0) only if both are false.

in JavaScript, they evaluate to the expression values, such as strings and numbers, instead of the boolean values true and false ? This enables you to use the && and || operators in expressions outside of if -clause

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

In short-circuit evaluation, an expression with logical operators ( || and && ) is evaluated from left to right. So, if the condition is met and the rest of the conditions won't affect the already evaluated result, the expression will short-circuit and return that result.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.
  A ternary operator is a single statement, while an if-else is a block of code

- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining ( ?. ) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null , the expression short circuits and evaluates to undefined instead of throwing an error.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread values into an object or array.
  can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list.

- What data types can be spread into an array? Into an object?
- only spread iterables or else it will throw an error
  -in objects, spread anything but might run into errors

- How does spread syntax differ from rest syntax?
  use spread inside object literal of an array and rest syntax when destructuring.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
