# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  static

- How does setting `position: relative` on an element affect document flow?
  elements that are relatively positioned can move around while still remaining in the regular document flow.

- How does setting `position: relative` on an element affect where it appears on the page?
  Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

- How does setting `position: absolute` on an element affect document flow?
  Absolute-positioned elements are completely taken out of the regular flow of the web page.

  An absolutely positioned element no longer exists in the normal document flow. Instead, it sits on its own layer separate from everything else. This is very useful: it means that we can create isolated UI features that don't interfere with the layout of other elements on the page. For example, popup information boxes, control menus, rollover panels, UI features that can be dragged and dropped anywhere on the page, and so on.

- How does setting `position: absolute` on an element affect where it appears on the page?
  based on the position of their ancestor
- How do you constrain an absolutely positioned element to a containing block?
  The containing block is the last positioned element.
- What are the four box offset properties?
  top,right,bottom,left

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
