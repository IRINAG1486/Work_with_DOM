"use strict";
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const itemDropdownElement = document.querySelectorAll('.dropdown-item');
itemDropdownElement.forEach(element => {
    element.classList.add('super-dropdown');
});
console.log(itemDropdownElement);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const buttonElement = document.querySelector('.btn');
buttonElement.classList.toggle('btn-secondary');
console.log(buttonElement);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuElement = document.querySelector('.menu');
menuElement.classList.remove('dropdown-menu');
console.log(menuElement);

// menuElement.classList.toggle('dropdown-menu');
// console.log(menuElement);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropdownElement = document.querySelectorAll('.dropdown') [1];
dropdownElement.insertAdjacentHTML('afterend', `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const elementWithId = document.querySelector('#dropdownMenuButton');
elementWithId.setAttribute('id', 'superDropdown');
console.log(elementWithId);


// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const dropdownMenuElement = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
dropdownMenuElement.dataset.dd = 3;
console.log(dropdownMenuElement);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const buttonBlock = document.querySelector('.dropdown-toggle');
buttonBlock.removeAttribute('type');
console.log(buttonBlock);