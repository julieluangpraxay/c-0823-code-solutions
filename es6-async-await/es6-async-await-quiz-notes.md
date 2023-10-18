# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async and await are used in programming to write code that doesn't block the program while waiting for time-consuming tasks, making it more responsive and efficient.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await make asynchronous code look more like regular step-by-step code, while Promise.then and Promise.catch involve more nested, callback-style coding.
- When do you use `async`?

You use the async keyword in programming when you want to define a function that can perform asynchronous operations and return a Promise to manage non-blocking tasks, like I/O operations or network requests.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  you use the await keyword inside an async function when you want to pause the execution of that function until a Promise is resolved. This is typically used when working with asynchronous operations such as making network requests, reading files, or any other task that might take some time to complete.

Outside of an async function: The await keyword can only be used inside a function that is declared as async. Attempting to use it outside of an async function will result in a syntax error.
Synchronous Code: You do not use await for synchronous operations. If a function or operation is already synchronous and doesn't involve Promises or asynchronous behavior, there is no need for await.

- How do you handle errors with `await`?
  You can handle errors when using await by combining it with a try...catch block. This allows you to catch and handle exceptions that might occur when the awaited Promise is rejected
- What do `try`, `catch` and `throw` do? When do you use them?
  TRY block is used in programming to create a protected section of code where exceptions or errors can be monitored and handled.
  It defines a protected area where you can place code that might raise an exception during its execution. The purpose of the try block is to isolate and handle exceptions in a controlled manner.
  CATCH: The catch block is used to catch and handle exceptions that occur in the try block. If an exception is thrown within the try block, the code in the catch block is executed.

  THROW: The throw statement is used to manually throw an exception in your code. You can use it to create custom exceptions or to signal that something unexpected or erroneous has occurred.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  there will be a syntax error and you wont be able to use it correctly
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async and await because its easier to write and read, you wont have to worry about promise.then callback hell.

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
