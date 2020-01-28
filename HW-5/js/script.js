let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv'),
    column = document.getElementsByClassName('column'),
    prmpt = document.getElementById('prompt'),
    a = prompt('Ваше отношение к технике Apple?', '');

console.log(menuItem);

let menuFifthItem = document.createElement('li');

menuFifthItem.classList.add('menu-item');

menuFifthItem.textContent = 'Пятый пункт';

menu.appendChild(menuFifthItem);

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent =  "Мы продаем только подлинную технику Apple";

column[1].removeChild(adv[0]);

prmpt.innerHTML = a;

