/**  Event listener to load game*/ 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", startGame);
	document.getElementById("start").addEventListener("click", function () {
        // Hide START button
        this.style.display = "none";

        //  Hide Game 2 
        document.getElementById("game-two").style.display = "none";

        // Show Game 1
        document.getElementById("game-one").style.display = "block";
    });
    document.getElementById("true_one").addEventListener("click", () => checkAnswer(true));
    document.getElementById("false_one").addEventListener("click", () => checkAnswer(false));
    document.getElementById("true_two").addEventListener("click", () => checkAnswerCapital(true));
    document.getElementById("false_two").addEventListener("click", () => checkAnswerCapital(false));
    document.getElementById("restart").addEventListener("click", restartGame);
});

const allObjects = [
    { name: 'Greece', capital: 'Athens', flag: 'assets/images/greece.png' },
    { name: "Argentina", capital: "Buenos Aires", flag: "assets/images/argentina.png" },
    { name: "Australia", capital: "Canberra", flag: "assets/images/australia.webp" },
    { name: "Brazil", capital: "Brasilia", flag: "assets/images/brazil.png" },
    { name: "Cyprus", capital: "Nicosia", flag: "assets/images/cyprus.png" },
    { name: "France", capital: "Paris", flag: "assets/images/france.png" },
    { name: "Germany", capital: "Berlin", flag: "assets/images/germany.png" },
    { name: "Italy", capital: "Rome", flag: "assets/images/italy.webp" },
    { name: "United Kingdom", capital: "London", flag: "assets/images/united_kingdom.png" },
    { name: "USA", capital: "Washington D.C", flag: "assets/images/usa.png" },
];

let gameOneCount = 0;
let gameTwoCount = 0;
let score = 0;
let currentCountry;
let displayedCountry;

/** Start Game */
function startGame() {
    gameOneCount = 0;
    gameTwoCount = 0;
    score = 0;
    document.getElementById("country-number").textContent = score;
    document.getElementById("capital-number").textContent = score;
    document.querySelector(".final-score-area").style.display = "none";
    nextRound();
}

/** Random Country */
function getRandomCountry() {
    return allObjects[Math.floor(Math.random() * allObjects.length)];
}



/** Show new question in Game 1 */
function nextRound() {
    if (gameOneCount < 5) {
        currentCountry = getRandomCountry();
        displayedCountry = getRandomCountry(); 

        document.getElementById('country').textContent = displayedCountry.name;
        document.getElementById('country-image').src = currentCountry.flag;
    } else {
        startGameTwo();
    }
}

/** Checks answer in Game 1 */
function checkAnswer(userAnswer) {
    const correctAnswer = currentCountry.name === displayedCountry.name;

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("country-number").textContent = score;
    }

    gameOneCount++;
    nextRound();
}

/**  Game 2 Start */
function startGameTwo() {
    document.getElementById("game-one").style.display = "none";
    document.getElementById("game-two").style.display = "block";

    // Brings score from Game one onto Game 2
    document.getElementById("capital-number").textContent = score;

    nextCapitalRound();
}


/** New question for Game 2 */
function nextCapitalRound() {
    if (gameTwoCount < 5) {
        currentCountry = getRandomCountry();
        displayedCountry = getRandomCountry(); 

        document.getElementById('possible-capital').textContent = displayedCountry.capital;
        document.getElementById('capital-image').src = currentCountry.flag;
    } else {
        endGame();
    }
}

/** Checks answer in Game 2 */
function checkAnswerCapital(userAnswer) {
    const correctAnswer = currentCountry.capital === displayedCountry.capital;

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("capital-number").textContent = score;
    }

    gameTwoCount++;
    nextCapitalRound();
}

/** End of game */
function endGame() {
    document.getElementById("game-two").style.display = "none";
    document.querySelector(".final-score-area").style.display = "flex"; 
    
    document.getElementById("final-score-message").textContent = `Your final score is: ${score}`;
    
    // Button show after a small timeout
    setTimeout(() => {
        document.getElementById("restart").style.display = "block";
    }, 200);
}

/** restart the game*/
function restartGame() {
    document.getElementById("game-one").style.display = "block";
    document.getElementById("game-two").style.display = "none";
    document.querySelector(".final-score-area").style.display = "none";
    startGame();
}