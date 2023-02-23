// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(moviesArray) {
    let allDirectors = []
    for (let i = 0; i < moviesArray.length; i++){
     allDirectors.push(moviesArray[i].director);
    }
   return [...new Set(allDirectors)];
  };
  console.log(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. 
function howManyMovies(moviesArray) {
    
    let filteredMovies = moviesArray.filter( e => {
        return e.director === "Steven Spielberg" && e.genre.includes("Drama")});
    return filteredMovies.length;
}

// Iteration 3: All scores average - 
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }
        let scores = [];
    for (let i = 0; i < moviesArray.length; i++) {
        if (!moviesArray[i].score){
            scores.push(0);
        } else {
        scores.push(moviesArray[i].score);  
    }
}
    let scoresAverage = scores.reduce((a, b) =>  a + b)/scores.length;
    // console.log(scores);
    return Number(scoresAverage.toFixed(2));
}

//Second shorter version

    const scoresAverage2 = (moviesArray) => {
        if (!movies.length) return 0;
        const totalScore = moviesArray.reduce((accumulator, currentValue) => {
            if (currentValue.score) {
                return accumulator + currentValue.score;
            } else { 
                return accumulator
            }
        }, 0);
        return Number((totalScore/moviesArray.length)).toFixed(2);
    }

// Iteration 4: Drama movies - 
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter( e => {
        return e.genre.includes("Drama")});
    return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScore(movies))


function orderByYear(moviesArray) {
let sortedByYear = moviesArray.slice(0).sort((one, two) => {
    if (one.year > two.year) return one.year - two.year
    if (one.year < two.year) return one.year - two.year
    else return one.title.localeCompare(two.title);
  });
  return sortedByYear;
};
console.table(orderByYear(movies));

// Iteration 6: Alphabetic Order -
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map((movie) => movie.title);
    let sortByTitle = movieTitles.sort((a, b) => a > b ? 1 : -1);
    return sortByTitle.slice(0,20);
}
console.log(orderAlphabetically(movies))


    //SOLUTION

   //Part 001
const convertHours = (hourString) => {
    let calculateHour = hourString.split("h");
    return calculateHour[0] * 60;
  };
  // Part 002
  const convertMinutes = (minuteString) => {
    let calculateMinutes = minuteString.split("min");
    return Number(calculateMinutes[0]);
  };
  // Part 003
  const convertDuration = (duration) => {
    let timePieces = duration.split(" ");
  
    let minutes = timePieces.reduce((sum, onePiece) => {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);
  
    return minutes;
  };
  // Part 004
  const turnHoursToMinutes = (movies) => {
    let newCentArray = movies.map((movie) => {
      let newMovie = {};
      newMovie.title = movie.title;
      newMovie.year = movie.year;
      newMovie.director = movie.director;
      newMovie.duration = convertDuration(movie.duration);
      newMovie.genre = movie.genre;
      newMovie.rate = movie.rate;
  
      return newMovie;
    });
  
    return newCentArray;
  };

console.log(turnHoursToMinutes(movies));