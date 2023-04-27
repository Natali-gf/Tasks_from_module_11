// Задание '5'
console.log('Задание 5');

// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.


//? Solution

let getNumberDegree = (number, degree) => Math.pow(number, degree);

console.log(getNumberDegree(2, 5));

//? Solution 2

let getNumberDegree2 = (x, n) => Math.pow(x, n);

console.log(getNumberDegree2(2, 5));