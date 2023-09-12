const $hotbutton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

let counter = 0;

$hotbutton.addEventListener('click', function (event) {
  counter++;
  $clickCount.textContent = 'Clicks: ' + counter;

  if (counter < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotbutton.className = 'hot-button hot';
  } else if (counter > 16) {
    $hotbutton.className = 'hot-button nuclear';
  }
});
