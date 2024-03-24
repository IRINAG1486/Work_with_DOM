"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = () => {
    console.log('страница загрузилась');
};

window.addEventListener('load', () =>
            console.log('страница загрузилась'));

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// const bodyElem = document.querySelector('body');
// bodyElem.addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.classList.contains('super_element')) {
//         console.log(`Класс "super_element" присутствует в элементе ${e.target.tagName.toLowerCase()}`);
//     } else {
//         console.log(`Класс "super_element" отсутствует в элементе ${e.target.tagName.toLowerCase()}`);
//     }
// });

const bodyElem = document.querySelector('body');
bodyElem.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.classList.contains('super_element') ? console.log(`Класс "super_element" присутствует в элементе ${e.target.tagName.toLowerCase()}`) : console.log(`Класс "super_element" отсутствует в элементе ${e.target.tagName.toLowerCase()}`);
    });


// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaElem = document.querySelector('textarea');
textAreaElem.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const listElem = document.querySelector('ul');
listElem.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    } else {      
        console.log(e.target.textContent);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// При делегировании событий, обработчик события прикрепляется к элементу ul, являющемуся для кнопок родительским, и при нажатии на кнопку отлавливает всплывающее событие.
// Событие всплывает по DOM-дереву по цепочке предков целевого элемента до объектов document и window. Т.к. в DOM-дереве элемент ul находится ближе к целевому элементу, чем элемент body, то и всплывающее событие на элементе ul будет отловлено раньше.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const ulElems = document.querySelectorAll('li:nth-child(even)');
console.log(ulElems);
ulElems.forEach(element => {
    element.style.backgroundColor = "green";
});

