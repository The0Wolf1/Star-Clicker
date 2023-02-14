//Basic variables for the game
var stars = 0;
var starsPerSecond = 0;
var starsPerClick = 1;

//Goal variable for restart
var restartNum = 1000000000000000

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

function increment() {
    stars += starsPerClick;
    document.getElementById("showStars").textContent = stars;
}

setInterval(function(){
    stars += starsPerSecond;
    document.getElementById("showStars").textContent = stars;

    if(stars >= restartNum) {
        restart();
    } else {
        document.getElementById("warning-txt").textContent = "You can't replace star yet"
    }

    if(stars > 999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 1000) + "k"
    }
    if (stars > 999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**6) + "M"
    }
    if (stars > 999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**9) + "b"
    }
    if (stars > 99999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**12) + "t"
    }
    if (stars > 999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**15) + "Qua"
    }
    if (stars > 999999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**17) + "Qui"
    }
    if (stars > 999999999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**21) + "Sex"
    }
    if (stars > 999999999999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**24) + "Sep"
    }
    if (stars > 999999999999999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**27) + "Oct"
    }
    if (stars > 999999999999999999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**30) + "Non"
    }
    if (stars > 999999999999999999999999999999999) {
        document.getElementById("showStars").textContent = Math.floor(stars/ 10**33) + "Dec"
    }
}, 300)

function buyMiners() {
    if (stars >= minersCost){
        stars -= minersCost;
        document.getElementById("showStars").textContent = stars;
        miners++;
        document.getElementById("minersNum").textContent = miners;
        minersCost *= 2;
        document.getElementById("minersCost").textContent = minersCost;
        starsPerSecond += 1;
        document.getElementById("showStarsPerSecond").textContent = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyDrills() {
    if (stars >= drillsCost){
        stars -= drillsCost;
        document.getElementById("showStars").textContent = stars;
        drills++;
        document.getElementById("drillsNum").textContent = drills;
        drillsCost *= 2;
        document.getElementById("drillsCost").textContent = drillsCost;
        starsPerSecond += 4;
        document.getElementById("showStarsPerSecond").textContent = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyLasers() {
    if (stars >= laserCost){
        stars -= laserCost;
        document.getElementById("showStars").textContent = stars;
        lasers++;
        document.getElementById("lasersNum").textContent = lasers;
        laserCost *= 2;
        document.getElementById("laserCost").textContent = laserCost;
        starsPerSecond += 12;
        document.getElementById("showStarsPerSecond").textContent = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyBombs() {
    if (stars >= bombCost){
        stars -= bombCost;
        document.getElementById("showStars").textContent = stars;
        bombs++;
        document.getElementById("bombsNum").textContent = bombs;
        bombCost *= 2;
        document.getElementById("bombCost").textContent = bombCost;
        starsPerSecond += 20;
        document.getElementById("showStarsPerSecond").textContent = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyNukes() {
    if (stars >= nukeCost){
        stars -= nukeCost;
        document.getElementById("showStars").textContent = stars;
        nukes++;
        document.getElementById("nukeNum").textContent = nukes;
        nukeCost *= 2;
        document.getElementById("nukeCost").textContent = nukeCost;
        starsPerSecond += 20;
        document.getElementById("showStarsPerSecond").textContent = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function restart(){
    //Reset the variables to 0
    var stars = 0;
    var starsPerSecond = 0;

    //Reset the cost of items
    var minersCost = 50;
    var drillsCost = 250;
    var laserCost = 1000;
    var bombCost = 5000;
    var nukeCost = 25000;

    //Reset the amount of items
    var miners = 0;
    var drills = 0;
    var lasers = 0;
    var bombs = 0;
    var nukes = 0;

    document.getElementById("showStars").textContent = stars;
    document.getElementById("showStarsPerSecond").textContent = starsPerSecond;
    document.getElementById("minersNum").textContent = miners;
    document.getElementById("drillsNum").textContent = drills;
    document.getElementById("lasersNum").textContent = lasers;
    document.getElementById("bombsNum").textContent = bombs;
    document.getElementById("nukeNum").textContent = nukes;

    document.getElementById("minersCost").textContent = minersCost;
    document.getElementById("drillsCost").textContent = drillsCost;
    document.getElementById("laserCost").textContent = laserCost;
    document.getElementById("bombCost").textContent = bombCost;
    document.getElementById("nukeCost").textContent = nukeCost;
}