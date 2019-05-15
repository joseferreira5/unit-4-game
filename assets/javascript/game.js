$( document ).ready(function() {
    console.log( "ready!" );

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var game = {
    targetNumber: 0,
    winsTotal: 0,
    lossesTotal: 0,
    crystals: [],
    score: 0,

    startRound: function() {

        for (i = 0; i < 4; i += 1) {
            this.crystals[i] = getRandomIntInclusive(1,12);
            console.log(this.crystals);
        }

        this.targetNumber = getRandomIntInclusive(19,120);
        $("#target-score").html(this.targetNumber);
        console.log(this.targetNumber);
        this.score = 0;
        $("#current-score").html(this.score);
    },

    updateScore: function(index) {
        this.score += this.crystals[index];
        
        $("#current-score").html(this.score);

        this.checkScore();
    },

    checkScore: function() {
        if (this.score === this.targetNumber) {
            this.winsTotal += 1;
            $("#wins-counter").html(this.winsTotal);
            this.startRound();
        } else if (this.score > this.targetNumber) {
            this.lossesTotal += 1;
            $("#loss-counter").html(this.lossesTotal);
            this.startRound();
        }
    }
};

game.startRound();

$("#button1").on("click", function(){
    game.updateScore(0);
});

$("#button2").on("click", function(){
    game.updateScore(1);
});

$("#button3").on("click", function(){
    game.updateScore(2);
});

$("#button4").on("click", function(){
    game.updateScore(3);
});

console.log("my code is working");

});