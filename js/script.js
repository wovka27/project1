let load = document.querySelector('.onload');
window.onload = () => load.classList.add('off');
function addCls(item,cls){item.classList.add(cls)}
function rmvCls(item,cls){item.classList.remove(cls)}
function tglCls(item,cls){item.classList.toggle(cls)}
function cntCls(item,cls){item.classList.contains(cls)}
function eventFun(item, event, handler) {item.addEventListener(event, handler)}
let menu        = document.querySelector('.menu');
let burger      = menu.querySelector('.menu__burger');
let mBody       = menu.querySelector('.menu__body');
let mItems      = menu.querySelectorAll('li');
let wWidth      = window.innerWidth;
let posY        = 0;
let about       = document.querySelector('.about');
setTimeout(()=>{menu.classList.add('show')}, 1000)
function menuOpen() {
    tglCls(mBody,'active');
    tglCls(burger,'active');
    if(wWidth <768) tglCls(burger, 'touch');
}

function menuClose() {
    rmvCls(mBody,'active');
    rmvCls(burger,'active');
    if(wWidth <768) rmvCls(burger, 'touch');
}

function adaptOpen() {
    if (wWidth > 768) menuOpen();
    else if (wWidth <= 768) menuOpen();
}
function wheelOutMenu(item) {
    if(item.wheelDelta == '120') {addCls(menu,'show');}
    else  {rmvCls(menu,'show');}
    if (mBody.classList.contains('active')) menuClose();
}
function touchOutMenu(e) {
    const {clientX, clientY} = e.touches[0];
    if (posY < clientY) addCls(menu, 'show');
    if (posY > clientY) rmvCls(menu, 'show');
    if (mBody.classList.contains('active')) menuClose();
    posY = clientY;
}
eventFun(burger, 'click', adaptOpen);
eventFun(window, 'wheel', wheelOutMenu);
eventFun(window, 'touchmove', touchOutMenu);
mItems.forEach(el => {
    eventFun(el, 'click' ,menuClose);
    el.addEventListener('click', e => {
        if (e.target.innerHTML == 'Контакты') contact.classList.add('active');
        if (e.target.innerHTML == 'О Сайте') about.classList.add('active');
    })
});;
const container = document.querySelector('.bg-img');
const track = container.querySelector('ul');
let slides = container.querySelectorAll('ul li');
let index = 0;
let slideInterval = setInterval(nextSlide,5000);
function nextSlide() {
    slides[index].className = 'bg-img__link';
    index = (index+1)%slides.length;
    slides[index].className = 'bg-img__link show';
}
;

let contact = document.querySelector('.contact');
const close = document.getElementById('close');
const input = contact.querySelectorAll('input');
const submit = contact.querySelector('button');
function closeForm() {contact.classList.remove('active');}
close.onclick = closeForm;
submit.onclick = closeForm;

const aboutClose = document.querySelector('#aboutClose');
aboutClose.onclick = () => about.classList.remove('active');

const blurBtn = document.querySelector('.blur-btn');
blurBtn.addEventListener('click', () => container.classList.toggle('not-blur'));

