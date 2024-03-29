# testTaskForArboost

# Тестовое задание для позиции frontend-разработчика (React)

## Описание

Группа друзей собираются в поход, ровно на 1 день, но все они свободны в разное время.

Нужно реализовать калькулятор, в котором:

1. Можно добавить человека в список (его имя) желающего поехать в поход.
2. Удалить человека из списка, если он передумал.
3. После добавления человека в список, в календаре можно указать дни когда он может поехать. (Можно указать любые дни без ограничения). 
4. Внизу нужно посчитать и вывести наиболее удачные пересечения по выбранным дням, которые устраивают наибольшее кол-во участников.
От большего кол-ва участников к меньшему.
Соответственно, минимальное пересечение которое выводим в результатах - 2 человека.
Если пересечений нет совсем - то просто пишем - "Нет совпадений"
Результат должен подсчитываться и отображаться в режиме онлайн. (Без клика по кнопке, а при любом изменении указанных данных)

Например:
15 марта - Маша, Петя, Коля
12 марта - Кирилл, Маша
и тд

# Технологии
React JS (hooks) + TypeScript + Верстка scss modules.

## Использование
Что бы запустить проект локально, после клонирования проекта, откройте терминал:
Зайдите в папку frontend
```sh
$ cd frontend
```

Установите npm-пакет с помощью команды:
```sh
$ npm i 
```

Запустите проект 
```sh
$ npm start
```
