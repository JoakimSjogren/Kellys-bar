const userText = document.querySelector('.user-text');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const firstNameInput = document.querySelector('#firstname');

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    let id = value;

    //check if user exists
    let user = users[Object.keys(users)[id -1]];
    if (user !== undefined) {
        let firstName = user.firstName;
        userText.textContent += " " + firstName;
        firstNameInput.value = firstName;
    }
};

//open/close mobile navigation
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
});