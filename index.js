const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
// score for Home
const increaseOneBtn = document.getElementById('increaseOne');
const increaseTwoBtn = document.getElementById('increaseTwo');
const increaseThreeBtn = document.getElementById('increaseThree');

// score for guest

const increaseOneGuestBtn = document.getElementById('increaseOne-guest');
const increaseTwoGuestBtn = document.getElementById('increaseTwo-guest');
const increaseThreeGuestBtn = document.getElementById('increaseThree-guest');

let scoreHome = 0;
let scoreGuest = 0;
// function to increment the Home score
const increaseOne = () => {
    scoreHome += 1;
    homeScore.textContent = scoreHome;
};
increaseOneBtn.addEventListener('click', increaseOne);
const increaseTwo = () => {
    scoreHome += 2;
    homeScore.textContent = scoreHome;
};
increaseTwoBtn.addEventListener('click', increaseTwo);
const increaseThree = () => {
    scoreHome += 3;
    homeScore.textContent = scoreHome;

};
increaseThreeBtn.addEventListener('click', increaseThree);

// function to increment the Guest score

const increaseOneGuest = () => {
    scoreGuest += 1;
    guestScore.textContent = scoreGuest;
};
increaseOneGuestBtn.addEventListener('click', increaseOneGuest);
const increaseTwoGuest = () => {
    scoreGuest += 2;
    guestScore.textContent = scoreGuest;
};
increaseTwoGuestBtn.addEventListener('click', increaseTwoGuest);
const increaseThreeGuest = () => {
    scoreGuest += 3;
    guestScore.textContent = scoreGuest;

};
increaseThreeGuestBtn.addEventListener('click', increaseThreeGuest);


