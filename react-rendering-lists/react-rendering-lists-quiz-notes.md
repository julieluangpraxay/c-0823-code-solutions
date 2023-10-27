# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  if data is in array, create components dynamically based in data.

  You'd want to dynamically create a list of React components when you need to render a variable number of components based on data, conditions, or user interactions. This approach makes your code more efficient, maintainable, and flexible.

- Why is it important for React components to be data-driven?
  data-driven components in React help you build more reusable, scalable, and maintainable applications by separating the presentation layer from the data layer. This separation is a fundamental principle of React and modern frontend development practices.

- Where in the component code would a list of React components typically be built?
  built in JSX inside {} using array.map()

- What `Array` method is commonly used to create a list of React components?
  In React, you can use the map method to iterate over an array of data, transform each item in the array into a React component, and return an array of React elements. This is a common and efficient way to generate a list of components.

- Why do components in a list need to have unique keys?
  providing unique keys for components in a list is a best practice in React. These keys play a vital role in optimizing updates, preserving component state, and maintaining component identity, which all contribute to better performance and a more reliable user interface.

- What is the best value to use as a "key" prop when rendering lists?
  The best value to use as a "key" prop when rendering lists in React is a unique and stable identifier associated with each item to enable efficient updates and preserve component state aka
  UNIQUE KEY/ID

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
