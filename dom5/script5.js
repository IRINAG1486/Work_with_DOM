// Урок 10. Семинар. Работа с JSON
// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const dataHomeWork = JSON.parse(dataForHomeWork);
console.log(dataHomeWork);

const boxElements = document.querySelector('.box');

dataHomeWork.forEach(element => {
    boxElements.insertAdjacentHTML('beforeend', `
    <div class="box__customer">
        <div>
            <img class="box__img" src="${element.customer.img}">
        </div>
        <div class="box__content">
            <h1 class="box__main-title">${element.customer.name}</h1>
            <h3 class="box__title">Customer phone: </h3>
            <a class="box__link" href="tel:+${element.customer.phone}">${element.customer.phone}</a>
            <h3 class="box__title">Customer address: </h3>
            <h2 class="box__data">${element.customer.address.state}</h2>
            <h2 class="box__data">${element.customer.address.city}</h2>
            <h2 class="box__data">${element.customer.address.street}</h2>
        </div>
    </div>
    `)
});

