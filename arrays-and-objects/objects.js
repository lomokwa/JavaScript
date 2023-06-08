const student = {
  firstName: "Lorenzo",
  lastName: "Mokwa",
  age: 19,
  student: true,
};

console.log(student.firstName);

// Creating objects from separate variables

const make = "BMW";
const chassi = "E90";
const model = "325i";
//const year = 2006;
const engine = "N52";

//const myCar = {make, model, year, chassi}; // Assembled 3 variables into a single object

// Destructuring objects

const movie = {
  title: "Drive",
  year: 2011,
  director: "Nicolas W.",
  genre: ["action","drama"]
};

// Lame way:

// const title = movie.title;
// const year = movie.year;
// const director = movie.director;
// const genre = movie.genre;

// Cool way:

const {title, writer, genre} = movie;
console.log(movie);