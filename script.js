"use strict";

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('Насколько Вы цените его?',''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('Насколько Вы цените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

