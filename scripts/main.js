const userText = document.querySelector('.user-text');


const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    let name = value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    userText.textContent += ` ${name}`;
};