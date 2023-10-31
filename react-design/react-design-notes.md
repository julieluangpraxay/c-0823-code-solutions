# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?
  Starting from a UI mockup, identify pieces that would make good components
  Determine the UI state that must be held in the components and where that state should live.
  Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them.

- How does data flow in React?
  data is passed between components in a unidirectional way. This means that the components must be composed in a way such that data is passed top-to-bottom — i.e. in one direction, from the parent component down to its children and so on.

- How can children components modify state in their parents?
  by passing the state handle function as a prop of the child component. Whenever we pass any function as a component prop, we can execute it from the child component, even if it is defined in the parent component.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
