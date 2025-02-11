 /** All objects with keys and values */
 const allObjects = [
    {
        name: 'Greece',
        capital: 'Athens',
        flag: '/assets/images/Greece.png'
    },
    {
        name: "Argentina",
        capital: "Buenos Aires",
        flag: "assets/images/Argentina.png"
    },
    {
        name: "Australia",
        capital: "Canberra",
        flag: "assets/images/Australia.webp"
    },
    {
        name: "Brazil",
        capital: "Rio De Janeiro",
        flag: "assets/images/Brazil.png"
    },
    {
        name: "Cyprus",
        capital: "Nicosia",
        flag: "assets/images/Cyprus.png"
    },
    {
        name: "France",
        capital: "Paris",
        flag: "assets/images/France.png"
    },
    {
        name: "Germany",
        capital: "Berlin",
        flag: "assets/images/Germany.png"
    },
    {
        name: "Italy",
        capital: "Rome",
        flag: "assets/images/Italy.webp"
    },
    {
        name: "United Kindom",
        capital: "London",
        flag: "assets/images/United_Kingdom.png"
    },
    {
        name: "USA",
        capital: "Washington D.C",
        flag: "/assets/images/USA.png"
    },];

    let playerScore = 0
    let numberOfQuestion = 0

    let country1, country2

/** Event listener to load game */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (button.id === "true_one") {
                if (checkAnswerOne(country1, country2)) {
                    console.log("CORRECT, +1 to Score")
                    displayGameScore()
                } else {
                    console.log("INCORRECT, no points")
                    numberOfQuestion++
                }
            } else if (button.id === "false_one") {
                if (checkAnswerOne(country1, country2)) {
                    console.log("INCORRECT, no points")
                } else {
                    console.log("CORRECT, +1 to Score")
                    displayGameScore()
                }
            }
            numberOfQuestion++
            console.log("Score: " + playerScore)
            console.log("Questions answered: " + numberOfQuestion)

            console.log("Update Score")

            if (numberOfQuestion < 9) {
                loadNewQuestion()
            } else {
                const gameArea = document.getElementById("game-area")
                const finalScoreArea = document.getElementById("final-score-area")

                gameArea.style.display = "none"
                finalScoreArea.style.display = "block"
            }
        })
    }
});    
    
   /** GAME ONE
 Function for random country */
function getRandomCountry(gameType) {
    let randomCountry = allObjects[Math.floor(Math.random() * allObjects.length)]
    return randomCountry
}


/** Display Game One */
function displayGameOne(countryName, capitalFlag) {
    document.getElementById('country').textContent = countryName;
    document.getElementById('country-image').src = capitalFlag;
}


/** Check correct answer Game One */
function checkAnswerOne(country1, country2) {
    return country1.name === country2.name
}

function incrementScore() {
    playerScore++
}

function incrementWrongAnswer() {
}

/** Display Game Score */
function displayGameScore () {
    document.getElementById('country-number').textContent = playerScore + 1;
    return ++ playerScore
}

function endOfGameOne() {
}

function endOfGameTwo() {
}

function gameRestart() {
}

function loadNewQuestion() {
    country1 = getRandomCountry()
    country2 = country1

    if (Math.random() < 0.5) {
        while (country2.name === country1.name) {
            country2 = getRandomCountry()
        }
    }

    displayGameOne(country1.name, country2.flag)
}

loadNewQuestion()


 










