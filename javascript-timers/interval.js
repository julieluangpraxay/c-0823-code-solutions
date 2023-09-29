const $countdown = document.querySelector('h1');
let counter = 4;
let countdownId = null;

function countDown() {
  counter--;
  if (counter > 0) {
    $countdown.textContent = counter;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countDown, 1000);
