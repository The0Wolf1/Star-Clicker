var showStars;
var ticksPerSecond = 20;
var msPerTick = 1000 / ticksPerSecond;
var msPerSave = 60000;
var unfocusedTime;
var refocusedTime;
var updateGameInterval;
var saveGameInterval = setInterval(saveGame, msPerSave);
var store = document.getElementById("store-container");

function init(){
    //initializes game
    showStars = document.getElementById("showStars");
    let x = document.cookie;
    if(x.length > 0) {
        restoreGame(x);
    }
    addStoreElements();
    setGameInterval();
}

document.addEventListener("visibilitychange", () => {
    if(!(document.visibilityState === "visible")) {
        unfocusedTime = new Date();
        clearInterval(updateGameInterval);
    } else if (document.visibilityState === "visible") {
        refocusedTime = new Date();
        setGameInterval();
        refocusedTime(unfocusedTime, refocusedTime);
    }
});

function setGameInterval(){
    updateGameInterval = setInterval(function () {
        if(document.hasFocus){
            updateGame();
        }
    }, msPerTick);
}

function refocused(un, re){
    if (un == null) return;

    var difference = re.getTime() - un.getTime();
    Model.main.stars += (Model.main.starsPerSecond * difference) / 1000;
}

function addStoreElements(){
    var keys = Object.keys(Model.upgrades);

    for(let i = 0; i < Object.keys(Model.upgrades).length; i++){
        console.log(
            "Iterating through forloop in addStoreElements, currently on index " + i
        );
        var key = keys[i];

        var cost = Model.upgrades[key].cost;
        var starsPerSecond = Model.upgrades[key].starsPerSecond;
        var name = Model.upgrades[key].name;

        console.log("Working on " + name);
        store.innerHTML += `
            <div id="store-element" onclick="buyUpgrade('${name}')">
            Buy ${name}
            <div><img src="./images/items/${name}.png" onerror="this.onerror=null; this.src='./images/items/default.png'" id="store-img"></div>
            <p id="${name}-price">Price ${Math.ceil(cost)}</p>
            Adds ${starsPerSecond} stars per second
            </div>
        `;
    }
}

function clickedStar() {
    Model.main.stars += Model.main.starsPerClick;
}

function updateGame(){
    console.log("Running updateGame");
    Model.main.stars += Model.main.starsPerSecond / ticksPerSecond;
    showStars.innerHTML = `${parseInt(Model.main.stars)} Stars`;
}

function buyUpgrade(type){
    var upgrade = Model.upgrades[type];
    var newCost = upgrade.cost * upgrade.costMultiplier;
    if(Model.main.stars >= upgrade.cost) {
        Model.main.stars -= upgrade.cost;
        upgrade.cost = newCost;
        Model.main.starsPerSecond += upgrade.starsPerSecond;
        document.getElementById(
            `${upgrade.name}-price`
        ).innerHTML = `Price ${Math.ceil(newCost)}`;
    }
}

function saveGame(isManual) {
    if(isManual){
        alert("Game saved successfully!");
    }
    document.cookie = generatedGameSave();
}

function generategameSave(){
    var save = JSON.stringify(Model);
    return save;
}

function restoreGame(save) {
    Model = JSON.parse(save);
}

function resetGame() {
    if (confirm("Are you sure you want to reset?")){
        Model = MainModel;
        saveGame();
        reloadGame();
        alert("Game was reset...");
    } else {
        alert("Game was not reset...")
    }
}

function reloadGame(){
    document.location.reload();
}