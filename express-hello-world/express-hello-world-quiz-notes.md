# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

- What is Express middleware useful for?
  Execute any code.
  Make changes to the request and the response objects.
  End the request-response cycle.
  Call the next middleware function in the stack.
  Middleware can process request objects multiple times before the server works for that request.

- How do you mount a middleware with an Express application?
  , you can use middleware to perform tasks or modifications on incoming HTTP requests or outgoing responses. Middleware functions are essentially functions that have access to the request and response objects, and they can either terminate the request-response cycle or pass control to the next middleware function in the stack.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req (request object) and res (response object)

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
