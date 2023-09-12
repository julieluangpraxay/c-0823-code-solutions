const $openModal = document.querySelector('.open-modal');
const $popup = document.querySelector('.popup');
const $grayBackground = document.querySelector('.gray-background');

$openModal.addEventListener('click', function () {
  $popup.classList.remove('hidden');
  $grayBackground.classList.remove('hidden');
});

const $noButton = document.querySelector('.no-button');

$noButton.addEventListener('click', function () {
  $popup.classList.add('hidden');
  $grayBackground.classList.add('hidden');
});
