# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  JavaScript variables have only two scopes.
  Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.
  Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript closures allow functions to "remember" variables from their surrounding scope even after the outer function has finished executing.

- What values does a closure contain?
  a closure contains the function itself and the lexical environment in which it was created, which includes any variables and their values from the surrounding scope, enabling the function to retain access to and "remember" those values.

- When is a closure created?
  A closure is created when a function is defined within another function, and the inner function references variables from the outer function's scope, allowing it to "close over" those variables and maintain access to them even after the outer function has completed its execution.

<!-- function outerFunction() {
  var outerVariable = 10;

  function innerFunction() {
    console.log(outerVariable); // innerFunction "closes over" outerVariable
  }

  return innerFunction;
}

var closureFunction = outerFunction();
closureFunction(); // This will log 10, even though outerFunction has completed.
In this example, innerFunction is defined inside  -->

A closure is created when a function is defined within another function, and the inner function references variables from the outer function's scope, allowing it to "close over" those variables and maintain access to them even after the outer function has completed its execution.

- How can you tell if a function will be created with a closure?
  it will be creating if it accesses anything outside of itself

- In React, what is one important case where you need to know if a closure was created?

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
