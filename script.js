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
