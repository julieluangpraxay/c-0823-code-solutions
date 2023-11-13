# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?
  Unit tests are a type of software testing where individual units or components of a software application are tested in isolation to ensure they work as intended.

- Why is it important to write unit tests?
  Writing unit tests is important because it helps catch and prevent bugs early, ensures code quality, and provides a safety net for making changes and improvements with confidence.

- What code should be tested with a unit test? What code is not well suited for unit tests?
  Unit tests are best suited for testing individual units of code, such as functions, methods, or small components, where the focus is on isolated and specific functionality;

  Code that heavily relies on external dependencies, involves complex interactions with the user interface, or lacks modularity and testability may be less well-suited for unit tests.

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is a popular JavaScript testing framework developed by Facebook. It is commonly used for writing unit tests in JavaScript and TypeScript projects, providing a testing environment, assertion utilities, mocking capabilities, and support for various testing strategies such as snapshot testing and code coverage analysis.

Mocha:

Mocha is a versatile testing framework that supports both synchronous and asynchronous testing. It is often used in conjunction with assertion libraries like Chai for expressive and readable tests.
Chai:

Chai is an assertion library commonly paired with Mocha or other testing frameworks. It provides different styles of assertions, including BDD (Behavior-Driven Development) and TDD (Test-Driven Development).
Jasmine:

Jasmine is a behavior-driven testing framework that aims to be easy to set up and use. It includes its own assertion library and a test runner, making it a self-contained solution for testing JavaScript code.
Enzyme:

Enzyme is a testing utility for React applications. It is often used with testing frameworks like Jest or Mocha to write unit and integration tests for React components.
Cypress:

Cypress is an end-to-end testing framework that allows for testing web applications by interacting with them in the browser. It provides a powerful and easy-to-use API for writing functional tests.
Karma:

Karma is a test runner that enables the execution of tests in multiple real browsers. It is often used in combination with other testing frameworks, such as Jasmine or Mocha, to facilitate cross-browser testing.
AVA:

AVA is a minimalistic testing framework with a focus on speed and parallel test execution. It is designed to be simple and easy to use while providing efficient test runs.
Sinon:

Sinon is a library for creating spies, stubs, and mocks in JavaScript tests. It is often used in conjunction with testing frameworks like Mocha or Jasmine to facilitate behavior verification and mocking.
Puppeteer:

Puppeteer is a Node library that provides a high-level API for automating headless browsers, primarily used for end-to-end testing and browser automation.
Jest-Enzyme:

Jest-Enzyme is an integration library that enhances Jest's capabilities when working with React components. It combines Jest and Enzyme to provide a more comprehensive testing solution for React applications.

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
