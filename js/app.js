var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementID) {
        var inputElement = document.getElementById(elementID);
        return inputElement.value;
    };
    return Utility;
}());
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.playerName + ':' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        var scoreElement = document.getElementById('scores');
        scoreElement.innerHTML = output;
    };
    return Scoreboard;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 0; i < this.problemCount; i++) {
            gameForm += '<div class ="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class ="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        var gameElt = document.getElementById('game');
        gameElt.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculate = function () {
        var _a;
        var score = 0;
        for (var i = 0; i < this.problemCount; i++) {
            var answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer)
                score++;
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        (_a = document.getElementById('calculate')) === null || _a === void 0 ? void 0 : _a.setAttribute('disabled', "false");
    };
    return Game;
}());
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player();
    player.name = Utility.getInputValue('playername');
    var problemCount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculate();
});
//# sourceMappingURL=app.js.map