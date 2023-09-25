const $hello = document.querySelector('h1');

setTimeout(() => {
  $hello.textContent = 'Hello There';
}, 2000);
