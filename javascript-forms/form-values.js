const $form = document.querySelector('#contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = $form.elements.name.value;
  const email = $form.elements.email.value;
  const message = $form.elements.message.value;
  console.log(name);
  const data = {
    name,
    email,
    message,
  };
  console.log(data);
});
