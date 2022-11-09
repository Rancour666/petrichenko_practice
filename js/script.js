/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


'use strict';

//Мое решение

//Задаем переменньіе
let numberOfFilms, lastWatchedMovie, movieScore;

//Формируем обьект для данньіх
const personalMovieDB = {
	count: numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat:false
};







//Спрашиваем, получаем данньіе, проверяем, обрабатьіаем и вносим в св-во обьекта обработанное значение
numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

if(numberOfFilms){ numberOfFilms = numberOfFilms.trim();}

while(!numberOfFilms || numberOfFilms.length > 50 || isNaN(numberOfFilms)){
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	if(numberOfFilms){ numberOfFilms = numberOfFilms.trim();}

personalMovieDB.count = numberOfFilms
for(let i = 0; i < 2; i++){

	lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');

	if(lastWatchedMovie){
		lastWatchedMovie = lastWatchedMovie.trim();
	}
	while(!lastWatchedMovie || lastWatchedMovie.length>50){
		lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
		if(lastWatchedMovie){
			lastWatchedMovie = lastWatchedMovie.trim();
		}
	}

	movieScore = prompt('На сколько оцените его?', 'from 1 to 10');

	if(movieScore){
		movieScore = movieScore.trim();
	}
	while(!movieScore || movieScore.length>50 || isNaN(movieScore)){
		movieScore = prompt('На сколько оцените его?', 'from 1 to 10');
		if(movieScore){
			movieScore = movieScore.trim();
		}
	}

	personalMovieDB.movies[lastWatchedMovie] = movieScore;
}




if(personalMovieDB.count <= 10) {
	alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count > 30){
	alert('Вы киноман');
} else if(personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
	alert('Вы классический зритель');
} else {
	alert('Произошла ошибка');
}





console.log(personalMovieDB);









//Другие решения


//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
//const personalMovieDB = {
//	count: numberOfFilms,
//	movies:{},
//	actors:{},
//	genres:[],
//	privat:false
//};



//C циклом FOR
//for(let i = 0; i < 2; i++){
//	const a = prompt('Один из последних просмотренных фильмов?', '');
//	const b = prompt('На сколько оцените его?', 'from 1 to 10');
//
//	if(a !== null && b !== null < 50 && a !== '' && b !== '' && a.length){
//		personalMovieDB.movies[a] = b;
//	}else {
//		i--;
//	}
//}



//C циклом WHILE
//let i = 0;
//
//while(i < 2){
//	const a = prompt('Один из последних просмотренных фильмов?', '');
//	const b = prompt('На сколько оцените его?', 'from 1 to 10');
//
//	if(a !== null && b !== null < 50 && a !== '' && b !== '' && a.length){
//		personalMovieDB.movies[a] = b;
//	}else {
//		i--;
//	}
//	i++;
//}


//C циклом DO-WHILE
//let i = 0;
//
//do{
//	const a = prompt('Один из последних просмотренных фильмов?', '');
//	const b = prompt('На сколько оцените его?', 'from 1 to 10');
//
//	if(a !== null && b !== null < 50 && a !== '' && b !== '' && a.length){
//		personalMovieDB.movies[a] = b;
//	}else {
//		i--;
//	}
//	i++;
//}while(i < 2);