const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const found = this.films.find((film) => title === film.title);
  return found;
};

Cinema.prototype.getFilmTitles = function () {
  return this.films.map((film) => film.title);
};

Cinema.prototype.getFilmByGenre = function (genre) {
  return this.films.filter((film) => genre === film.genre);
};

Cinema.prototype.checkFilmByYear = function (year) {
  const filmFound = this.films.find((film) => year === film.year);
  if (filmFound === undefined) {
    return false;
  } else {
    return true;
  }
};

Cinema.prototype.checkFilmLength = function (filmLength) {
  const checkLength = this.films.map((film) => film.length > filmLength);
  if (checkLength === undefined) {
    return false;
  } else {
    return true;
  }
};


module.exports = Cinema;
