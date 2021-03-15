const userText = document.querySelector('.user-text');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    let name = value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    userText.textContent += ` ${name}`;
};

//open/close mobile navigation
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
});