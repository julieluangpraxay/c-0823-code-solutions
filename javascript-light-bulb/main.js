const $toggleButton = document.querySelector('.light');
const $background = document.querySelector('.background');

$toggleButton.addEventListener('click', function (event) {
  if (
    $toggleButton.className === 'light' &&
    $background.className === 'background'
  ) {
    $toggleButton.className = 'dark';
    $background.className = 'dark-background';
  } else {
    $toggleButton.className = 'light';
    $background.className = 'background';
  }
});
