'use sctrict'

//let number = 4.6;
//console.log(213);
//const persone = "Alex";
/*const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj.name);
console.log(obj['name']); 
let arr = ['plum.png','orange.png','apple.png', 6, {}, []];
console.log(arr[1]); */
//alert('Hello!');
//const result = confirm("Are you hare?")
//console.log(result);
//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer +5);
//const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваше фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');
//console.log(typeof(answers));
//const category = 'toys';
//console.log(`https://someurl.com/${category}`);
//const user = 'Ivan';
//alert(`Привет,${user}`);
//console.log(4 + +"5");
//let incr = 10,
// decr = 10;
//++incr;
//--decr;
//console.log(++incr);
//console.log(--decr);
//console.log(6%2);
//console.log(2 + 4 * 2 !== '6');
//const isChecked = false,
//isClose = false;
//console.log(isChecked || !isClose);
//Задание
/*
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
if (numberOfFilms.count < 10) {
	alert('Достаточно мало фильмов(')
} else if (numberOfFilms.count >= 10 && numberOfFilms.count < 31) {
	alert('Вы классический зритель')
} else if (numberOfFilms.count > 30) {
	alert('Вы киноман')
} else {
	alert('Произошла ошибка')
}

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

for (let i = 1; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = +prompt('На сколько оцените его?', '')
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b
		console.log('done')
	} else {
		console.log('error')
		i--
	}
}
console.log(personalMovieDB)
*/

//Выведите с помощью цикла столбец чисел от 1 до 100.
/*
for (let i = 1; i <= 100; i++) {
	console.log(i)
}
*/
//Выведите с помощью цикла столбец чисел от 100 до 1
/*
for (let i = 100; i > 0; i--) {
	console.log(i)
}

//Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i)
	}
}

*/

/*
if (numberProm !== null && numberProm != '' && numberProm.length <= 8) {
	console.log('норм')
} else {
	alert('Неверный промокод')
}
console.log(arr)

/*
let arr = Array.from(numberPromocod, Number)

console.log(arr)
*/

let promocod = prompt('Введите свой промокод', '')
let arr = Array.from(promocod, Number)

for (let index = 0; index < arr.length; ++index) {
	if (index == NaN) {
		console.log('Промокод не подходит')
	} else {
		console.log('Все норм')
	}
}

/*

function showPromo(num) {
	return num.length <= 8
}

alert(arr.every(showPromo))
*/
