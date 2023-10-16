# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
- What is an "event handler"? Which component declares the handler?
  a method that is capable of handling an event.
  So, in React, you declare event handlers within the component where the interaction takes place.

- How do you pass an event handler to a React component?

You pass an event handler to a React component by defining the handler in the parent component, passing it as a prop to the child component, and then using it as needed within the child component.

- What is the naming convention for event handlers?
  In React, the naming convention for event handlers typically follows a pattern where the handler's name is composed of the word "handle" followed by the name of the event or action, in camelCase. Here are some common examples:

Button Click Handler:

handleClick for a button's click event.
Input Change Handler:

handleChange for an input field's change event.
Form Submission Handler:

handleSubmit for a form submission event.

- What is an "event handler prop"? Which component declares the prop?
  An "event handler prop" is a prop passed from a parent component to a child component in React that represents a function or callback. This function is intended to handle a specific event or action, such as a button click, form submission, or input change. Event handler props are typically used to communicate between components and trigger actions in response to user interactions.

  The component that declares the event handler prop is the parent component. The parent component defines the event handler function and passes it as a prop to the child component, which can then use this prop as an event handler for a specific element or interaction within the child component.

- What are some custom event handler props a component may wish to define?
  <CustomComponent onCustomEvent={handleCustomEvent} />

- What is the naming convention for custom event handler props?
  Form Submission Handler:

onSubmit for handling form submission events.
Item Selection Handler:

onSelect for handling item selection events.
Modal Close Handler:

onClose for handling modal or dialog close events.
Input Change Handler:

onInputChange for handling input change events.
Mouse Hover Handler:

onHover for handling mouse hover events.
Custom Event Handler:

onCustomEvent for handling custom events specific to your component.

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
