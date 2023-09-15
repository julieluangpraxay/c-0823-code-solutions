const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    const dataview = event.target.getAttribute('data-view');
    for (let i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') !== dataview) {
        $view[i].className = 'view hidden';
      } else {
        $view[i].className = 'view';
      }
    }
  }
});
