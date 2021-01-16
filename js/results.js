const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

//universal variables
const numParticipants = urlParams.get("participants");
const ageRange = urlParams.get("age_range");

// category checks
const wantsGames = urlParams.has("games");
const wantsExercises = urlParams.has("exercises");
const wantsCooking = urlParams.has("cooking");
const wantsMovTv = urlParams.has("mov-tv");

//game variables
const gameGenres = urlParams.getAll("game-genres");
const costRange = urlParams.get("cost_range");

//exercises variables
const exerTypes = urlParams.getAll("exer-types");

//cooking variables
const mealTypes = urlParams.getAll("meal-types");

//mov-tv variables
const movTvGenres = urlParams.getAll("mov-tv-genres");

// console.log(queryString);
