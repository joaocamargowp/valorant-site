let button = document.getElementById('menu-button1');
let menu = document.querySelector('.menu nav');

button.addEventListener('click', () => {
  
  if (menu.style.opacity === '0') {
    menu.style.opacity = '1';
    menu.style.transition = '0.2s ease-in-out'
    menu.style.pointerEvents = 'auto';
  } else {
    menu.style.opacity = '0';
    menu.style.pointerEvents = 'none';
  }

});