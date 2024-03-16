"use strict";
// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

// ```
// <a href="#" class="card-link">Card link</a>
// <a href="#" class="card-link">Another link</a>

// <div class="card" style="width: 18rem;">
// <div class="card-body">
// <h5 class="card-title" data-number="100">Card title</h5>
// <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
// <p class="card-text" data-number="50">
// Some quick example text to build on the card title and make up the bulk of the card's
// content.
// </p>
// <a href="#" id="super_link" class="card-link">Card link</a>
// <a href="#" class="card-link" data-number="50">Another link</a>
// </div>
// </div>

// <script>
// "use strict";
// ``

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const elemWithId = document.getElementById('super_link');
console.log(elemWithId);

const elemWithId2 = document.querySelector('#super_link');
console.log(elemWithId2);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const linkElements = document.querySelectorAll('.card-link');
console.log(linkElements);
linkElements.forEach(element => {
    element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const divElement = document.querySelector('.card-body');
console.log(divElement);
console.log(divElement.querySelectorAll('.card-link'));

const blockLinks = document.querySelectorAll('.card-body > .card-link') 
console.log(blockLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataElement = document.querySelector('[data-number="50"]');
console.log(dataElement);


// 5. Выведите содержимое тега title в консоль.
const title = document.title;
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardElement = document.querySelector('.card-title');
console.log(cardElement);
console.log(cardElement.parentNode);


// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const pElement = document.createElement('p');
pElement.textContent = "Привет";
const blockCardElement = document.querySelector('.card');
blockCardElement.appendChild(pElement);
console.log(blockCardElement);

// 8. Удалите тег h6 на странице.
const headingElement = document.querySelector('h6');
headingElement.remove();