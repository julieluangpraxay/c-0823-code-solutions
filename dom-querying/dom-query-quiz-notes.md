# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging purposes

- What is a "model"?
  a recreation of something

- Which "document" is being referred to in the phrase Document Object Model?
  any web page/html loaded in the browser that is the entry point into the web page's content

- What is the word "object" referring to in the phrase Document Object Model?
  object that represents objects that make up the dom tree.

- What is a DOM Tree?
  a tree like structure that represents dom elelments, HTML or XML documents

- Give two examples of `document` methods that retrieve a single element from the DOM.
  queryselector
  getelementbyid

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  queryselectorall

- Why might you want to assign the return value of a DOM query to a variable?
  to reuse the variable

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  the browser has to parse all the elements of the html before the js code can access them

- What does `document.querySelector()` take as its argument and what does it return?
  it takes selectors and returns the element that matches the selector

- What does `document.querySelectorAll()` take as its argument and what does it return?
  selectors and returns a non-live nodelist that has one element object for each element that matches at least one of the selectors we specified

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
