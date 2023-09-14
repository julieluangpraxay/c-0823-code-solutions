const $tasklist = document.querySelector('.task-list');

$tasklist.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const button = event.target.closest('.task-list-item');
    button.remove();
    console.log(button);
  }
});
