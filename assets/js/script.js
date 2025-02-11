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

    let playerScoore = 0
    let numberOfQuestion = 0

    let country1, country2

/** Event listener to load game */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                getRandomCountry(gameType);
            }
        })
    }

    document.getElementById("country").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    getRandomCountry("randomCountry");

    
});

   

    /** GAME ONE 
     Function for random country */
    function getRandomCountry(gameType) {
        let randomCountry = allObjects[Math.floor(Math.random() * allObjects.length)]
        return randomCountry
    }

    const randomCountry = getRandomCountry()
    console.log(randomCountry)

    const countryName = randomCountry.name
    console.log(countryName)

    const countryFlag =randomCountry.flag
    console.log(countryFlag)

    /** GAME TWO 
     Function for capital city */
    function getRandomCapital() {
        let randomCapital = allObjects[Math.floor(Math.random() * allObjects.length)]
        return randomCapital
    }

    const randomCapital = getRandomCapital()
    console.log(randomCapital)

    const countryCapital = randomCapital.capital
    console.log(countryCapital)

    /** Funtion for random flag image for both games */
    function getRandomFlag() {
        let randomFlag = allObjects[Math.floor(Math.random() * allObjects.length)]
        return randomFlag
    }

    const randomFlag = getRandomFlag()
    console.log(randomFlag)

    const capitalFlag = randomFlag.flag
    console.log(capitalFlag)

    /** Display Game One */
    function displayGameOne(countryName,capitalFlag) {
        document.getElementById('country').textContent = countryName;
        document.getElementById('country-image').src = capitalFlag;
    }

    displayGameOne(countryName, capitalFlag)

    /** Display Game Two */
    function displayGameTwo(countryCapital,countryFlag) {
        document.getElementById('possible-capital').textContent = countryCapital;
        document.getElementsById('country-image').src = countryFlag;
    }

    displayGameTwo(countryCapital, countryFlag)

    /** Check correct answer*/
    function checkAnswer(chosenAnswer, correctAnswer) {
        let chosenAnswer = 
        let correctAnswer = 
        var trueBtn = document.getElementById("true_one")
      
       
        
            if (allObjects.name === allObjects.flag) {
                return true;
            } else if (allObjects.name !== allObjects.flag) {
                return false;
            } else if (allObjects.capital === allObjects.flag) {
                return true;
            } else (allObjects.capital !== allObjects.flag) {
                return false;
            }
        
    }
    checkAnswer(chosenAnswer, correctAnswer)

    /** Increment correct score */
    function incrementScore()


    /** Increment incorrect score */
    function incrementWrongAnswer()

    /** End of 5 tries for game one */
    function endOfGameOne()

    /** End of 5 tries for game two */
    function endOfGameTwo()


    /** Restart game */
    function gameRestart()

    function 

    


 










