const userText = document.querySelector('.user-text');

const mobileMenuBtn = document.querySelector('.mobile-nav-btn');
const mobileMenu = document.querySelector('.mobile-menu');

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    let name = value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    userText.textContent += ` ${name}`;
};

//mobile nav
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
});