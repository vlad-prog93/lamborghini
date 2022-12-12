const caruselItems = document.querySelectorAll('.carusel__item');
const caruselList = document.querySelector('.carusel__list');
const buttonPrev = document.querySelector('.prev')
const buttonNext = document.querySelector('.next')

let count = 0;
let width;

const init = () => {
    width = document.querySelector('.carusel').offsetWidth;
    console.log('resize: ', width);
    caruselList.style.width = width * caruselItems.length + 'px';
    caruselItems.forEach(item => {
        item.style.width = width/2 + 'px';
        item.style.height = 'auto'
})

}

buttonNext.addEventListener('click', () => {
    count++
    if (count >= caruselItems.length / 2 +1) {
        count = 0
    }
    caruselList.style.transform = 'translate(-'+count*width/2+'px)'
})

buttonPrev.addEventListener('click', () => {
    count--
    if (count < 0) {
        count = caruselItems.length -2
    }
    caruselList.style.transform = 'translate(-'+count*width/2+'px)'
})

init()