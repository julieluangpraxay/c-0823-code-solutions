# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging and checking if your code is running properly.

- What is the purpose of events and event handling?
  Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addeventlistener method of the EventTarget interface

- What is a callback function?
  a function that gets passed in as an argument

- What object is passed into an event listener callback when the event fires?
  the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The EventTarget interface is implemented by objects that can receive events and may have listeners for them.
  Check on MDN to get more information about it

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  When we just do handleClick we're passing a reference to the function, so addEventListener will call it for us when the event occurs, but doing handleClick() we are directly calling the function.

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
