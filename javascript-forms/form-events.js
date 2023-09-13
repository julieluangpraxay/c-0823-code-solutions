function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.name:', event.target.value);
}

const $nameInput = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userInput = document.querySelector('#user-message');

$nameInput.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userInput.addEventListener('input', handleInput);
