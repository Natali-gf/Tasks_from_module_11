// Задание '4'
console.log('Задание 4');

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


//? Solution

runTimer(3, 0);

function runTimer (start, end){
	let i = start;
	let timer = setInterval(function() {
		if (i<end){
			console.log(i++);
		} else if (i>end) {
			console.log(i--);
		} else if (i === end) {
			console.log(i);
			clearInterval(timer);
		};
	}, 1000);
};
