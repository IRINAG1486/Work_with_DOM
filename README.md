# Условия для домашних заданий.

## Урок 2. Семинар. Введение в DOM (Document Object Model)

Обязательное задание.

Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
стирать, код с решением задачи пишем под комментарием.

```
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title" data-number="100">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text" data-number="50">
Some quick example text to build on the card title and make up the bulk of the card's
content.
</p>
<a href="#" id="super_link" class="card-link">Card link</a>
<a href="#" class="card-link" data-number="50">Another link</a>
</div>
</div>

<script>
"use strict";
``
[]()
[]()
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
[]()
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
[]()
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
[]()
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
[]()
5. Выведите содержимое тега title в консоль.
[]()
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
[]()
7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

8. Удалите тег h6 на странице.
```

## Урок 4. Семинар. Работа с DOM

<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework 5</title>
</head>

<body> -->

Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

```
<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<script>
    "use strict";
[]()
[]()
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
[]()
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
[]()
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]()
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
[]()
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]()
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
[]()
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
```

## Урок 6. Семинар. Основы событий в JavaScript

<p class="super_element">Привет</p>

<img src="https://placeimg.com/50/50/animals" alt="">
<img src="https://placeimg.com/50/50/arch" alt="">
<img src="https://placeimg.com/50/50/nature" alt="">
<img src="https://placeimg.com/50/50/people" alt="">
<img src="https://placeimg.com/50/50/tech" alt="">
<img src="https://placeimg.com/50/50/tech/grayscale" alt="">
<img src="https://placeimg.com/50/50/tech/sepia" alt="">

<br>

<button>Кнопка</button>
<button class="super_element">Кнопка с классом btn</button>
<button>Кнопка</button>

<br>

<textarea></textarea>

<br>

<ul>
  <li>
    <button>Кнопка 1</button>
  </li>
  <li>
    <button>Кнопка 2</button>
  </li>
  <li>
    <button>Кнопка 3</button>
  </li>
  <li>
    <button>Кнопка 4</button>
  </li>
</ul>

<script>
  "use strict";


1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.

4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
