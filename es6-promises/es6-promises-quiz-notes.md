# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  he Event Queue model is part of the event-driven, non-blocking architecture of the language. It's how JavaScript handles asynchronous operations, including events like user interactions and I/O operations (e.g., reading files or making HTTP requests).

This model allows JavaScript to be non-blocking, meaning it can efficiently handle multiple tasks simultaneously without freezing the entire application. It ensures that time-consuming operations, like fetching data from a server or waiting for a file to load, don't block the rest of the program from running.

- What are the three states a Promise can be in?
  pending: the promise is still in the works.
  fulfilled: the promise resolves successfully and returns a value.
  rejected: the promise fails with an error.

- How do you handle the fulfillment of a Promise?
  Promises start off as “pending” and stay that way until they are either “fulfilled” (also commonly called “resolved”) or “rejected.” To handle these two states, we use a . then() for fulfilled promises, and a . catch() for rejected promises.

- How do you handle the rejection of a Promise?
  To handle a promise rejection, you will use the . catch() handler method or add a second function to the . then() handler method. This will return "Failure: The promise has failed!" because that is the reject() function's message (meaning the error message declared in the Promise)

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
