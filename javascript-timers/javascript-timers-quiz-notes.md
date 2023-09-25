# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  using setTimeout() method

- How can you set up a function to be called repeatedly without using a loop?
  setInterval() is a JavaScript function that allows you to execute a function repeatedly at a specified interval (in milliseconds). It returns a unique ID that can be used to clear the interval with the clearInterval() method. It can be useful for tasks such as periodically updating a page or creating animations.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  default is 0 if not specified.

- What do `setTimeout()` and `setInterval()` return?
  The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout()

The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval()

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
