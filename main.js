let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');

window.addEventListener('scroll', function () {

    let value = window.scrollY;

    // حركة النجوم
    stars.style.left = value * 0.5 + 'px';

    // حركة القمر
    moon.style.top = value * 2 + 'px';

    // حركة الجبال
    mountains3.style.top = value * 1.2 + 'px';
    mountains4.style.top = value * 0.8 + 'px';

    // حركة النهر
    river.style.top = value * 0.5 + 'px';

    // حركة المركب
    boat6.style.top = value * 0.5 + 'px';
    boat6.style.left = value * 1.5 + 'px';

    // العنوان
    if (value < 70) {
        nouvil.style.fontSize = 25 + value * 0.5 + 'px';
    } else {
        nouvil.style.fontSize = '70px';
        nouvil.style.position = 'fixed';

        if (value >= 478) {
            nouvil.style.display = 'none';
        } else {
            nouvil.style.display = 'block';
        }
    }
});

const enterBtn = document.getElementById('enterBtn');
const intro = document.querySelector('.intro');

enterBtn.addEventListener('click', function () {
    intro.classList.add('hide');
});