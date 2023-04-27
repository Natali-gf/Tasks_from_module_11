// Задание 3
console.log('Задание 3');

// Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.


//? Solution

function getSum(number1) {
	return function (number2) {
		return number1 + number2;
	}
}

console.log(getSum(2)(3));
