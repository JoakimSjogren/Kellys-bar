const slider = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-container img');

const nxtBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let counter = 1;
let size = sliderImages[0].clientWidth;

window.addEventListener('resize', () => {
    size = sliderImages[0].clientWidth;
    slider.style.transform = 'translateX(' + -(size * counter) + 'px)';
});

slider.style.transform = 'translateX(' + -(size * counter) + 'px)';

nxtBtn.addEventListener('click', () => {
    if (counter >= sliderImages.length -1)
        return;
    counter++;
    slide();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0)
        return;
    counter--;
    slide();
});

function slide() {
    slider.style.transition = "transform 0.6s ease-in-out";
    slider.style.transform = 'translateX(' + -(size * counter) + 'px)';
}

slider.addEventListener('transitionend', () => {
    if (counter === 0) {
        slider.style.transition = "none";
        counter = sliderImages.length -2;
        slider.style.transform = 'translateX(' + -(size * counter) + 'px)';
    }
    else if (counter === sliderImages.length-1) {
        slider.style.transition = "none";
        counter = 1;
        slider.style.transform = 'translateX(' + -(size * counter) + 'px)';
    }
});

//Slide every 5 seconds
const SlideInterval = setInterval(function(){ 
    if (counter >= sliderImages.length -1)
        return;
    counter++;
    slide();
}, 10000);
