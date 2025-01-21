/** Event listener to load game */
document.addEventListener("DOMContentLoaded", function() {

   

    const greece = {
        name: "Greece",
        capital: "Athens",
        flag: "assets/images/Greece.png"
    };

    for(let key in greece) {
        console.log(key);
        console.log(greece[key]);
    };

    const argentina = {
        name: "Argentina",
        capital: "Buenos Aires",
        flag: "assets/images/Argentina.png"
    };

    for(let key in argentina) {
        console.log(key);
        console.log(argentina[key]);
    };

    const australia = {
        name: "Australia",
        capital: "Canberra",
        flag: "assets/images/Australia.webp"
    };

    for(let key in australia) {
        console.log(key);
        console.log(australia[key]);
    };

    const brazil = {
        name: "Brazil",
        capital: "Rio De Janeiro",
        flag: "assets/images/Brazil.png"
    }

    for(let key in brazil) {
        console.log(key);
        console.log(brazil[key]);
    };

    const cyprus = {
        name: "Cyprus",
        capital: "Nicosia",
        flag: "assets/images/Cyprus.png"
    };

    for(let key in cyprus) {
        console.log(key);
        console.log(cyprus[key]);
    };

    
});
