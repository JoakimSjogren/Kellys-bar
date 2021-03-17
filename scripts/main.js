const userText = document.querySelector('.user-text');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const teamNameInput = document.querySelector('#teamname');

const users = {
    user1 : {firstName: 'Ellen', lastName: "Adalberth", teamName: "Smells Like Team Spirit"},
    user2 : {firstName: 'Fanny', lastName: "Alvermalm", teamName: "Team Zone"},
    user3 : {firstName: 'Sarah', lastName: "Malm", teamName: "Fire Breathing Rubber Duckies."},
    user4 : {firstName: 'Evelina', lastName: "Bakos", teamName: "Don't Stop Ballieving"},
    user5 : {firstName: 'Josefin', lastName: "Bech", teamName: "Mighty Ducks"},
    user6 : {firstName: 'Frida', lastName: "Borbély", teamName: "Smells Like Team Spirit"},
    user7 : {firstName: 'Lisa', lastName: "Schneiderman", teamName: "Team Zone"},
    user8 : {firstName: 'Matilda', lastName: "Carlsdotter", teamName: "Fire Breathing Rubber Duckies."},
    user9 : {firstName: 'Teresa', lastName: "Eriksson", teamName: "Don't Stop Ballieving"},
    user10 : {firstName: 'Adam', lastName: "Augustsson", teamName: "Mighty Ducks"},
    user11 : {firstName: 'Philip', lastName: "Holmsten", teamName: "Smells Like Team Spirit"},
    user12 : {firstName: 'Lisa', lastName: "Löfström", teamName: "Team Zone"},
    user13 : {firstName: 'Johanna', lastName: "Hellquist", teamName: "Fire Breathing Rubber Duckies."},
    user14 : {firstName: 'Alda', lastName: "Cripljanin",teamName: "Don't Stop Ballieving"},
    user15 : {firstName: 'Josefin', lastName: "Eldh", teamName: "Mighty Ducks"},
    user16 : {firstName: 'Ava', lastName: "Nikpay", teamName: "Smells Like Team Spirit"},
    user17 : {firstName: 'Cornelia', lastName: "Nordlund", teamName: "Team Zone"},
    user18 : {firstName: 'Edvin', lastName: "Oldin", teamName: "Fire Breathing Rubber Duckies."},
    user19 : {firstName: 'Lisa', lastName: "Persson", teamName: "Don't Stop Ballieving"},
    user20 : {firstName: 'Hanna', lastName: "Pålsson", teamName: "Mighty Ducks"},
    user21 : {firstName: 'Tova', lastName: "Rane", teamName: "Smells Like Team Spirit"},
    user22 : {firstName: 'Anton', lastName: "Schmidt", teamName: "Team Zone"},
    user23 : {firstName: 'Julia', lastName: "Sikström", teamName: "Fire Breathing Rubber Duckies."},
    user24 : {firstName: 'Annie', lastName: "Simlund", teamName: "Don't Stop Ballieving"},
    user25 : {firstName: 'Dara', lastName: "Torabpour", teamName: "Mighty Ducks"},
    user26 : {firstName: 'Rebecca', lastName: "Wahl", teamName: "Smells Like Team Spirit"},
}

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    let id = value;

    //check if user exists
    let user = users[Object.keys(users)[id -1]];
    if (user !== undefined) {
        let firstName = user.firstName;
        let lastName = user.lastName;
        let teamName = user.teamName;
        userText.textContent += " " + firstName;
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        teamNameInput.value = teamName;
    }
};

//open/close mobile navigation
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
});

