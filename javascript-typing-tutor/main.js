const $typedLetter = document.querySelectorAll('span');

let i = 0;

document.addEventListener('keydown', function (event) {
  console.log($typedLetter[i]);
  if ($typedLetter[i].textContent === event.key) {
    $typedLetter[i].className = 'correct';
    i++;
    $typedLetter[i].classList.remove('underline');
    $typedLetter[i].classList.add('underline');
  } else {
    $typedLetter[i].className = 'wrong';
    $typedLetter[i].classList.add('underline');
  }
});
