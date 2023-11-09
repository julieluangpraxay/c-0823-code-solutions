# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  The purpose of React "context" is to provide a mechanism for sharing data, state, or configuration across components in a React application without the need for explicit prop drilling.

- What values can be stored in context?
  The value can be anything - a string, an object, a function, etc. Any component that needs the data stored in Context can access it through the Consumer component.

- How do you create context and make it available to the components?
  Call createContext outside any components to create one or more contexts
- How do you access the context values?
  through props with the help of useContext method in React.
- When would you use context? (in addition to the best answer: "rarely")
  Use cases for context
  Theming: If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app, and use that context in components that need to adjust their visual look.

  Current account: Many components might need to know the currently logged in user. Putting it in context makes it convenient to read it anywhere in the tree. Some apps also let you operate multiple accounts at the same time (e.g. to leave a comment as a different user). In those cases, it can be convenient to wrap a part of the UI into a nested provider with a different current account value.

  Routing: Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not. If you build your own router, you might want to do it too.

  Managing state: As your app grows, you might end up with a lot of state closer to the top of your app. Many distant components below may want to change it. It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.

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
