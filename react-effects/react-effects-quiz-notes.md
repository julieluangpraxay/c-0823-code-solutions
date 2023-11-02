# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component gets successfully inserted into the DOM
- What is a React Effect?
  A React effect, typically implemented using the useEffect hook, is a mechanism for managing side effects, such as data fetching, DOM manipulation, and cleanup operations, in functional components.
- When should you use an Effect and when should you not use an Effect?

You should use a React Effect (e.g., useEffect) when you need to manage side effects like data fetching or DOM updates in a React functional component, but you should not use it if there are no side effects to handle or if the side effects can be managed through other means, like component state or props.

- When do Effects run?
  React Effects, implemented using the useEffect hook, run after the initial render and can subsequently run whenever their specified dependencies change.

- What function is used to declare an Effect?
  useEffect(() => {
  // ...
  }, []);

- What are Effect dependencies and how do you declare them?
  you can control when effects run and make sure they respond to changes in specific values

  declare them inside the brackets
  useEffect(() => {
  // Effect code here
  }, [dependency1, dependency2, ...]);

- Why would you want to clean up from an Effect?
  when you want to unmount the component after the new setup code runs with the new props and state, the clean up code gets rid of the old code.

- How do you clean up from an Effect?
  in the return statement within useEffect function
- When does the cleanup function run?
  after the component is mounted , the clean up function will run in the return statement and unmount the component

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
