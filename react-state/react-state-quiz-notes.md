# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  hooks are functions that allow you to "hook into" or use React state and lifecycle features in functional components
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

Only Call Hooks at the Top Level: You should only call hooks at the top level of your functional components, not inside loops, conditions, or nested functions. This ensures that hooks are called in the same order on each render and that their state is preserved correctly.

Valid:

jsx
Copy code
function MyComponent() {
const [count, setCount] = useState(0);
// ...
}

Call Hooks from React Functions: Hooks can only be called from within React functional components, custom hooks, or other React functions. Avoid calling hooks from regular JavaScript functions or outside the scope of React components.
Only Call Hooks Conditionally: You should only call hooks conditionally within your component based on a consistent condition (e.g., within an if statement). This condition should not change between renders, ensuring that hooks are always called in the same order.

- What is the purpose of state in React?
  The purpose of state in React is to store and manage data that can change over time within a component. State allows you to create dynamic, interactive user interfaces by updating and re-rendering components when the stored data changes. State is crucial for managing the internal state of a component, enabling it to respond to user interactions and other events.

- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
  Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

- What two actions happen when you call a `state setter` function?
  A state variable to retain the data between renders.

  A state setter function to update the variable and trigger React to render the component again.

- When does the local `state variable` get updated with the new value?
  when you call the set state function

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
