# node-fs-readfile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a directory?
  directory is a file system cataloging structure which contains references to other computer files, and possibly other directories.
- What is a relative file path?
  Relative path is defined as the path related to the present working directly(pwd). It starts at your current directory and never starts with a /.
  - What is an absolute file path?
    An absolute path describes the location from the root directory
- What module does Node.js include for manipulating the file system?
  js file system: To handle file operations like creating, reading, deleting, etc., Node. js provides an inbuilt module called FS (File System).
- What method is available in the `node:fs` module for reading data from a file?
  The fs.readFile() method is used to read files on your computer.

## Notes

All student notes should be written here.

- create array of promises
  const promises = filenames.map(
  (filename) => readFile(filenames[i], 'utf8')
  );
  const contents = Promise.all(promises);
  console.log(promises);

  each promise reads the file

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
