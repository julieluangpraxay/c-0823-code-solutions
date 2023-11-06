# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  The fetch() method returns a Promise that resolves to a Response object. 😀 No need for XMLHttpRequest anymore.

  fetch(resource, options)

- What is the default request method used by `fetch()`?
  The default method of fetch() is GET.
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

fetch('https://example.com/', { method: 'CONNECT', mode: 'no-cors', }); If the request method is 'GET' or 'HEAD' and the body is non-null or not undefined. fetch('https://example.com/', { method: 'GET', body: new FormData(), });

- How does `fetch` report errors?
  it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing

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
