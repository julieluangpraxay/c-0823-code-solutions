# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?

controlled ur in charge
uncontrolled the dom is in charge

Controlled components in React manage the value of form elements through React state and event handlers, providing React with direct control over the element's behavior and making it easier to implement features like validation and synchronization.
Uncontrolled components rely on the DOM to manage form element values, often used in cases where you need to integrate with non-React code or libraries or when managing React state for each form element becomes impractical.

- What are some advantages of using uncontrolled components?
  when you need to integrate React with non-React code, as they rely on the DOM for state management and provide more flexibility in such scenarios.

- What are some advantages of using controlled components?
  Controlled components offer advantages in terms of precise state management, enabling features like validation, synchronization between form elements, and predictable React-centric behavior for form elements.

- Which style do you prefer?
  controlled

- What two props must you pass to an input for it to be "controlled"?
  value: The value prop is used to set the initial value of the input element and to control its value over time. You bind this prop to a piece of state in your React component.

  onChange: The onChange event handler is used to capture user input and update the state in your component when the input value changes. It is called whenever the user types in the input field, allowing you to keep the state and input element in sync.

- What are some popular npm packages for creating forms in React?
  Formik: Formik is a widely used and highly regarded library for building forms in React. It simplifies form management, handling validation, error messages, and form submission.

  React Hook Form: React Hook Form is another popular library that leverages React hooks for building forms. It offers a simple and performant way to manage form state and validation.

  Redux Form: Redux Form is an integration of React and Redux for form management. It's a powerful solution if you're already using Redux for state management in your application.

  Final Form: Final Form is designed for complex, dynamic forms. It offers a simple API, support for validation, and excellent performance.

  React-Select: While not a complete form library, React-Select is popular for creating custom, flexible dropdown/select inputs in React forms.

  Ant Design: If you want to use a complete UI library for React forms, Ant Design provides a wide range of form components, including input fields, checkboxes, and more.

  Material-UI: Similar to Ant Design, Material-UI offers a complete set of components, including form elements, with a Material Design aesthetic.

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
