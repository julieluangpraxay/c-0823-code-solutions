# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?

import { Component } from 'react';

class Greeting extends Component {
render() {
return <h1>Hello, {this.props.name}!</h1>;
}
}

or import React from 'react';

class MyComponent extends React.Component {
render() {
return (

<div>
<h1>Hello, React!</h1>
<p>This is a simple React component.</p>
</div>
);
}
}

export default MyComponent;

- How do you use JSX in a React component?

the render method defines how the component should look using JSX. The JSX code describes the structure and content of the component. It's like creating a small piece of HTML inside your JavaScript.

class component:
class MyComponent extends React.Component {
render() {
// JSX code goes here
return (

  <div>
  <h1>Hello, JSX!</h1>
  <p>This is a React component with JSX.</p>
  </div>
  );
  }
  }

function component:

function MyComponent() {
// JSX code goes here
return (

<div>
<h1>Hello, JSX!</h1>
<p>This is a React component with JSX.</p>
</div>
);
}

import React from 'react';

class MyComponent extends React.Component {
render() {
return (

<div>
<h1>Hello, JSX!</h1>
<p>This is a React component with JSX.</p>
</div>
);
}
}

export default MyComponent;

- How do you declare the props a React component needs?

  If you're using a class component, you can declare the props the component needs by defining a constructor method and using the this.props object to access them. You also specify the prop types using propTypes.

import React from 'react';

// Declare a function component and specify its props in the parameter list
function MyComponent(props) {
// Access the props directly from the "props" object
return (

<div>
<h1>Hello, {props.name}!</h1>
<p>{props.description}</p>
</div>
);
}

export default MyComponent;

Function Component:

If you're using a function component, you can declare props directly as parameters of your function component.

- How do you pass props to a React component?
  you pass props to a component by providing them as attributes when you use that component in your application
  example: <MyComponent name="React" description="A JavaScript library for building user interfaces." />

accessing the prop:
class MyComponent extends React.Component {
render() {
return (

<div>
<h1>Hello, {this.props.name}!</h1>
<p>{this.props.description}</p>
</div>
);
}
}

- How do you include JavaScript expressions in JSX?
  You can insert JavaScript variables and expressions directly within your JSX code by wrapping them in curly braces.
  example:
  const username = "Alice";
  const greeting = `Hello, ${username}!`;

return (

  <div>
    <h1>{greeting}</h1>
  </div>
);

- What are React hooks and what are the three "Rules of Hooks"?
  Only Call Hooks at the Top Level:
  Hooks must be called in the top level of your function components or in custom hooks. You should not call hooks inside loops, conditions, or nested functions. This ensures that React can maintain the order and consistency of hooks between renders.

  Only Call Hooks from React Functions:
  Hooks can only be called from within function components or custom hooks. Do not call them from regular JavaScript functions, event handlers, or any place that is not a React function. This ensures that React can manage the state and updates correctly.

  Use the Same Order of Hooks in Every Render:
  Hooks should always be called in the same order within your component. This is because React relies on the order of hooks to correctly associate state and effects between renders. Changing the order of hooks can lead to unexpected behavior.

- How do you manage state in a React component?
  In React, you can manage state in a component using the useState hook for function components or by defining state in the constructor and using this.state for class components.

  const [state, setState] = useState(initialState);

- How do you handle events in React?
  You can handle events by passing a function as a prop to an element like <button> . Event handlers must be passed, not called! onClick={handleClick} , not onClick={handleClick()} . You can define an event handler function separately or inline.

  function handleClick() {
  alert("Button Clicked!");
  }
  Attach Event Handlers to Elements:
  Next, you need to attach the event handlers to the elements in your JSX by using event attributes. The naming convention is based on the event you want to handle, such as onClick for a click event, onSubmit for a form submission event, etc.
  <button onClick={handleClick}>Click Me</button>

- How do you let a parent component know that an event happened?
  In React, you can communicate from a child component to a parent component when an event or action occurs by passing functions as props from the parent component to the child component

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
