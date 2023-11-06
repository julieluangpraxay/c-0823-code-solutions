# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  useEffect allows you to specify code that should be executed when the component is mounted or when certain dependencies change.

  useEffect(() => {
  // Data fetching code goes here

  // Update the state with the fetched data
  setData(fetchedData);

  return () => {
  // Cleanup code (e.g., cancel any ongoing requests)
  };
  }, []);

- What browser function can be used to make HTTP requests to a server in React?
  using Fetch()

- How do you use `useEffect` to load component data just once when the component mounts?
  To use useEffect to load component data just once when the component mounts, you can pass an empty dependency array ([]) as the second argument to useEffect. This ensures that the effect only runs once when the component is initially mounted

- How do you use `useEffect` to load component data every time the data key changes?
  To use useEffect to load component data every time a specific dependency (e.g., a data key) changes, you should include that dependency in the dependency array of useEffect. This ensures that the effect is triggered whenever the specified dependency's value changes.

  EXAMPLE:
  import React, { useEffect, useState } from 'react';

async function fetchData(dataKey) {
// Simulated data fetching based on the dataKey
return new Promise((resolve) => {
setTimeout(() => {
resolve(`Data loaded for key: ${dataKey}`);
}, 2000);
});
}

function MyComponent() {
const [data, setData] = useState(null);
const [dataKey, setDataKey] = useState('initialData');

useEffect(() => {
const loadData = async () => {
try {
const responseData = await fetchData(dataKey);
setData(responseData);
} catch (error) {
// Handle errors
console.error(error);
}
};

    loadData();

}, [dataKey]);

const handleDataChange = (newDataKey) => {
setDataKey(newDataKey);
};

return (

<div>
<div>
<button onClick={() => handleDataChange('dataKey1')}>Load Data Key 1</button>
<button onClick={() => handleDataChange('dataKey2')}>Load Data Key 2</button>
</div>
{data ? (
<div>
{/_ Display data here _/}
{data}
</div>
) : (
<p>Loading...</p>
)}
</div>
);
}

export default MyComponent;

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  GraphQL: Consider using GraphQL, a query language for your API, which allows clients to request only the data they need. GraphQL provides more flexibility and efficiency compared to traditional REST APIs, reducing over-fetching and under-fetching of data.

Redux or Mobx: Use state management libraries like Redux or Mobx to centralize and manage the app's data, ensuring that it's easily accessible and consistent throughout your application. These libraries are especially useful when dealing with complex and interconnected data.

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
