# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  () => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
statements
}

param => {
statements
}

(param1, paramN) => {
statements
}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

The parenthesis are returning a single value, the curly braces are executing multiple lines of code.

- When using _concise body syntax_, how do you return an object literal?
  There’s one more syntax nuance to know about: wrap the function body in parentheses when you want to return an object literal expression.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    callback function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => {
    console.log(`4y = ${4 * y}`);
    }
  - How many arguments does the arrow function take?
    one
  - What value does it return?
    it does not return anything because we arent returning anything. if we had consicse body syntax then it will.
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    a call back function
  - When does the arrow function's code get executed?
    when the bar function gets called

- How does the value of `this` differ between standard functions and arrow functions?
  arrow functions doesnt have a this binding.
  this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
