# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?

  a package manager / npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

- What is a package?
  An npm package is a self-contained collection of JavaScript code and resources that can be easily shared and integrated into projects using the Node Package Manager (npm).

- What are some other popular package managers?
  Yarn and PNPM
- How can you create a `package.json` with `npm`?
  npm init

- What is a dependency and how do you add one to a package?
  a "dependency" refers to an external library or package that your own project relies on to function properly. Dependencies are essential for code reuse and ensuring that your project can work in various environments
- What happens when you add a dependency to a package with `npm`?
  When you add a dependency to a package with npm, the specified package is downloaded and installed, its version is recorded in the package.json file, and its dependencies are also resolved and installed, ensuring a consistent and functional set of packages for your project.

- What is a devDependency and how do you add one to a package?
  A devDependency is a type of dependency in a Node.js project that is needed for development and testing but is not required for the production runtime of the application.

  npm install package-name --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  npm scripts are custom commands defined in the package.json file, allowing developers to automate various project tasks like testing, building, and starting servers.
  They provide consistency, customization, and portability while enhancing project development and build processes.

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
