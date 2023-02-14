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
    document.getElementById("showStars").innerText = stars;
}

setInterval(function(){
    stars += starsPerSecond;
    document.getElementById("showStars").innerText = stars;

    if(stars >= restartNum) {
        restart();
    } else {
        document.getElementById("warning-txt").textContent = "You can't replace star yet"
    }

    if(stars > 999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 1000) + "k"
    }
    if (stars > 999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**6) + "M"
    }
    if (stars > 999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**9) + "b"
    }
    if (stars > 99999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**12) + "t"
    }
    if (stars > 999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**15) + "Qua"
    }
    if (stars > 999999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**17) + "Qui"
    }
    if (stars > 999999999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**21) + "Sex"
    }
    if (stars > 999999999999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**24) + "Sep"
    }
    if (stars > 999999999999999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**27) + "Oct"
    }
    if (stars > 999999999999999999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**30) + "Non"
    }
    if (stars > 999999999999999999999999999999999) {
        document.getElementById("showStars").innerText = Math.floor(stars/ 10**33) + "Dec"
    }
}, 300)

function buyMiners() {
    if (stars >= minersCost){
        stars -= minersCost;
        document.getElementById("showStars").innerText = stars;
        miners++;
        document.getElementById("minersNum").innerText = miners;
        minersCost *= 2;
        document.getElementById("minersCost").innerText = minersCost;
        starsPerSecond += 1;
        document.getElementById("showStarsPerSecond").innerText = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyDrills() {
    if (stars >= drillsCost){
        stars -= drillsCost;
        document.getElementById("showStars").innerText = stars;
        drills++;
        document.getElementById("drillsNum").innerText = drills;
        drillsCost *= 2;
        document.getElementById("drillsCost").innerText = drillsCost;
        starsPerSecond += 4;
        document.getElementById("showStarsPerSecond").innerText = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyLasers() {
    if (stars >= laserCost){
        stars -= laserCost;
        document.getElementById("showStars").innerText = stars;
        lasers++;
        document.getElementById("lasersNum").innerText = lasers;
        laserCost *= 2;
        document.getElementById("laserCost").innerText = laserCost;
        starsPerSecond += 12;
        document.getElementById("showStarsPerSecond").innerText = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyBombs() {
    if (stars >= bombCost){
        stars -= bombCost;
        document.getElementById("showStars").innerText = stars;
        bombs++;
        document.getElementById("bombsNum").innerText = bombs;
        bombCost *= 2;
        document.getElementById("bombCost").innerText = bombCost;
        starsPerSecond += 20;
        document.getElementById("showStarsPerSecond").innerText = starsPerSecond;
    } else {
        document.getElementById("warning-txt").textContent = "You don't have enough stars!"
    }
}

function buyNukes() {
    if (stars >= nukeCost){
        stars -= nukeCost;
        document.getElementById("showStars").innerText = stars;
        nukes++;
        document.getElementById("nukeNum").innerText = nukes;
        nukeCost *= 2;
        document.getElementById("nukeCost").innerText = nukeCost;
        starsPerSecond += 20;
        document.getElementById("showStarsPerSecond").innerText = starsPerSecond;
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

    return stars;
    return starsPerSecond;
    return miners;
    return drills;
    return lasers;
    return bombs;
    return nukes;

    return minersCost;
    return drillsCost;
    return laserCost;
    return bombCost;
    return nukeCost;
}