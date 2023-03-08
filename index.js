//Basic variables for the game
var stars = 0;
var starsPerSecond = 0;
var starsPerClick = 1;

//Goal variable for restart
var restartNum = 10**15

//Cost of items
var minersCost = 50;
var drillsCost = 250;
var laserCost = 1000;
var bombCost = 5000;
var nukeCost = 25000;

//Amount of items
var miners = 0;
var drills = 0;
var lasers = 0;
var bombs = 0;
var nukes = 0;

var saveInfo = Array['Save'];

function increment() {
    stars += starsPerClick;
    document.getElementById("showStars").innerHTML = stars;
    shortenNumber();
}

setInterval(function(){
    stars += starsPerSecond;
    document.getElementById("showStars").innerHTML = stars;
    shortenNumber();
    save();
}, 300)

function shortenNumber() {
    if(stars > 999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 1000) + "k"
    }
    if (stars > 999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**6) + "M"
    }
    if (stars > 999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**9) + "b"
    }
    if (stars > 99999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**12) + "t"
    }
    if (stars > 999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**15) + "Qua"
    }
    if (stars > 999999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**17) + "Qui"
    }
    if (stars > 999999999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**21) + "Sex"
    }
    if (stars > 999999999999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**24) + "Sep"
    }
    if (stars > 999999999999999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**27) + "Oct"
    }
    if (stars > 999999999999999999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**30) + "Non"
    }
    if (stars > 999999999999999999999999999999999) {
        document.getElementById("showStars").innerHTML = Math.floor(stars/ 10**33) + "Dec"
    }
}

function buyMiners() {
    if (stars >= minersCost){
        stars -= minersCost;
        document.getElementById("showStars").innerHTML = stars;
        miners++;
        document.getElementById("minersNum").innerHTML = miners;
        minersCost *= 2;
        document.getElementById("minersCost").innerHTML = minersCost;
        starsPerSecond += 1;
        document.getElementById("showStarsPerSecond").innerHTML = starsPerSecond;
        shortenNumber();
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyDrills() {
    if (stars >= drillsCost){
        stars -= drillsCost;
        document.getElementById("showStars").innerHTML = stars;
        drills++;
        document.getElementById("drillsNum").innerHTML = drills;
        drillsCost *= 2;
        document.getElementById("drillsCost").innerHTML = drillsCost;
        starsPerSecond += 4;
        document.getElementById("showStarsPerSecond").innerHTML = starsPerSecond;
        shortenNumber();
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyLasers() {
    if (stars >= laserCost){
        stars -= laserCost;
        document.getElementById("showStars").innerHTML = stars;
        lasers++;
        document.getElementById("lasersNum").innerHTML = lasers;
        laserCost *= 2;
        document.getElementById("laserCost").innerHTML = laserCost;
        starsPerSecond += 12;
        document.getElementById("showStarsPerSecond").innerHTML = starsPerSecond;
        shortenNumber();
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyBombs() {
    if (stars >= bombCost){
        stars -= bombCost;
        document.getElementById("showStars").innerHTML = stars;
        bombs++;
        document.getElementById("bombsNum").innerHTML = bombs;
        bombCost *= 2;
        document.getElementById("bombCost").innerHTML = bombCost;
        starsPerSecond += 20;
        document.getElementById("showStarsPerSecond").innerHTML = starsPerSecond;
        shortenNumber();
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyNukes() {
    if (stars >= nukeCost){
        stars -= nukeCost;
        document.getElementById("showStars").innerHTML = stars;
        nukes++;
        document.getElementById("nukeNum").innerHTML = nukes;
        nukeCost *= 2;
        document.getElementById("nukeCost").innerHTML = nukeCost;
        starsPerSecond += 20;
        document.getElementById("showStarsPerSecond").innerHTML = starsPerSecond;
        shortenNumber();
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function restartGame() {
    if(stars >= restartNum) {
        restart();
    } else {
        document.getElementById("warning-txt").textContent = "You can't replace star yet"
    }
}

function restart(){
    //Reset the variables to 0
    stars = 0;
    starsPerSecond = 0;

    //Reset the restart number
    restartNum = 10**15

    //Reset the cost of items
    minersCost = 50;
    drillsCost = 250;
    laserCost = 1000;
    bombCost = 5000;
    nukeCost = 25000;

    //Reset the amount of items
    miners = 0;
    drills = 0;
    lasers = 0;
    bombs = 0;
    nukes = 0;

    document.getElementById("showStars").innerHTML = stars;
    document.getElementById("showStarsPerSecond").innerHTML = starsPerSecond;
    document.getElementById("minersNum").innerHTML = miners;
    document.getElementById("drillsNum").innerHTML = drills;
    document.getElementById("lasersNum").innerHTML = lasers;
    document.getElementById("bombsNum").innerHTML = bombs;
    document.getElementById("nukeNum").innerHTML = nukes;

    document.getElementById("minersCost").innerHTML = minersCost;
    document.getElementById("drillsCost").innerHTML = drillsCost;
    document.getElementById("laserCost").innerHTML = laserCost;
    document.getElementById("bombCost").innerHTML = bombCost;
    document.getElementById("nukeCost").innerHTML = nukeCost;
}

function saveGame(isManual){
    if(isManual){
        alert("Game saved successfully!");
    }
    document.cookie = generateGameSave();
}

function generateGameSave(){
    var save = JSON.stringify(Model);
    return save;
}

function restoreGame(save){
    Model = JSON.parse(save);
}

function resetGame(){
    if (confirm("Are you sure you want to reset?")){
        Model = MainModel;
        saveGame();
        alert("Game was reset");        
    } else {
        alert("Game was not reset");
    }
}
