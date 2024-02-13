import homeContent from './home.js';
import menuContent from './menu.js';
import aboutContent from './about.js';


const content = document.querySelector('#content');
const material = homeContent();
content.appendChild(material);
console.log(content);

// tab switching logic

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(homeContent());
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(menuContent());
});

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(aboutContent());
});



function switchTabs(button) {
    // clear the div and then populate with stuff
    content.replaceChildren();
    const mat = button();
    content.appendChild(mat);

}
