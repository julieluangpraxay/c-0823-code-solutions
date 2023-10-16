# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  The process object in Node.js is a global object that can be accessed inside any module without requiring it.

  The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require(). It can also be explicitly accessed using require():

const process = require('process');
Process events#
The process object is an instance of EventEmitter.

- How do you access the `process` object in a Node.js program?
  you can console.log(process)

- What is the data type of `process.argv` in Node.js?
  process. argv is a property that holds an array of command-line values provided when the current process was initiated. The first element in the array is the absolute path to the Node, followed by the path to the file that's running and finally any command-line arguments provided when the process was initiated.

- How do you access the command line arguments in a Node.js program?
  const arguments = process.argv;
  console.log(arguments)
  node index.js

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
