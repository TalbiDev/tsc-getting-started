var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-100, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "Multimath player"; }
    console.log("New game startig for player: ".concat(name));
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "Multimath player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
    logger("Score: ".concat(score));
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
var logError = function (Err) { return console.error(Err); };
var fisrtPlayer = new Player();
fisrtPlayer.name = "Said";
console.log(fisrtPlayer.formatName());
//# sourceMappingURL=app.js.map