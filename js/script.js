'use strict';
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




////Мое решение
//
////Задаем переменньіе
//let numberOfFilms, lastWatchedMovie, movieScore;
//
////Формируем обьект для данньіх
//const personalMovieDB = {
//	count: numberOfFilms,
//	movies:{},
//	actors:{},
//	genres:[],
//	privat:false
//};
//
//
//
//
//
//
//
////Спрашиваем, получаем данньіе, проверяем, обрабатьіаем и вносим в св-во обьекта обработанное значение
//numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//
//if(numberOfFilms){ numberOfFilms = numberOfFilms.trim();}
//
//while(!numberOfFilms || numberOfFilms.length > 50 || isNaN(numberOfFilms)){
//	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//	if(numberOfFilms){ numberOfFilms = numberOfFilms.trim();}
//}
//personalMovieDB.count = numberOfFilms;
//for(let i = 0; i < 2; i++){
//
//	lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
//
//	if(lastWatchedMovie){
//		lastWatchedMovie = lastWatchedMovie.trim();
//	}
//	while(!lastWatchedMovie || lastWatchedMovie.length>50){
//		lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
//		if(lastWatchedMovie){
//			lastWatchedMovie = lastWatchedMovie.trim();
//		}
//	}
//
//	movieScore = prompt('На сколько оцените его?', 'from 1 to 10');
//
//	if(movieScore){
//		movieScore = movieScore.trim();
//	}
//	while(!movieScore || movieScore.length>50 || isNaN(movieScore)){
//		movieScore = prompt('На сколько оцените его?', 'from 1 to 10');
//		if(movieScore){
//			movieScore = movieScore.trim();
//		}
//	}
//
//	personalMovieDB.movies[lastWatchedMovie] = movieScore;
//}
//
//
//
//
//if(personalMovieDB.count <= 10) {
//	alert('Просмотрено довольно мало фильмов');
//} else if(personalMovieDB.count > 30){
//	alert('Вы киноман');
//} else if(personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
//	alert('Вы классический зритель');
//} else {
//	alert('Произошла ошибка');
//}
//
//
//console.log(personalMovieDB);






/* Задание на урок - 3:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/




/* Задание на урок - 4:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



// Код возьмите из предыдущего домашнего задания





const personalMovieDB = {
	count: 0,
	movies:{},
	actors:{},
	genres:[],
	privat:false,
	start:function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while(personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms:function(){
		for(let i = 0; i < 2; i++){
			const a = prompt('Один из последних просмотренных фильмов?', '');
			const b = prompt('На сколько оцените его?', 'from 1 to 10');
		
			if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50){
				personalMovieDB.movies[a] = b;
			}else {
				i--;
			}
			
		}
	},
	writeYourGenres: function(){
		for(let i = 1; i <= 3; i++){
			let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
			while(genre === '' || genre === null || !isNaN(genre)){
				genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
			}
			personalMovieDB.genres[i - 1] = genre;
		}
		personalMovieDB.genres.forEach((genre, number) => console.log(`Любимый жанр #${number + 1} - это ${genre}`));
	},
	detectPersonalLevel: function(){
		if(personalMovieDB.count <= 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if(personalMovieDB.count > 30){
			alert('Вы киноман');
		} else if(personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
			alert('Вы классический зритель');
		} else {
			alert('Произошла ошибка');
		}
	},
	showMyDB: function(hidden){
		if(!hidden){
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function(){
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();

