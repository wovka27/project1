let menu        = document.querySelector('.menu');
let burger      = menu.querySelector('.menu__burger');
let mBody       = menu.querySelector('.menu__body');
let mItems      = menu.querySelectorAll('li');
let posY        = 0;
function menuClose() {
    mBody.classList.remove('active');
    burger.classList.remove('active');
}
function menuToggle() {
    mBody.classList.toggle('active');
    burger.classList.toggle('active');
}
burger.addEventListener('click', function () {
        if (window.innerWidth > 768) { menuToggle(); }
        else if (window.innerWidth <= 768) { menuToggle(); }
    })
function menuhide() {
    window.addEventListener('wheel', e =>{
        if(e.wheelDelta == '120') {menu.classList.add('show');}
        else {menu.classList.remove('show');}
        if (mBody.classList.contains('active')||burger.classList.contains('active')) {menuClose();}
    })
}
mItems.forEach(el => {el.addEventListener('click', e =>{menuClose()})});


window.addEventListener('touchmove', e =>{
    const {clientX, clientY} = e.touches[0];
    if (posY < clientY) {menu.classList.add('show');console.log('вниз');}
    if (posY > clientY) {menu.classList.remove('show');console.log('вверх');}
    if (mBody.classList.contains('active')||burger.classList.contains('active')) {menuClose();}
    posY = clientY;
})