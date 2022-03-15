/*
  Use prototype to create a movie object which has following properties   
  title, director, genre, releaseYear, rating and getOverview method using function Syntax. 
  WRITE YOUR SOLUTION HERE
*/

function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} film directed by 
      ${this.director} was released in ${this.releaseYear}. 
      It received a rating of ${this.rating}`;
};

const SpidermanHome = new Movie('Spiderman-Homecoming',"Jon Watts", "Action", 2017, 87);
const SpidermanNoHome = new Movie('Spiderman-No Way Home',"Jon Watts", "Action", 2021, 87)

console.log(SpidermanHome);
console.log(SpidermanHome.getOverview());
console.log(SpidermanNoHome.getOverview());