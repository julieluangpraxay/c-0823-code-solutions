# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>
- How do you declare and access props in a component?
  Props are declared as attributes when rendering a component.
  Access props in a component using the props object or destructuring.

  To pass props from a parent component to a child component, you include them as attributes when rendering the child component.

  For example:
  // ParentComponent.js
  import React from ‘react’;
  import ChildComponent from ‘./ChildComponent’;

function ParentComponent() {
const name = “John”;
const age = 30;

return (
<ChildComponent name={name} age={age} />
);
}

export default ParentComponent;

- How do you pass props to a component?
  Pass props by including them as attributes when rendering the component in a parent component.
- How do you write JavaScript expressions in JSX?
  Using curly braces to embed dynamic values or JS code.

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
