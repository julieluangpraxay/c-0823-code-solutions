# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  target property of the event object. it targets a specific event for event delegation

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  so you can listen for a specific event like a button only when its inside a list
- What DOM element property tells you what type of element it is?
  event.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?
  it takes selectors and returns the closest ancestor element or itself that matches the selector inside the method.

- How can you remove an element from the DOM?
  remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding it to its parent element

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
