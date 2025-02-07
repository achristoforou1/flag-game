/** Event listener to load game */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                alert("Start game");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
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
        },
    ];

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

    //* GAME TWO */
    //* Function for capital citty */
    function getRandomCapital() {
        let randomCapital = allObjects[Math.floor(Math.random() * allObjects.length)]
        return randomCapital
    }

    const randomCapital = getRandomCapital()
    console.log(randomCapital)

    const countryCapital = randomCapital.capital
    console.log(countryCapital)

    //* Funtion for random flag image for both games */
    function getRandomFlag() {
        let randomFlag = allObjects[Math.floor(Math.random() * allObjects.length)]
        return randomFlag
    }

    const randomFlag = getRandomFlag()
    console.log(randomFlag)

    const capitalFlag = randomFlag.flag
    console.log(capitalFlag)

    function displayGameOne(countryName,capitalFlag) {
        document.getElementById('country').textContent = countryName;
        document.getElementById('country-image').src = capitalFlag;
    }

    displayGameOne(countryName, capitalFlag)

    function displayGameTwo(countryCapital,countryFlag) {
        document.getElementById('possible-capital').textContent = countryCapital;
        document.getElementById('capital-image').src = countryFlag;
    }

    displayGameTwo(countryCapital, countryFlag)

 

 










