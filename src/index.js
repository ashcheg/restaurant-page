// alert('hello from index.js');

import pageLoad from './page-load.js';
import pageMenu from './page-menu.js';
import pageContact from './page-contact.js';

const buttons = document.querySelectorAll('button');
const content = document.getElementById('content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        content.innerHTML = '';
        if (button.textContent === 'Home') {
            pageLoad();
        } else if (button.textContent === 'Menu') {
            pageMenu();
        } else if (button.textContent === 'Contact') {
            pageContact();
        }
    });
});

pageLoad();