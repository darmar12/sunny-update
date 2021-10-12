let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.comment__slider');
const track = document.querySelector('.comment__track');
const items = document.querySelectorAll('.comment__item');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const itemsCount = items.length;
const itemWidth = (container.clientWidth - 15) / slidesToShow;
const movePosition = (slidesToScroll * itemWidth) + 10;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / itemWidth;
    
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();