import menuTemplate from './templates/menu-item.hbs';
import menuItem from './menu.json';

import './sass/main.scss';

function createMenuItem(menuItem) {
return menuTemplate(menuItem);
}

console.log(createMenuItem);
console.log(menuTemplate(menuItem));

const menuCards = document.querySelector('.js-menu');
menuCards.insertAdjacentHTML('beforeend', menuTemplate(menuItem));

// Выбор темы

const body = document.body;
const switchInput = document.querySelector('#theme-switch-toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

switchInput.addEventListener('change', onSwitchInputChange);

function onSwitchInputChange(event) {
if (event.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
return;
}
body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
}

body.classList.add(
    localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),);
    switchInput.checked = localStorage.getItem('theme') === Theme.DARK;

